import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,) {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      imgUrl: ["", Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OwnerShopsNewPage");
  }
}
