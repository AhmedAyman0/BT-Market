import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {

  isLoading = false;

  constructor(public loadingController: LoadingController) { }
loader;
  async present() {
    this.loader=  this.loadingController.create({
      content:'Please wait ...',
    });
      return  this.loader.present().then(() => {
        console.log('presented');
        if (this.isLoading) {
          this.loader.dismiss().then(() => console.log('abort presenting'));
        }
      });
    };
  


  async dismiss() {
    this.isLoading = false;
    if(this.loader){
       await this.loader.dismiss().then(() => console.log('dismissed'));
       this.loader=null;
    }
    
  }
}
