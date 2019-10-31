import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, App, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { OwnerShopsPage } from '../pages/owner-home/owner-shops/owner-shops';
import { AuthProvider } from '../providers/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild('content') nav: NavController
  constructor(platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen,
      private menuCtr:MenuController,
      private authProv:AuthProvider,
      private alertCtrl:AlertController,
      ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  gotoShops(){
    this.rootPage=OwnerShopsPage;
    this.menuCtr.close();
  }
  logOut(){
    this.nav.setRoot(LoginPage);
    this.authProv.logout();
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
}

