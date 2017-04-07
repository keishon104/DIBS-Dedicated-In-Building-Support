import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyContentComponent } from '../components/my-content/my-content';
import { CategoryPage } from '../pages/category/category';
import { TrendingPage } from '../pages/trending/trending';
import { ProfilePage } from '../pages/profile/profile';
import { ProductsPage } from '../pages/products/products';
import { CompanyOnePage } from '../pages/company-one/company-one';
import { CalendarPage } from '../pages/calendar/calendar';
import { AprilAppointmentsPage } from '../pages/april-appointments/april-appointments';
import { CheckoutPage } from '../pages/checkout/checkout';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { CategoriesComponent } from '../components/categories/categories';



const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'dca3032b'
  }
};



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyContentComponent,
    CategoriesComponent,
    CategoryPage,
    TrendingPage,
    ProfilePage,
    ProductsPage,
    CompanyOnePage,
    CalendarPage,
    AprilAppointmentsPage,
    CheckoutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    TrendingPage,
    ProfilePage,
    ProductsPage,
    CompanyOnePage,
    CalendarPage,
    AprilAppointmentsPage,
    CheckoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
