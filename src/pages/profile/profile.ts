import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Toast } from "@ionic-native/toast";
import { CameraOptions, Camera } from "@ionic-native/camera";
import { AngularFireDatabase } from "angularfire2/database";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "angularfire2/storage";
import { Storage } from "@ionic/storage";
import { UserProvider } from "../../providers/user/user";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  form: FormGroup;
  submitted = false;
  user: any;
  avatarUrl:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private storage:Storage,
    private camera:Camera,
    private afStorage:AngularFireStorage,
    private userPrv:UserProvider,
    private toast:Toast,
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      avatar: ["",]
    });

    this.storage.get("token").then(t => {
      this.user = t.user;

    });


  }
  ionViewDidLoad() {

    console.log("ionViewDidLoad OwnerShopsNewPage");
  }
  async capturePicture() {
    //define camera options
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      targetWidth: 600,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    try {
      const result = await this.camera.getPicture(options);
      const image = `data:image/jpeg;base64,${result}`;
      const picture =this.afStorage.ref("images/"+Math.random());
      picture.putString(image, "data_url").downloadURL().subscribe(url=>console.log(url));
    } catch (error) {
      console.log(error+'erp');
    }
  }
  onChange($event){
    console.log($event.target.files[0]);
    let image = $event.target.files[0];
    const uploadTask = this.afStorage.ref(`images/${image.name}`).put(image);
    uploadTask.downloadURL().subscribe(url=>this.avatarUrl=url);
  }
  onSubmit() {
    if (!this.form.valid) {
      return;
    } else {
      let user:any;
      Object.assign(user,this.user);
      user.email = this.form.value.email;
      if(this.avatarUrl){
        user.avatar=this.avatarUrl;
        this.userPrv.editUser(user,user.id).subscribe(resp=>{
          this.toast.show('Profile updated!','1500','bottom').subscribe();
          this.navCtrl.pop();
        })
      }
      
    }
  }
}
