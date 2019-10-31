import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerDiscoverShopsPage } from './customer-discover-shops';

@NgModule({
  declarations: [
    CustomerDiscoverShopsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerDiscoverShopsPage),
  ],
})
export class CustomerDiscoverShopsPageModule {}
