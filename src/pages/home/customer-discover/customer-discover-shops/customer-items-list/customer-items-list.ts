import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { ShopProvider } from "../../../../../providers/shop/shop";
import { CustomerModalPage } from "../../../../customer-modal/customer-modal";
import { ItemProvider } from "../../../../../providers/item/item";
import { Request } from "../../../../../app/Models/request";
import { Item } from "../../../../../app/Models/item";
import { Storage } from "@ionic/storage";
import { RequestProvider } from "../../../../../providers/request/request";
import { CartPage } from "../../../../cart/cart";
import { CartProvider } from "../../../../../providers/cart/cart";

/**
 * Generated class for the CustomerItemsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-customer-items-list",
  templateUrl: "customer-items-list.html"
})
export class CustomerItemsListPage {
  shopId;
  items;
  cart:any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopProv: ShopProvider,
    private modal: ModalController,
    private itemProv:ItemProvider,
    private storage:Storage,
    private requestProv:RequestProvider,
    private cartProv:CartProvider,
  ) {
    this.cartProv.Cart.subscribe(c=>this.cart=c);
    this.shopId = this.navParams.get("shopId");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomerItemsListPage");
    this.shopProv.getById(this.shopId).subscribe((resp: any) => {
      this.items = resp.items;
    });
  }
  itemSelected(item) {
    let modal = this.modal.create(CustomerModalPage, { item });
    modal.onDidDismiss(data => {
      if (data) {
        this.itemProv.getById(item._id).subscribe((resp:any)=>{
          let request:any = {};
          request.to=resp.shop.belongsTo;
          this.storage.get('token').then(t=>{
            request.from=t.user.id;
            request.item=item._id;
            this.requestProv.addRequest(request).subscribe(
              resp=>{},
              err=>console.log(err)
            );
          });
        })
      }
      else{
        return;
      }
    });
    modal.present();
  }
  openCart(){
    this.navCtrl.push(CartPage);
  }
}
