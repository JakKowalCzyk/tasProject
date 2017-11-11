import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { CookieService } from 'angular2-cookie/services/cookies.service';

//pages
import {MainPage} from './pages/main/main';
import {CarPage} from './pages/car/car';

//components
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutFirmComponent} from './pages/about-firm/about-firm.component';
import {TermsComponent} from './pages/terms/terms.component';
import {ContactComponent} from './pages/contact/contact.component';
import {LoginComponent} from './pages/login/login.component';
import {OfferComponent} from './pages/offer/offer.component';
import {RegisterComponent} from './pages/register/register.component';
import {CarService} from "./services/car-service";
import {BrandService} from "./services/brand-service";
import {CarComponent} from './components/car/car.component';
import {UserService} from "./services/user-service";
import {RouteService} from "./services/route-service";
import {HttpModule} from "@angular/http";
import {PipesModule} from "./pipes/pipes.module";
import {FilterComponent} from './components/filter/filter.component';
import {UserProfileComponent} from "./pages/user/user.profile.component";

// import {MaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
} from "@angular/material";
import {AddCarComponent} from './components/add-car/add-car.component';
import {RentedCarPipe} from "./pipes/rented-car.pipe";
import {CarPipe} from "./pipes/car.pipe";
import {RentsComponent} from "./pages/rents/rents.component";
import {RentedCarService} from "./services/rented-car-service";
import {AuthGuard} from "./guards/AuthGuard";
import {AdminGuard} from "./guards/AdminGuard";

//services
// import {routableComponents, RoutingModuleModule} from "./routing-module/routing-module.module";


const appRoutes: Routes = [
  {
    path: 'main', component: MainPage
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'about-firm', component: AboutFirmComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'terms', component: TermsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'offer', component: OfferComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'car/:id', component: CarPage
  },
  {
    path: 'me', component: UserProfileComponent, canActivate: [ AuthGuard ]
  },

  {
    path: 'me/rents', component: RentsComponent, canActivate: [ AuthGuard ]
  },

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
    CarComponent,
    FilterComponent,
    UserProfileComponent,
    AddCarComponent,
    RentsComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    // MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    PipesModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
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
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
