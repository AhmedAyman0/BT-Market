import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerShopItemsPage } from './owner-shop-items';

@NgModule({
  declarations: [
    OwnerShopItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnerShopItemsPage),
  ],
})
export class OwnerShopItemsPageModule {}
