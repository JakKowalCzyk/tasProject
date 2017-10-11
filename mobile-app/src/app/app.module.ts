import { BrowserModule }                                from '@angular/platform-browser';
import { ErrorHandler, NgModule }                       from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule }     from 'ionic-angular';
import { HttpModule }                                   from '@angular/http';
import { StatusBar }                                    from '@ionic-native/status-bar';
import { SplashScreen }                                 from '@ionic-native/splash-screen';
import { MyApp }                                        from './app.component';

//pages
import { HomePage }         from '../pages/home/home';
import { LoginPage }        from "../pages/login/login";

//components
import { HeaderComponent }  from "../components/header/header";

//services
import { AuthService }      from "../services/auth/auth.service";
import { AdService }        from "../services/ad/ad.service";
import { RouteService }     from "../services/route/route.service";
import {AdComponent} from "../components/ad/ad";


@NgModule({
  declarations: [
      MyApp,
      HomePage,
      LoginPage,
      HeaderComponent,
      AdComponent,
  ],
  imports: [
      BrowserModule,
      HttpModule,
      IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      HomePage,
      LoginPage,
      HeaderComponent,
      AdComponent,
  ],
  providers: [
      StatusBar,
      SplashScreen,
      AuthService,
      AdService,
      RouteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
