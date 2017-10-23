import { NgModule } from '@angular/core';
import { BrandPipe } from './brand/brand.pipe';
import { CarPipe } from './car/car.pipe';
@NgModule({
	declarations: [BrandPipe,
    CarPipe],
	imports: [],
	exports: [BrandPipe,
    CarPipe]
})
export class PipesModule {}
