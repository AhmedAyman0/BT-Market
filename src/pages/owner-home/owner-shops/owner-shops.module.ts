import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerShopsPage } from './owner-shops';

@NgModule({
  declarations: [
    OwnerShopsPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnerShopsPage),
  ],
})
export class OwnerShopsPageModule {}
