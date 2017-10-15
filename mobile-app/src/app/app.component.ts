import { Component, ViewChild }     from '@angular/core';
import { Events, Nav, Platform }    from 'ionic-angular';
import { StatusBar }                from '@ionic-native/status-bar';
import { SplashScreen }             from '@ionic-native/splash-screen';

//pages
import { HomePage }   from '../pages/home/home';
import { LoginPage }  from '../pages/login/login';

//services
import { AdService }  from "../services/ad/ad.service";
import {LogoutPage} from "../pages/logout/logout";

@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;


  constructor(
      public platform       : Platform,
      public statusBar      : StatusBar,
      public splashScreen   : SplashScreen,
      private adService     : AdService,
      private events        : Events,
  ) {
      this.initializeApp();
      this.subscribeEvents();
      this.makePages();

  }

  makePages() {
      this.pages = [
          { title: 'HomePage', component: HomePage },
          { title: 'Zaloguj', component: LoginPage },
      ];
  }

  subscribeEvents() {
      this.events.subscribe("logged", () => { this.onLogin(); })
  }

  onLogin() {
      this.pages.splice(1,1);
      this.pages.push({ title: "Wyloguj", component : LogoutPage })
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
