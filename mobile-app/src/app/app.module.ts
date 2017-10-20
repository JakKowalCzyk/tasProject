import { BrowserModule }                                from '@angular/platform-browser';
import { ErrorHandler, NgModule }                       from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule }     from 'ionic-angular';
import { HttpModule }                                   from '@angular/http';
import { StatusBar }                                    from '@ionic-native/status-bar';
import { SplashScreen }                                 from '@ionic-native/splash-screen';
import { MyApp }                                        from './app.component';
import { IonicStorageModule }                           from "@ionic/storage";
import { MyDateRangePickerModule }                      from 'mydaterangepicker';

//pages
import { HomePage }         from '../pages/home/home';
import { LoginPage }        from "../pages/login/login";
import { CarPage }          from '../pages/car/car';
import { RegisterPage }     from '../pages/register/register';
import { LogoutPage }       from "../pages/logout/logout";
import { OrderPage }        from "../pages/order/order";
import { AddCarPage }       from "../pages/add-car/add-car";
import { FilterPage }       from "../pages/filter/filter";

//components
import { HeaderComponent }  from "../components/header/header";
import { AdComponent }      from "../components/ad/ad";
import { AddIconComponent } from "../components/add-icon/add-icon";

//services
import { AuthService }      from "../services/auth/auth.service";
import { AdService }        from "../services/ad/ad.service";
import { RouteService }     from "../services/route/route.service";
import { FilterService }    from "../services/filter/filter.service";


@NgModule({
  declarations: [
      MyApp,
      HomePage,
      LoginPage,
      HeaderComponent,
      AdComponent,
      CarPage,
      RegisterPage,
      LogoutPage,
      OrderPage,
      AddIconComponent,
      AddCarPage,
      FilterPage,
  ],
  imports: [
      BrowserModule,
      HttpModule,
      IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot(),
      MyDateRangePickerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      HomePage,
      LoginPage,
      HeaderComponent,
      AdComponent,
      CarPage,
      RegisterPage,
      LogoutPage,
      OrderPage,
      AddIconComponent,
      AddCarPage,
      FilterPage,
  ],
  providers: [
      StatusBar,
      SplashScreen,
      AuthService,
      AdService,
      RouteService,
      FilterService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
