import { Component, Input, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

/**
 * Generated class for the ShopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'shop',
  templateUrl: 'shop.html'
})
export class ShopComponent  {
  @Input() shop = {};
  constructor() {
    console.log('Hello ShopComponent Component');
  }

}
