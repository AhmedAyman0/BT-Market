import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item';
import { ShopComponent } from './shop/shop';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../app/app.component';
@NgModule({
	declarations: [ItemComponent,
    ShopComponent],
	imports: [IonicModule],
	exports: [ItemComponent,
    ShopComponent]
})
export class ComponentsModule {}
