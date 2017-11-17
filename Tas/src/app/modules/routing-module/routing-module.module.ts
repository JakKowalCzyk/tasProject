import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {MainPage} from "../../pages/main/main";
import {AboutFirmComponent} from "../../pages/about-pages/about-firm/about-firm.component";
import {ContactComponent} from "../../pages/about-pages/contact/contact.component";
import {TermsComponent} from "../../pages/about-pages/terms/terms.component";
import {LoginComponent} from "../../pages/user-pages/login/login.component";
import {OfferComponent} from "../../pages/about-pages/offer/offer.component";
import {RegisterComponent} from "../../pages/user-pages/register/register.component";
import {UserProfileComponent} from "../../pages/user-pages/user/user.profile.component";
import {AuthGuard} from "../../guards/AuthGuard";
import {RentsComponent} from "../../pages/car-pages/rents/rents.component";
import {CarPage} from "../../pages/car-pages/car/car";
import {AdminComponent} from "../../pages/user-pages/admin/admin.component";
import {AdminGuard} from "../../guards/AdminGuard";
import {AddCarComponent} from "../../pages/car-pages/add-car/add-car.component";
import {EditCarComponent} from "../../pages/car-pages/edit-car/edit-car.component";

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
  },
  {
    path: 'edit-car/:id', component: EditCarComponent, canActivate: [AdminGuard]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}
