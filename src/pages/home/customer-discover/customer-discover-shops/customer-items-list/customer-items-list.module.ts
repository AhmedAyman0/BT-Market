import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerItemsListPage } from './customer-items-list';

@NgModule({
  declarations: [
    CustomerItemsListPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerItemsListPage),
  ],
})
export class CustomerItemsListPageModule {}
