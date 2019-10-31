import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CategoryProvider } from "../../../providers/category/category";
import { Category } from "../../../app/Models/category";
import { CustomerDiscoverShopsPage } from "./customer-discover-shops/customer-discover-shops";

/**
 * Generated class for the CustomerDiscoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-customer-discover",
  templateUrl: "customer-discover.html"
})
export class CustomerDiscoverPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categProv: CategoryProvider
  ) {}
  categs:Category[];
  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomerDiscoverPage");
    this.categProv.getAll().subscribe((resp:Category[])=>{
      this.categs=resp;
    })
  }
  goToShops(categId){
    this.navCtrl.push(CustomerDiscoverShopsPage,{categId});
  }
}
