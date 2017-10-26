import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NnnComponent } from './nnn/nnn.component';
import {RouterModule, Routes} from "@angular/router";
// import {routableComponents, RoutingModuleModule} from "./routing-module/routing-module.module";


const appRoutes: Routes = [
  { path: 'crisis-center', component: NnnComponent } ]

@NgModule({
  declarations: [
    AppComponent,
    NnnComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
