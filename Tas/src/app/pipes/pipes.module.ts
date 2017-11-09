import {NgModule} from '@angular/core';
import {CarPipe} from "./car.pipe";
import {RentedCarPipe} from "./rented-car.pipe";

@NgModule({
  declarations: [
    CarPipe,
    RentedCarPipe],
  imports: [],
  exports: [
    CarPipe,
    RentedCarPipe]
})
export class PipesModule {
}
