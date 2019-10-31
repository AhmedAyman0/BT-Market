import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ItemProvider } from "../../../../../providers/item/item";
import { Toast } from '@ionic-native/toast';
import { Item } from "../../../../../app/Models/item";

/**
 * Generated class for the OwnerShopItemsNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-owner-shop-items-new",
  templateUrl: "owner-shop-items-new.html"
})
export class OwnerShopItemsNewPage {
  shopId;
  form: FormGroup;
  submitted = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public itemProv:ItemProvider,
    private toast:Toast

  ) {
    this.shopId = this.navParams.get("shopId");
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      imgUrl: [""],
      shop: [""],
      count: ["", Validators.required],
      description: [""]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OwnerShopItemsNewPage");
  }
  onSubmit() {
    if (!this.form.valid) return;
    //
    this.form.value.shop = this.shopId;
    let item:Item;
    if(this.form.value.imgUrl.trim()==''){
      item = this.form.value;
      delete item.imgUrl;
    }
    console.log(item);
    this.itemProv.newItem(item).subscribe(resp=>{
      this.toast.show('Item Added successfully! , Login to Activate','1500','top').subscribe();
      this.navCtrl.popToRoot();
    })
  }
}
