import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatToolbarModule
} from "@angular/material";
import {AddCarComponent} from './components/add-car/add-car.component';
import {RentedCarPipe} from "./pipes/rented-car.pipe";
import {CarPipe} from "./pipes/car.pipe";

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
    path: 'me', component: UserProfileComponent
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
    CarComponent,
    FilterComponent,
    UserProfileComponent,
    AddCarComponent
    // routableComponents
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
    MatNativeDateModule
  ],
  providers: [
    CarService,
    BrandService,
    UserService,
    RouteService,
    CarPipe,
    RentedCarPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
