import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, App } from 'ionic-angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { OwnerShopsPage } from './owner-shops/owner-shops';
import { OwnerDealsPage } from './owner-deals/owner-deals';
import { HomePage } from '../home/home';
import { ChatroomPage } from '../chatroom/chatroom';

/**
 * Generated class for the OwnerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-owner-home',
  templateUrl: 'owner-home.html',
})
export class OwnerHomePage {
  tab1;
  tab2;
  tab3;
  isExpired=true;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private storage:Storage,
     public menuCtrl: MenuController,
     private app:App
    ) {
    this.tab1 = OwnerShopsPage;
    this.tab2 = OwnerDealsPage;
    this.tab3 = ChatroomPage;
  }
  ionViewWillEnter(){
    const helper = new JwtHelperService();
        this.storage.get('token')
    .then(t=>{
       this.isExpired = helper.isTokenExpired(t.token);
       if(this.isExpired){
        return this.app.getRootNav().setRoot(LoginPage);
       }
       else return true;
          });
          this.menuCtrl.enable(false,'customer');
          this.menuCtrl.enable(true,'owner');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnerHomePage');

  }

}
