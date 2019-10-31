import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerShopItemsNewPage } from './owner-shop-items-new';

@NgModule({
  declarations: [
    OwnerShopItemsNewPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnerShopItemsNewPage),
  ],
})
export class OwnerShopItemsNewPageModule {}
