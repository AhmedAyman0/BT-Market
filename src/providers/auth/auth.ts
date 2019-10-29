import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';

import { NavController, IonicPage, AlertController, LoadingController, Loading } from 'ionic-angular';
import { LoadingProvider } from '../loading/loading';


@Injectable()
export class AuthProvider {
  loader;
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    url = "http://localhost:5000/api";
    constructor(private http: HttpClient,
      private storage:Storage,
      private alertController:AlertController,
      private loadingProv:LoadingProvider,
      private loadingController:LoadingController
      ) {
        this.currentUserSubject = new BehaviorSubject<any>(this.storage.get('token'));
        this.currentUser = this.currentUserSubject.asObservable();

    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

     login(cardentials) {


        this.loadingProv.present();
        this.http.post<any>(`${this.url}/login`, cardentials)
        .pipe(map(async token => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.storage.set('token', token);
            const helper = new JwtHelperService();
            const user = helper.decodeToken(token.token);
            console.log(token.token)
            this.currentUserSubject.next(user);
              await this.loadingProv.dismiss();
            return user;
        })).catch(async error=>{
           this.showAlert(error.error.msg);
            await this.loadingProv.dismiss();
          return new Error(error.error.msg)
        });
      

    }
    register(cardentials){
      this.loadingProv.present();
      return this.http.post<any>(`${this.url}/register`, cardentials)
          .pipe(map(token => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              this.storage.set('token', token);
              const helper = new JwtHelperService();
              const user = helper.decodeToken(token.token);
              console.log(token.token)
              this.currentUserSubject.next(user);
              this.loadingProv.dismiss();
              return user;
          })).catch(async error=>{
            this.loadingProv.dismiss();
             this.showAlert(error.error.msg);
            return new Error(error);
          });
    }

    logout() {
        // remove user from local storage to log user out
       this.storage.remove('token');
        this.currentUserSubject.next(null);
    }
    showAlert(msg) {
      let alert = this.alertController.create({
        message: msg,
        title: 'Error',
        buttons: ['OK'],
      });
      alert.present();
    }

}