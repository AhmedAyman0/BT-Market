import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerDealsPage } from './customer-deals';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    CustomerDealsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CustomerDealsPage),
  ],
})
export class CustomerDealsPageModule {}
