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
// import {routableComponents, RoutingModuleModule} from "./routing-module/routing-module.module";


const appRoutes: Routes = [
  { path: 'dzejkob', component: NnnComponent },
  { path: 'main', component: MainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NnnComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent, MainComponent]
})
export class AppModule { }
