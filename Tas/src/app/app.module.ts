import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CookieService} from 'angular2-cookie/services/cookies.service';
//pages
import {MainPage} from './pages/main/main';
import {CarPage} from './pages/car/car';
//components
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutFirmComponent} from './pages/about-pages/about-firm/about-firm.component';
import {TermsComponent} from './pages/about-pages/terms/terms.component';
import {ContactComponent} from './pages/about-pages/contact/contact.component';
import {LoginComponent} from './pages/user-pages/login/login.component';
import {OfferComponent} from './pages/about-pages/offer/offer.component';
import {RegisterComponent} from './pages/user-pages/register/register.component';
import {CarService} from "./services/car-service";
import {BrandService} from "./services/brand-service";
import {CarComponent} from './components/car/car.component';
import {UserService} from "./services/user-service";
import {RouteService} from "./services/route-service";
import {HttpModule} from "@angular/http";
import {PipesModule} from "./pipes/pipes.module";
import {FilterComponent} from './components/filter/filter.component';
import {UserProfileComponent} from "./pages/user-pages/user/user.profile.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AddCarComponent} from './pages/add-car/add-car.component';
import {RentedCarPipe} from "./pipes/rented-car.pipe";
import {CarPipe} from "./pipes/car.pipe";
import {RentsComponent} from "./pages/rents/rents.component";
import {RentedCarService} from "./services/rented-car-service";
import {AuthGuard} from "./guards/AuthGuard";
import {AdminGuard} from "./guards/AdminGuard";
import {CookieOptions} from "angular2-cookie/core";
import {AdminComponent} from "./pages/user-pages/admin/admin.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RentDialogComponent} from "./components/dialog/rent/rent.dialog.component";
import {ProgressDialogComponent} from "./components/dialog/progress/progress.dialog.component";
import {MaterialModule} from "./modules/material-module/material.module";
import {RoutingModule} from "./modules/routing-module/routing-module.module";

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
    CarComponent,
    FilterComponent,
    UserProfileComponent,
    AddCarComponent,
    RentsComponent,
    AdminComponent,
    RentDialogComponent,
    ProgressDialogComponent
  ],
  imports: [
    RoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    PipesModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    CarService,
    BrandService,
    UserService,
    RentedCarService,
    RouteService,
    CarPipe,
    RentedCarPipe,
    AuthGuard,
    AdminGuard,
      { provide: CookieOptions, useValue: {}},
    CookieService,
  ],
  entryComponents: [
    RentDialogComponent,
    ProgressDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
