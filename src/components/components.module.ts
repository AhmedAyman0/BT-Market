import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item';
import { ShopComponent } from './shop/shop';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../app/app.component';
import { OrderComponent } from './order/order';
@NgModule({
	declarations: [ItemComponent,
    ShopComponent,
    OrderComponent],
	imports: [IonicModule],
	exports: [ItemComponent,
    ShopComponent,
    OrderComponent]
})
export class ComponentsModule {}
