import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { HomePage } from "../home/home";
import { RoleProvider } from "../../providers/role/role";
import { OwnerHomePage } from "../owner-home/owner-home";
import { RegisterPage } from "../register/register";
import { first } from "rxjs/operators";
import { GooglePlus } from "@ionic-native/google-plus";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  form: FormGroup;
  submitted = false;

  constructor(
    private alert: AlertController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private authServ: AuthProvider,
    private googlePlus: GooglePlus,
    private navCtrl: NavController,
    private rolesProvider: RoleProvider
  ) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  // Validation error messages that will be displayed for each form field with errors.
  validation_messages = {
    email: [
      { type: "email", message: "Wrong Email format." },
      { type: "required", message: "Email is required." }
    ],
    password: [{ type: "required", message: "Password is required." }]
  };
  goRegister() {
    this.navCtrl.push(RegisterPage);
  }
  /*
   */
  googleAuth() {
    this.googlePlus
      .login({
        scopes: "", // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        webClientId:
          "981982700923-v3iamlsto4r31imosh20394leld5hg5a.apps.googleusercontent.com", // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        offline: true // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.authServ
        .login(this.form.value)
        .pipe(first())
        .subscribe(
          async resp => {
            let data = await resp;
            console.log(data);
            if (data.role == this.rolesProvider.Roles.Customer) {
              return this.navCtrl.setRoot(HomePage);
            }
            if (data.role == this.rolesProvider.Roles.ShopOwner) {
              return this.navCtrl.setRoot(OwnerHomePage);
            }
          },
          error => {
            this.navCtrl.insert(0, LoginPage);
            this.navCtrl.popToRoot();
          }
        );
    } else {
      return;
    }
  }
}
