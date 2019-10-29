import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerDiscoverPage } from './customer-discover';

@NgModule({
  declarations: [
    CustomerDiscoverPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerDiscoverPage),
  ],
})
export class CustomerDiscoverPageModule {}
