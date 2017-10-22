import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AdComponent } from './ad/ad.component';
import { AddIconComponent } from './add-icon/add-icon.component';
@NgModule({
	declarations: [
        HeaderComponent,
        AdComponent,
        AddIconComponent,
    ],
	imports: [],
	exports: [
        HeaderComponent,
        AdComponent,
        AddIconComponent,
    ]
})
export class ComponentsModule {}
