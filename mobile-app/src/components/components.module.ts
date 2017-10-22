import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AdComponent } from './ad/ad.component';
import { AddIconComponent } from './add-icon/add-icon.component';
import {BrandPipe} from "../pipes/brand/brand.pipe";
@NgModule({
	declarations: [
        HeaderComponent,
        AdComponent,
        AddIconComponent,
        BrandPipe,
    ],
	imports: [],
	exports: [
        HeaderComponent,
        AdComponent,
        AddIconComponent,
    ],
    providers: [
        BrandPipe
    ]
})
export class ComponentsModule {}
