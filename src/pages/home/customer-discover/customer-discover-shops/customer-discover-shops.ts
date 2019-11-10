import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CategoryProvider } from "../../../../providers/category/category";
import { Category } from "../../../../app/Models/category";
import { CustomerItemsListPage } from "./customer-items-list/customer-items-list";
import { ShopProvider } from "../../../../providers/shop/shop";
import { CartProvider } from "../../../../providers/cart/cart";
import { CartPage } from "../../../cart/cart";

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
  cart:any[];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categProv:CategoryProvider,
    private shopProv:ShopProvider,
    private cartProv:CartProvider,
  ) {
    this.categId = this.navParams.get("categId");
    this.cartProv.Cart.subscribe(c=>this.cart=c);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomerDiscoverShopsPage");
    if(this.categId){
      this.categProv.getById(this.categId).subscribe((resp:Category)=>{
        this.category=resp;
        this.shops=this.category.shops
        })
    }
    else{
      this.shopProv.getAll().subscribe(resp=>{
        this.shops=resp;
      })
    }

  }
  goToItemsList(shopId){
    this.navCtrl.push(CustomerItemsListPage,{shopId})
  }
  openCart(){
    this.navCtrl.push(CartPage);
  }
}
