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
import { HeaderComponent }  from "../components/header/header.component";
import { AdComponent }      from "../components/ad/ad.component";
import { AddIconComponent } from "../components/add-icon/add-icon.component";

//services
import { AuthService }      from "../services/auth/auth.service";
import { AdService }        from "../services/ad/ad.service";
import { RouteService }     from "../services/route/route.service";
import { FilterService }    from "../services/filter/filter.service";
import {OrderService} from "../services/order/order.service";
import {BrandPipe} from "../pipes/brand/brand.pipe";
import {CarPipe} from "../pipes/car/car.pipe";


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
      BrandPipe,
      CarPipe,
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
      OrderService,
      BrandPipe,
      CarPipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
