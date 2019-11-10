import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { Item } from "../../app/Models/item";
import { CartProvider } from "../../providers/cart/cart";

/**
 * Generated class for the CustomerModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-customer-modal",
  templateUrl: "customer-modal.html"
})
export class CustomerModalPage {
  item:Item;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl:ViewController,
    private cartProv:CartProvider,
  ) {
    this.item = this.navParams.get("item");

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomerModalPage");
    console.log(this.item);
  }

  addToCart(item){
    if(!item){
      this.viewCtrl.dismiss();
      return ;
    }
    // console.log(result);
    this.cartProv.addItem(this.item);
    this.viewCtrl.dismiss();

  }
}
