import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerShopsHomePage } from './customer-shops-home';

@NgModule({
  declarations: [
    CustomerShopsHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerShopsHomePage),
  ],
})
export class CustomerShopsHomePageModule {}
