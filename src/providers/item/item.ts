import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemProvider {
  url='https://pure-sierra-38607.herokuapp.com/api/items';
  constructor(public http: HttpClient) {
    console.log('Hello ItemProvider Provider');
  }
  newItem(item){
    return this.http.post(this.url,item);
  }
}
