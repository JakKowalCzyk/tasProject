import { Pipe, PipeTransform } from '@angular/core';
import {Http} from "@angular/http";
import {RouteService} from "../../services/route/route.service";
import {AdService} from "../../services/ad/ad.service";

@Pipe({
  name: 'brand',
})
export class BrandPipe implements PipeTransform {


    constructor(
        private adService : AdService,
    ) {}

    transform(value: number, ...args) {
        return this.adService.brands[value]
    }
}
