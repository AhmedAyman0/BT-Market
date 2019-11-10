import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  url='https://pure-sierra-38607.herokuapp.com/api/users/';
  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
    
  }
  editUser(user,id){
    return this.http.put(`${this.url}/${id}`,user);
  }

}
