import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ShopProvider } from "../../../providers/shop/shop";
import { Storage } from "@ionic/storage";
import { OwnerHomePage } from "../owner-home";
import { Toast } from "@ionic-native/toast";

/**
 * Generated class for the OwnerShopsNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-owner-shops-new",
  templateUrl: "owner-shops-new.html"
})
export class OwnerShopsNewPage {
  form: FormGroup;
  submitted = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private shopProv:ShopProvider,
    private storage:Storage,
    private toast:Toast
  ) {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      imgUrl: ["", Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OwnerShopsNewPage");
  }
  onSubmit() {
    if (!this.form.valid) {
      return;
    } else {
      this.storage.get('token').then(t=>{
        let shop:any={};
        shop.belongsTo=t.user.id;
        shop.name=this.form.value.name;
        shop.imgUrl=this.form.value.imgUrl;
        this.shopProv.newShop(shop).subscribe(
          resp=>{
            this.toast
            .show("Shop added Successfully!", "1500", "top")
            .subscribe();
            this.navCtrl.setRoot(OwnerHomePage);
          }
        )
      })
    }
  }
}
