import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerItemsListPage } from './customer-items-list';
import { ComponentsModule } from '../../../../../components/components.module';

@NgModule({
  declarations: [
    CustomerItemsListPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CustomerItemsListPage),
  ],
})
export class CustomerItemsListPageModule {}
