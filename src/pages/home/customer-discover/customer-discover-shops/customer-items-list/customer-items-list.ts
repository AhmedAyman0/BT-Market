import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ShopProvider } from "../../../../../providers/shop/shop";

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopProv:ShopProvider,
  ) {
    this.shopId = this.navParams.get("shopId");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomerItemsListPage");
    this.shopProv.getById(this.shopId).subscribe((resp:any)=>{
      this.items=resp.items;
    })
  }
}
