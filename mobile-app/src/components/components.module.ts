import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { AdComponent } from './ad/ad';
import { AddIconComponent } from './add-icon/add-icon';
@NgModule({
	declarations: [
    HeaderComponent,
    AdComponent,
    AddIconComponent],
	imports: [],
	exports: [
    HeaderComponent,
    AdComponent,
    AddIconComponent]
})
export class ComponentsModule {}
