import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerDealsPage } from './customer-deals';

@NgModule({
  declarations: [
    CustomerDealsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerDealsPage),
  ],
})
export class CustomerDealsPageModule {}
