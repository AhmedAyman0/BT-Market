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
import { OneSignal } from '@ionic-native/onesignal';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  user:any;
  signalAppId='e3ad473d-a2e2-445f-8e86-b667961ca10a';
  firebaseId='1050501326505';
  @ViewChild('content') nav: NavController
  constructor(platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen,
      private menuCtr:MenuController,
      private authProv:AuthProvider,
      private alertCtrl:AlertController,
      private storage:Storage,
      private oneSignal:OneSignal,
      private Roles:RoleProvider,
      private push:Push,
      ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.oneSignal.startInit(this.signalAppId, this.firebaseId);

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();
      console.log('pr');
      ////////////////////////////////////////////////////
    //   const options: PushOptions = {
    //     android: {},
    //     ios: {
    //         alert: 'true',
    //         badge: true,
    //         sound: 'false'
    //     },
    //     windows: {},
    //     browser: {
    //         pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    //     }
    //  };
     
    //  const pushObject: PushObject = this.push.init(options);
     
     
    //  pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
     
    //  pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
     
    //  pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

      initializeApp(FIREBASE_CONFIG);
      this.storage.get('token').then(t=>{
        let helper = new JwtHelperService();
        this.user=t.user;
        oneSignal.setEmail(t.email);
        if(!helper.isTokenExpired(t.token)){
          if(t.user.role==Roles.Roles.Customer)
          this.rootPage=HomePage;
          else
          this.rootPage=OwnerHomePage;
        }
        else{
          this.rootPage=LoginPage;
        }
      }).catch(err=>this.rootPage=LoginPage);
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

