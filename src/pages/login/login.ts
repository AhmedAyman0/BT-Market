import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { RoleProvider } from '../../providers/role/role';
import { OwnerHomePage } from '../owner-home/owner-home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form : FormGroup;
  submitted = false;

  constructor(
    private alert:AlertController,
     public navParams: NavParams,
     public formBuilder: FormBuilder,
    private authServ:AuthProvider,
    private navCtrl:NavController,
    private rolesProvider:RoleProvider,
    ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password:['',Validators.required]

  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    // Validation error messages that will be displayed for each form field with errors.
    validation_messages = {
        'email': [
        {type: 'email', message: 'Wrong Email format.' },
        {type:'required',message : 'Email is required.'}
      ],
      'password':[
        {type : 'required',message : 'Password is required.'}
      ]
    }
    goRegister(){
      this.navCtrl.push(RegisterPage);
    }
    /*
     */
    onSubmit() {
      this.submitted=true;
        if (this.form.valid) {
          this.authServ.login(this.form.value).subscribe(resp=>{
            if(resp.role==this.rolesProvider.Roles.Customer){
              return this.navCtrl.setRoot(HomePage);
            }
            if(resp.role==this.rolesProvider.Roles.ShopOwner){
              return this.navCtrl.setRoot(OwnerHomePage);
            }
          }
          ,error=>{
            this.navCtrl.insert(0,LoginPage);
            this.navCtrl.popToRoot();
          }
          
          )
        }
        else{
          return ;
        }
    }

}
