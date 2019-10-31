import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerShopsNewPage } from './owner-shops-new';

@NgModule({
  declarations: [
    OwnerShopsNewPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnerShopsNewPage),
  ],
})
export class OwnerShopsNewPageModule {}
