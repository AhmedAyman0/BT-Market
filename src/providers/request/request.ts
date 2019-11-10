import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Request} from '../../app/Models/request';
/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {
  private url='https://pure-sierra-38607.herokuapp.com/api/requests';
  constructor(private http: HttpClient) {
    console.log("Hello RequestProvider Provider");
  }
  addRequest(request:Request){
    return this.http.post(`${this.url}`,request);
  }
  getFor(id){
    return this.http.get(`${this.url}/${id}`);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  edit(id,deal){
    return this.http.put(`${this.url}/${id}`,deal);

  }
}
