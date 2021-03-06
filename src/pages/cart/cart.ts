import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CartProvider } from "../../providers/cart/cart";
import { CustomerShopsHomePage } from "../home/customer-shops-home/customer-shops-home";
import { CheckOutProvider } from "../../providers/check-out/check-out";
import { CheckOut } from "../../app/Models/checkOut";
import { Storage } from "@ionic/storage";
import { Request } from "../../app/Models/request";
import { RequestProvider } from "../../providers/request/request";
import { UserProvider } from "../../providers/user/user";
import { NotificationProvider } from "../../providers/notification/notification";
import { ItemProvider } from "../../providers/item/item";
import { ShopProvider } from "../../providers/shop/shop";

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
    private shopProv:ShopProvider,
    private userProv:UserProvider,
    private notify:NotificationProvider
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
    this.navCtrl.pop();
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
          request.checkOut=checkOutId;
          request.item=item._id;
          this.shopProv.getById(item.shop).subscribe((res:any)=>{
            request.to=res.belongsTo._id;
            this.requestProv.addRequest(request).subscribe(resp=>{
              console.log('item',item)
              this.userProv.getUserById(request.to).subscribe((r:any)=>{
                this.notify.pushNotification({msg:"You have a new request",email:r.email}).subscribe();
              })
            });
          })
          this.navCtrl.pop();
          this.cartProvider.nullify();
        }
          )

      }
    )

  }
}
