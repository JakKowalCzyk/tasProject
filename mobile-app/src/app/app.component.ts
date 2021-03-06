import { Component, ViewChild }     from '@angular/core';
import {Events, Nav, Platform, ToastController}    from 'ionic-angular';
import { StatusBar }                from '@ionic-native/status-bar';
import { SplashScreen }             from '@ionic-native/splash-screen';

//pages
import { HomePage }   from '../pages/home/home';
import { LoginPage }  from '../pages/login/login';

//services
import { AdService }  from "../services/ad/ad.service";
import {LogoutPage} from "../pages/logout/logout";
import {AuthService} from "../services/auth/auth.service";
import {MyOrdersPage} from "../pages/my-orders/my-orders";

@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;
    pages: Array<{title: string, component: any}>;

    _login      : () => void;
    _logout     : () => void;

  constructor(
      public platform       : Platform,
      public statusBar      : StatusBar,
      public splashScreen   : SplashScreen,
      private adService     : AdService,
      private events        : Events,
      private authService   : AuthService,
      private toastCtrl     : ToastController,
  ) {
      this.initializeApp();
      this.subscribeEvents();

  }

  logWithStorage() {
      this.authService.logWithStorage();
  }

  makePages() {
      this.pages = [
          { title: 'HomePage', component: HomePage },
          { title: 'Zaloguj', component: LoginPage },
      ];
  }

  subscribeEvents() {
      this._login = () => {
          this.onLogin();
      };
      this._logout = () => {
          console.log(this.events);
          this.onLogout();
      };
      this.events.subscribe("logged"        , this._login);
      this.events.subscribe("loggedOut"     , this._logout);
  }

  onLogin() {
      this.pages.splice(1,1);
      this.pages.push({ title: "Moje Zamówienia", component : MyOrdersPage });
      this.pages.push({ title: "Wyloguj", component : LogoutPage });
  }

  onLogout() {
      let toast = this.toastCtrl.create({
          message   : "Wylogowano poprawnie",
          duration  : 3000,
          cssClass  : 'toastDflt'
      });
      toast.present();
      this.pages.splice(1,2);
      this.pages.push({ title: "Zaloguj", component : LoginPage })
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
      this.makePages();
      this.logWithStorage();
    });
  }
}
