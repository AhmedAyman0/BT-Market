import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CartProvider } from "../../providers/cart/cart";
import { CustomerShopsHomePage } from "../home/customer-shops-home/customer-shops-home";
import { CheckOutProvider } from "../../providers/check-out/check-out";
import { CheckOut } from "../../app/Models/checkOut";
import { Storage } from "@ionic/storage";
import { Request } from "../../app/Models/request";
import { RequestProvider } from "../../providers/request/request";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cart",
  templateUrl: "cart.html"
})
export class CartPage {
  cart:any[];
  user:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage,
    private cartProvider:CartProvider,
    private checkOutProvider:CheckOutProvider,
    private requestProv:RequestProvider,
  ) {
    this.cartProvider.Cart.subscribe(c=>this.cart=c);
    this.storage.get('token').then(
      t=>this.user=t.user
    )
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CartPage");
  }
  remove(item){
    console.log(this.cart);
    this.cartProvider.remove(item);
  }
  goBack(){
    this.navCtrl.setRoot(CustomerShopsHomePage);
  }
  checkOut(){
    console.log('checkout');
    let checkOut:any={};
    let checkOutId;
    checkOut.belongsTo=this.user.id;
    this.checkOutProvider.newCheckOut(checkOut).subscribe(
      (resp:any)=>
      {
        checkOutId=resp._id;
        this.cart.forEach(item=>{
          let request:any={};
          request.from=this.user.id;
          request.to=item.shop.belongsTo;
          request.checkOut=checkOutId;
          this.requestProv.addRequest(request).subscribe(resp=>console.log(resp))
        }
          )

      }
    )

  }
}
