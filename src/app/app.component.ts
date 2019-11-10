import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, App, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HomePage } from '../pages/home/home';
import {  initializeApp} from 'firebase'
import { RoleProvider } from '../providers/role/role';
import { OwnerHomePage } from '../pages/owner-home/owner-home';
import { CustomerShopsHomePage } from '../pages/home/customer-shops-home/customer-shops-home';
import { OwnerShopsNewPage } from '../pages/owner-home/owner-shops-new/owner-shops-new';
import { FIREBASE_CONFIG } from '../config/firebase.config';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  user:any;
  @ViewChild('content') nav: NavController
  constructor(platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen,
      private menuCtr:MenuController,
      private authProv:AuthProvider,
      private alertCtrl:AlertController,
      private storage:Storage,
      private Roles:RoleProvider,
      ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log('pr');
      initializeApp(FIREBASE_CONFIG);
      this.storage.get('token').then(t=>{
        let helper = new JwtHelperService();
        this.user=t.user;
        if(!helper.isTokenExpired(t.token)){
          if(t.user.role==Roles.Roles.Customer)
          this.rootPage=HomePage;
          else
          this.rootPage=OwnerHomePage;
        }
        else{
          this.rootPage=LoginPage;
        }
      })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  addShop(){
    this.rootPage=OwnerShopsNewPage;
    this.menuCtr.close();
  }
  logOut(){
    this.nav.setRoot(LoginPage);
    this.authProv.logout();
    this.menuCtr.close();
  }
  custgoToShops(){
    this.nav.setRoot(CustomerShopsHomePage);
    this.menuCtr.close();

  }
  custgoToCategories(){
    this.nav.setRoot(HomePage);
    this.menuCtr.close();
  }
  promote(){
    this.menuCtr.close();

    let alert = this.alertCtrl.create({
      title: 'Confirm Request',
      message: 'Do you want to be a seller?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm clicked');
          }
        }
      ]
    });
    alert.present();
  }
  goProfile(){
    this.nav.push(ProfilePage);
    this.menuCtr.close();
  }
}

