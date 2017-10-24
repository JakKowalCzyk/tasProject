import { BrowserModule }                                from '@angular/platform-browser';
import { ErrorHandler, NgModule }                       from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule }     from 'ionic-angular';
import { HttpModule }                                   from '@angular/http';
import { StatusBar }                                    from '@ionic-native/status-bar';
import { SplashScreen }                                 from '@ionic-native/splash-screen';
import { MyApp }                                        from './app.component';
import { IonicStorageModule }                           from "@ionic/storage";
import { MyDateRangePickerModule }                      from 'mydaterangepicker';
import { FingerprintAIO }                               from '@ionic-native/fingerprint-aio';

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
import {MyOrdersPage} from "../pages/my-orders/my-orders";
import {OrderComponent} from "../components/order/order.component";
import { CarPipe} from "../pipes/car/car.pipe";
import { ComponentsModule } from "../components/components.module";
import { PipesModule } from "../pipes/pipes.module";


@NgModule({
  declarations: [
      MyApp,
      HomePage,
      LoginPage,
      CarPage,
      RegisterPage,
      LogoutPage,
      OrderPage,
      AddCarPage,
      FilterPage,
      MyOrdersPage,
  ],
  imports: [
      ComponentsModule,
      PipesModule,
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
      MyOrdersPage,
      OrderComponent,
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
      FingerprintAIO,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
