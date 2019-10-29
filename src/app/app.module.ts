import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule} from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import {  JwtInterceptor } from '../providers/jwt-interceptopr/jwt-interceptopr';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OwnerHomePage } from '../pages/owner-home/owner-home';
import { RoleProvider } from '../providers/role/role';
import { OwnerShopsPage } from '../pages/owner-home/owner-shops/owner-shops';
import { OwnerDealsPage } from '../pages/owner-home/owner-deals/owner-deals';
import { CustomerDealsPage } from '../pages/home/customer-deals/customer-deals';
import { CustomerDiscoverPage } from '../pages/home/customer-discover/customer-discover';
import { RegisterPage } from '../pages/register/register';
import { LoadingProvider } from '../providers/loading/loading';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    OwnerShopsPage,
    OwnerDealsPage,
    CustomerDealsPage,
    CustomerDiscoverPage,
    OwnerHomePage
  ],
  imports: [
    BrowserModule,
    
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    OwnerHomePage,
    OwnerShopsPage,
    CustomerDealsPage,
    CustomerDiscoverPage,
    OwnerDealsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
    AuthProvider,
    Storage,
    RoleProvider,
    LoadingProvider,
    
  ]
})
export class AppModule {}
