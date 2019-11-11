import { Component, Input } from "@angular/core";
import { CheckOutProvider } from "../../providers/check-out/check-out";
import { Storage } from "@ionic/storage";
import { RequestProvider } from "../../providers/request/request";

/**
 * Generated class for the OrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "order",
  templateUrl: "order.html"
})
export class OrderComponent {
  requests: any[]=[];
  user: any;
  @Input() checkOut:any;

  constructor(
    private checkOutProv: CheckOutProvider,
    private storage: Storage,
    private requestProv:RequestProvider
    ) {
    this.storage.get("token").then(t => {
      this.user = t.user;
      this.requestProv.getFor(this.checkOut._id).subscribe((resp:any)=>{
        this.requests = resp;
      })
      });
  }
}
