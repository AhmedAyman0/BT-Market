import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerDiscoverPage } from '../customer-discover/customer-discover';
import { CustomerDealsPage } from '../customer-deals/customer-deals';
import { CustomerDiscoverShopsPage } from '../customer-discover/customer-discover-shops/customer-discover-shops';

/**
 * Generated class for the CustomerShopsHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-shops-home',
  templateUrl: 'customer-shops-home.html',
})
export class CustomerShopsHomePage {
  tab1;
  tab2;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = CustomerDiscoverShopsPage;
    this.tab2 = CustomerDealsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerShopsHomePage');
  }

}
