import { NgModule }         from '@angular/core';
import { HeaderComponent }  from './header/header.component';
import { AdComponent }      from './ad/ad.component';
import { AddIconComponent } from './add-icon/add-icon.component';
import { BrandPipe }        from "../pipes/brand/brand.pipe";
import { OrderComponent }   from './order/order.component';
import {IonicModule} from "ionic-angular";
import {MyApp} from "../app/app.component";
import {PipesModule} from "../pipes/pipes.module";
@NgModule({
	declarations: [
        HeaderComponent,
        AdComponent,
        AddIconComponent,
        // BrandPipe,
    OrderComponent,
    ],
	imports: [
        IonicModule.forRoot(MyApp),
        PipesModule,
    ],
	exports: [
        HeaderComponent,
        AdComponent,
        AddIconComponent,
    OrderComponent,
    ],
    providers: [
        // BrandPipe
    ]
})
export class ComponentsModule {}
