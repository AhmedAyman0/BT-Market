import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerShopsPage } from './owner-shops';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    OwnerShopsPage,
    
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(OwnerShopsPage),
  ],
})
export class OwnerShopsPageModule {}
