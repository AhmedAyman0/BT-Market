import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerDealsPage } from './owner-deals';

@NgModule({
  declarations: [
    OwnerDealsPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnerDealsPage),
  ],
})
export class OwnerDealsPageModule {}
