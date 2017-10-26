import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NnnComponent } from './nnn/nnn.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CarComponent } from './car/car.component';
import { AboutFirmComponent } from './about-firm/about-firm.component';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
// import {routableComponents, RoutingModuleModule} from "./routing-module/routing-module.module";


const appRoutes: Routes = [
  { path: 'dzejkob', component: NnnComponent },
  { path: 'main', component: MainComponent},
  { path: 'about-firm', component: AboutFirmComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'terms', component: TermsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NnnComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CarComponent,
    AboutFirmComponent,
    TermsComponent,
    ContactComponent,
    // routableComponents
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent, MainComponent]
})
export class AppModule { }
