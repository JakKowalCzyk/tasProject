import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule }       from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {HeaderComponent} from "../components/header/header";
import {AuthService} from "../services/auth/auth.service";
import {Http} from "@angular/http";

@NgModule({
  declarations: [
      MyApp,
      HomePage,
      ListPage,
      LoginPage,
      HeaderComponent,
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
      ListPage,
      LoginPage,
      HeaderComponent,
  ],
  providers: [
      StatusBar,
      SplashScreen,
      AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
