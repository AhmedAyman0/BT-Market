import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";


/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {
  private _cart:BehaviorSubject<any[]>;
  private items:any[]=[];
  constructor(private http: HttpClient) {
    console.log('Hello CartProvider Provider');
    this._cart = new BehaviorSubject([]);
  }
  get Cart(){
    return this._cart.asObservable();
  }
  addItem(item){
    this.items.push(item);
    return this._cart.next(this.items);
  }
  remove(item){
    this.items=this.items.filter(i=>i._id != item._id);
    return this._cart.next(this.items);
  }
  nullify(){
    return this._cart.next([]);
  }
}
