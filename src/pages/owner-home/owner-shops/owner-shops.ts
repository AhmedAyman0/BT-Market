import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav } from "ionic-angular";
import { ShopProvider } from "../../../providers/shop/shop";
import { Shop } from "../../../app/Models/shop";
import { OwnerShopItemsPage } from "./owner-shop-items/owner-shop-items";
import { Storage } from "@ionic/storage";
import { OwnerShopsNewPage } from "../owner-shops-new/owner-shops-new";

/**
 * Generated class for the OwnerShopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-owner-shops",
  templateUrl: "owner-shops.html"
})
export class OwnerShopsPage {
  shops: Shop[];
  userId;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopP: ShopProvider,
    private storage:Storage
  ) {}

  ionViewDidLoad() {
    this.storage.get('token').then(t=>{
      this.shopP.getByUser(t.user._id).subscribe((resp: Shop[]) => {
        this.shops = resp;
        this.userId=t.user._id;
        console.log(resp);
      });
    })

    console.log("ionViewDidLoad OwnerShopsPage");
  }

  goToItemsList = function(shopId) {
    this.navCtrl.push(OwnerShopItemsPage, { shopId });
  }

  newShop()

  {   
     this.navCtrl.push(OwnerShopsNewPage, { userId:this.userId });

  }
}
