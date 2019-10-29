import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { OwnerHomePage } from '../owner-home/owner-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1;
  tab2;
  message;
  isExpired=true;
  constructor(public navCtrl: NavController,private storage:Storage,private http:HttpClient) {

    this.tab1 = OwnerHomePage;
    this.tab2 = OwnerHomePage;

  }
  ionViewWillEnter(){
    const helper = new JwtHelperService();
        this.storage.get('token')
    .then(t=>{
       this.isExpired = helper.isTokenExpired(t.token);
       return !this.isExpired;
          });
  }
  ionViewDidEnter(){
    this.http.get('http://localhost:5000/api/special').subscribe(
      resp=>console.log(resp)
    )
  }

}
