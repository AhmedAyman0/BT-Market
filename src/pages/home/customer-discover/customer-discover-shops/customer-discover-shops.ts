import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CategoryProvider } from "../../../../providers/category/category";
import { Category } from "../../../../app/Models/category";
import { CustomerItemsListPage } from "./customer-items-list/customer-items-list";

/**
 * Generated class for the CustomerDiscoverShopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-customer-discover-shops",
  templateUrl: "customer-discover-shops.html"
})
export class CustomerDiscoverShopsPage {
  categId;
  category:Category;
  shops;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categProv:CategoryProvider
  ) {
    this.categId = this.navParams.get("categId");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomerDiscoverShopsPage");
    this.categProv.getById(this.categId).subscribe((resp:Category)=>{
    this.category=resp;
    this.shops=this.category.shops
    })
  }
  goToItemsList(shopId){
    this.navCtrl.push(CustomerItemsListPage,{shopId})
  }
}
