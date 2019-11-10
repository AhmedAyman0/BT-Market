import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RequestProvider } from "../../../providers/request/request";
import { Storage } from "@ionic/storage";
import { Request } from "../../../app/Models/request";
import { CartProvider } from "../../../providers/cart/cart";
import { CartPage } from "../../cart/cart";

/**
 * Generated class for the CustomerDealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-customer-deals",
  templateUrl: "customer-deals.html"
})
export class CustomerDealsPage {
  userId;
  deals:Request[];
  cart:any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private requestProv: RequestProvider,
    private storage: Storage,
    private cartProv:CartProvider
  ) {
    this.cartProv.Cart.subscribe(cart=>this.cart=cart)
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomerDealsPage");
  }
  ionViewDidEnter() {
    this.storage.get("token").then(t => {
      this.userId = t.user.id;
      this.requestProv.getFor(this.userId).subscribe((resp: Request[]) => {
        this.deals = resp;
        console.log("reqs", this.deals);
      });
    });
  }
  openCart(){
    this.navCtrl.push(CartPage);

  }
}
