import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
//pages
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
//components
import {MainPage} from './pages/main/main';
import {CarPage} from './pages/car/car';
import {AboutFirmComponent} from './pages/about-firm/about-firm.component';
import {TermsComponent} from './pages/terms/terms.component';
import {ContactComponent} from './pages/contact/contact.component';
import {LoginComponent} from './pages/login/login.component';
import {OfferComponent} from './pages/offer/offer.component';
import {RegisterComponent} from './pages/register/register.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {CategoryMenuComponent} from './components/category-menu/category-menu.component';
import {CategoryViewComponent} from './pages/category-view/category-view.component';
import {CarService} from "./services/car-service";
import {BrandService} from "./services/brand-service";
import {CarComponent} from './components/car/car.component';
import {UserService} from "./services/user-service";
import {RouteService} from "./services/route-service";
import {CarPipe} from "./pipes/car.pipe";
import {HttpModule} from "@angular/http";

//services
// import {routableComponents, RoutingModuleModule} from "./routing-module/routing-module.module";


const appRoutes: Routes = [
  {
      path      : '',
      component : MainPage
  },
  {
      path      : 'main',
      component : MainPage
  },
  {
      path      : 'about-firm',
      component : AboutFirmComponent
  },
  {
      path      : 'contact',
      component : ContactComponent
  },
  {
      path      : 'terms',
      component : TermsComponent
  },
  {
      path      : 'login',
      component : LoginComponent
  },
  {
      path      : 'offer',
      component : OfferComponent
  },
  {
      path      : 'register',
      component : RegisterComponent
  },
  {
      path      : 'car/:id',
      component : CarPage
  },
  {
      path      : 'category/:typeCategory',
      component : CategoryViewComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPage,
    CarPage,
    AboutFirmComponent,
    TermsComponent,
    ContactComponent,
    OfferComponent,
    LoginComponent,
    RegisterComponent,
    GalleryComponent,
    CategoryMenuComponent,
    CategoryViewComponent,
    CarComponent,
    // routableComponents
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
      CarService,
      BrandService,
    UserService,
    RouteService,
    CarPipe
  ],
  bootstrap: [AppComponent, MainPage]
})
export class AppModule { }
