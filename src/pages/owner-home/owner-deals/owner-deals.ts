import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ItemSliding } from "ionic-angular";
import { RequestProvider } from "../../../providers/request/request";
import { Storage } from "@ionic/storage";
import { Request } from "../../../app/Models/request";
import { Toast } from '@ionic-native/toast';


/**
 * Generated class for the OwnerDealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-owner-deals",
  templateUrl: "owner-deals.html"
})
export class OwnerDealsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private requestProv:RequestProvider,
    private storage:Storage,
    private toast: Toast,
  ) {}
  sellerId;
  deals:Request[];
  ionViewDidLoad() {
  }
  ionViewDidEnter() {
    console.log("ionViewDidLoad OwnerDealsPage");
    this.storage.get('token').then(t=>{
      this.sellerId=t.user._id;
      this.requestProv.getFor(this.sellerId).subscribe((resp:Request[])=>{
        console.log('d',resp);
        this.deals=resp;

      }
      );
    })
  }
  approve(item,sItem:ItemSliding){
    item.isPending=false;
    this.requestProv.edit(item._id,item).subscribe(resp=>{
      this.toast.show(`Deal approved successfully!`, '2000', 'center').subscribe(
        toast => {
          console.log(toast);
          this.requestProv.getFor(this.sellerId).subscribe((resp:Request[])=>{
            console.log('d',resp);
            this.deals=resp;
            sItem.close();
          }
          );
        }
      )
    });
  }
  delete(item,sItem : ItemSliding){
    this.requestProv.delete(item._id).subscribe(resp=>{
      this.toast.show(`Deal Canceled!`, '2000', 'center').subscribe(
        toast => {
          console.log(toast);
          this.requestProv.getFor(this.sellerId).subscribe((resp:Request[])=>{
            console.log('d',resp);
            this.deals=resp;
            sItem.close();
          }
          );
        }
      )}
    )
  }
}
