import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {MainPage} from "../../pages/main/main";
import {AboutFirmComponent} from "../../pages/about-firm/about-firm.component";
import {ContactComponent} from "../../pages/contact/contact.component";
import {TermsComponent} from "../../pages/terms/terms.component";
import {LoginComponent} from "../../pages/login/login.component";
import {OfferComponent} from "../../pages/offer/offer.component";
import {RegisterComponent} from "../../pages/register/register.component";
import {UserProfileComponent} from "../../pages/user/user.profile.component";
import {AuthGuard} from "../../guards/AuthGuard";
import {RentsComponent} from "../../pages/rents/rents.component";
import {CarPage} from "../../pages/car/car";
import {AdminComponent} from "../../pages/admin/admin.component";
import {AdminGuard} from "../../guards/AdminGuard";
import {AddCarComponent} from "../../pages/add-car/add-car.component";

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
    path: 'me', component: UserProfileComponent, canActivate: [AuthGuard]
  },

  {
    path: 'me/rents', component: RentsComponent, canActivate: [AuthGuard]
  },

  {
    path: 'admin', component: AdminComponent, canActivate: [AdminGuard]
  },
  {
    path: 'addcar', component: AddCarComponent, canActivate: [AdminGuard]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}


