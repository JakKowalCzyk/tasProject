import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages
import { HomePage }   from '../pages/home/home';
import { LoginPage }  from '../pages/login/login';

//services
import { AdService }  from "../services/ad/ad.service";

@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;


  constructor(
      public platform     : Platform,
      public statusBar    : StatusBar,
      public splashScreen : SplashScreen,
      private adService   : AdService,
  ) {
      this.initializeApp();
      this.pages = [
        { title: 'HomePage', component: HomePage },
        { title: 'Zaloguj', component: LoginPage },
      ];
  }

  openPage(page) {
      this.nav.setRoot(page.component);
  }

  initializeApp() {
      this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.adService.all();
    });
  }
}
