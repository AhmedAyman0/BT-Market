import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { Observable } from "rxjs";
import { Socket } from "ngx-socket-io";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-chatroom",
  templateUrl: "chatroom.html"
})
export class ChatroomPage {
  messages = [];
  nickname = "";
  message = "";

  constructor(
    private storage:Storage,
    private navCtrl: NavController,
    private navParams: NavParams,
    private socket: Socket,
    private toastCtrl: ToastController
  ) {


    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data["user"];
      if (data["event"] === "left") {
        this.showToast("User left: " + user);
      } else {
        this.showToast("User joined: " + user);
      }
    });
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }
  ionViewWillEnter(){
    this.storage.get('token').then(t=>{
      console.log(t);
      this.nickname=t.user.email;
      this.socket.connect();
      this.socket.emit('set-nickname', this.nickname);
    })

  }

  sendMessage() {
    this.socket.emit("add-message", { text: this.message });
    this.message = "";
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on("message", data => {
        observer.next(data);
      });
    });
    return observable;
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on("users-changed", data => {
        observer.next(data);
      });
    });
    return observable;
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
