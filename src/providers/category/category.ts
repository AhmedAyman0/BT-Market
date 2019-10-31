import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {
  url='https://pure-sierra-38607.herokuapp.com/api/category'
  constructor(public http: HttpClient) {
    console.log('Hello CategoryProvider Provider');
  }
  getAll(){
    return this.http.get(this.url);
  }
  getById(id){
    return this.http.get(`${this.url}/${id}`);

  }
}
