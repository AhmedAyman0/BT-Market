import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { RoleProvider } from "../../providers/role/role";
import { LoginPage } from "../login/login";
import { Toast } from "@ionic-native/toast";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  form: FormGroup;
  submitted = false;

  constructor(
    private alert: AlertController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private authServ: AuthProvider,
    private navCtrl: NavController,
    private rolesProvider: RoleProvider,
    private toast: Toast
  ) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      role: [""]
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

  /*
   */
  onSubmit() {
    this.submitted = true;
    if (!this.form.valid) {
      return;
    } else {
      let newUser = this.form.value;
      newUser.email = newUser.email.toLowerCase();
      if (newUser.role) {
        newUser.role = this.rolesProvider.Roles.ShopOwner;
      } else {
        newUser.role = this.rolesProvider.Roles.Customer;
      }
      this.authServ.register(newUser).subscribe(
        resp => {
          console.log("reg", resp);
          this.navCtrl.setRoot(LoginPage);
          this.toast
            .show(
              "Registeration Successfull! , Login to Activate",
              "1500",
              "top"
            )
            .subscribe();
        },
        error => {
          console.log(error);
          return;
        }
      );
    }
  }
}
