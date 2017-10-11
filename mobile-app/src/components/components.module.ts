import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { AdComponent } from './ad/ad';
@NgModule({
	declarations: [
    HeaderComponent,
    AdComponent],
	imports: [],
	exports: [
    HeaderComponent,
    AdComponent]
})
export class ComponentsModule {}
