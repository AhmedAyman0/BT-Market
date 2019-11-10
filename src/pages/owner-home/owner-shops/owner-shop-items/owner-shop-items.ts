import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { Shop } from "../../../../app/Models/shop";
import { ShopProvider } from "../../../../providers/shop/shop";
import { Item } from "../../../../app/Models/item";
import { OwnerShopItemsNewPage } from "./owner-shop-items-new/owner-shop-items-new";

/**
 * Generated class for the OwnerShopItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-owner-shop-items",
  templateUrl: "owner-shop-items.html"
})
export class OwnerShopItemsPage {
  shopId;
  shop: Shop;
  items: Item[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopP: ShopProvider,
  ) {
    console.log("item");
    this.shopId = this.navParams.get("shopId");
  }

  ionViewDidLoad() {
    this.shopP.getById(this.shopId).subscribe((resp: Shop) => {
      this.shop = resp;
      this.items = this.shop.items;
    });
    console.log("ionViewDidLoad OwnerShopItemsPage");
  }
  addItem() {
    this.navCtrl.push(OwnerShopItemsNewPage, { shopId: this.shopId });
  }
}
