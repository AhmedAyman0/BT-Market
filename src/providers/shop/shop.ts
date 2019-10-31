import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ShopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopProvider {
  url='http://localhost:5000/api/shops'
  constructor(private http: HttpClient) {
    console.log('Hello ShopProvider Provider');
  }
  getAll(){
    return this.http.get(this.url);
  }
  getByUser(id){
    return this.http.get(`${this.url}/user/${id}`);
  }
  getById(id){
    return this.http.get(`${this.url}/${id}`);
  }
}
