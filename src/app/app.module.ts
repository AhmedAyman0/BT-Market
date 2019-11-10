import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { IonicApp,  IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule} from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
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
import {Camera} from '@ionic-native/camera/'
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
import { ComponentsModule } from '../components/components.module';
import { ShopComponent } from '../components/shop/shop';
import { CustomerModalPage } from '../pages/customer-modal/customer-modal';
import { CustomerModalPageModule } from '../pages/customer-modal/customer-modal.module';
import { RequestProvider } from '../providers/request/request';
import {GooglePlus } from '@ionic-native/google-plus';
import { CustomerShopsHomePage } from '../pages/home/customer-shops-home/customer-shops-home';
import { CustomerShopsHomePageModule } from '../pages/home/customer-shops-home/customer-shops-home.module';
import { CartProvider } from '../providers/cart/cart';
import { CartPage } from '../pages/cart/cart';
import { CartPageModule } from '../pages/cart/cart.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ProfilePage } from '../pages/profile/profile';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FIREBASE_CONFIG } from '../config/firebase.config';
import { UserProvider } from '../providers/user/user';
import { CheckOutProvider } from '../providers/check-out/check-out';
 


@NgModule({
  declarations: [
    HomePage,
    
    MyApp,

  ],
  imports: [
    CustomerShopsHomePageModule,
    OwnerHomePageModule,
    LoginPageModule,
    RegisterPageModule,
    CartPageModule,
    CustomerModalPageModule,
    OwnerShopsPageModule,
    ProfilePageModule,
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
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    CustomerShopsHomePage,
    LoginPage,
    CustomerModalPage,
    OwnerShopsNewPage,
    ProfilePage,
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
    LocalNotifications,
    Camera,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
    AuthProvider,
    RoleProvider,
    GooglePlus,
    LoadingProvider,
    ShopProvider,
    ItemProvider,
    CategoryProvider,
    RequestProvider,
    CartProvider,
    UserProvider,
    CheckOutProvider,
    
  ]
})
export class AppModule {}
