import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationProvider {
private url='https://pure-sierra-38607.herokuapp.com/api/notify';
  constructor(private http: HttpClient) {
  }
  pushNotification(msg){
    return this.http.post(this.url,msg);
  }

}
