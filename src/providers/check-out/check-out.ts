import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CheckOutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CheckOutProvider {
  url = 'https://pure-sierra-38607.herokuapp.com/api/checkouts';
  constructor(private http: HttpClient) {
    console.log('Hello CheckOutProvider Provider');
  }
  get(id){
    return this.http.get(`${this.url}/${id}`)
  }
  newCheckOut(checkOut){
    return this.http.post(`${this.url}`,checkOut);
  }
}
