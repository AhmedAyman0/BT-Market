import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { IonicApp,  IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule} from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
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
import { Toast } from '@ionic-native/toast';
import { ShopProvider } from '../providers/shop/shop';
import { OwnerShopItemsPage } from '../pages/owner-home/owner-shops/owner-shop-items/owner-shop-items';
import { OwnerHomePageModule } from '../pages/owner-home/owner-home.module';
import { CustomerDiscoverPageModule } from '../pages/home/customer-discover/customer-discover.module';
import { CustomerDealsPageModule } from '../pages/home/customer-deals/customer-deals.module';
import { OwnerShopItemsPageModule } from '../pages/owner-home/owner-shops/owner-shop-items/owner-shop-items.module';
import { OwnerDealsPageModule } from '../pages/owner-home/owner-deals/owner-deals.module';
import { OwnerShopsPageModule } from '../pages/owner-home/owner-shops/owner-shops.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { LoginPageModule } from '../pages/login/login.module';
import { OwnerShopsNewPage } from '../pages/owner-home/owner-shops-new/owner-shops-new';
import { OwnerShopsNewPageModule } from '../pages/owner-home/owner-shops-new/owner-shops-new.module';
import { ItemProvider } from '../providers/item/item';
import { OwnerShopItemsNewPageModule } from '../pages/owner-home/owner-shops/owner-shop-items/owner-shop-items-new/owner-shop-items-new.module';
import { OwnerShopItemsNewPage } from '../pages/owner-home/owner-shops/owner-shop-items/owner-shop-items-new/owner-shop-items-new';
import { CategoryProvider } from '../providers/category/category';
import { CustomerItemsListPageModule } from '../pages/home/customer-discover/customer-discover-shops/customer-items-list/customer-items-list.module';
import { CustomerDiscoverShopsPageModule } from '../pages/home/customer-discover/customer-discover-shops/customer-discover-shops.module';
import { CustomerItemsListPage } from '../pages/home/customer-discover/customer-discover-shops/customer-items-list/customer-items-list';
import { CustomerDiscoverShopsPage } from '../pages/home/customer-discover/customer-discover-shops/customer-discover-shops';


@NgModule({
  declarations: [
    HomePage,
    MyApp,

  ],
  imports: [
    OwnerHomePageModule,
    LoginPageModule,
    RegisterPageModule,
    OwnerShopsPageModule,
    OwnerShopsNewPageModule,
    OwnerDealsPageModule,
    OwnerShopItemsPageModule,
    CustomerDealsPageModule,
    CustomerItemsListPageModule,
    CustomerDiscoverShopsPageModule,
    OwnerShopItemsNewPageModule,
    CustomerDiscoverPageModule,
    OwnerHomePageModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    OwnerShopsNewPage,
    RegisterPage,
    OwnerHomePage,
    OwnerShopItemsPage,
    CustomerItemsListPage,
    CustomerDiscoverShopsPage,
    OwnerShopsPage,
    OwnerShopItemsNewPage,
    CustomerDealsPage,
    CustomerDiscoverPage,
    OwnerDealsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
    AuthProvider,
    RoleProvider,
    LoadingProvider,
    ShopProvider,
    ItemProvider,
    CategoryProvider,
    
  ]
})
export class AppModule {}
