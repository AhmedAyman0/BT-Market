import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RoleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoleProvider {
  private _roles={Customer : "customer" ,Admin: "admin" , ShopOwner :"shop owner"};
  constructor(public http: HttpClient) {
    console.log('Hello RoleProvider Provider');
  }
  get Roles(){
    return this._roles;
  }
}
