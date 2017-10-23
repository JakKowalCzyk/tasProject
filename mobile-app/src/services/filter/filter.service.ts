import { Injectable }       from "@angular/core";
import { HasResponse }      from "../../pseudoTraits/hasResponse/HasResponse";
import { Events }           from "ionic-angular";
import { Http }             from "@angular/http";

//models
import { Car }              from "../../models/Car";
import { Engine }           from "../../models/Engine";

//services
import { RouteService}      from "../route/route.service";
import { AdService}         from "../ad/ad.service";
import { AuthService }      from "../auth/auth.service";
import {CarPipe} from "../../pipes/car/car.pipe";

@Injectable()
export class FilterService extends HasResponse {

    activeFilters   : any;
    activeSort      : any;

    filteredCars    : Array<Car>;
    brands          : Object;

    constructor(
        private eventss         : Events,
        private http            : Http,
        private routeService    : RouteService,
        private adService       : AdService,
        private authService     : AuthService,
        private carPipe         : CarPipe
    ) {
        super(eventss);
        this.subscribeEvents();
    }

    subscribeEvents() {
        this.eventss.subscribe('loggedOut'  , () => { this.clearFilters() });
        this.eventss.subscribe('logged'     , () => { this.clearFilters() });
    }

    filter(data) {
        let brands = this.adService.brands;

        if (data.brand != '' && data.brand != null) {
            for (let k in brands) {
                if (brands[k] == data.brand) {
                    delete data.brand;
                    data['brandId'] = k;
                }
            }
            if (!data.brandId) {
                data['brandId'] = -1;
            }
        }

        this.activeFilters = data;

        let route = data.from ? this.routeService.routes.filter + '/dates' : this.routeService.routes.filter;

        this.http.get(route, { search: data,  headers : this.authService.headers })
            .subscribe((res) => {
                this.success('', 'car:filtered');
                this.filteredCars = [];
                for (let car of res.json()) {
                    this.filteredCars.push(this.carPipe.transform(car))
                }
                this.activeSort ? this.sort(this.activeSort) : '';
            },(err) => {
                this.error(err.json(), 'car:filtered');
            })
    }

    clearFilters() {
        this.activeFilters = null;
    }

    sort(method : number) {
        this.activeSort     = method;
        let activeFilters   = this.activeFilters;
        switch(method) {
            case 1:
                activeFilters ? this.filteredCars.sort(this.byPriceAsc) : this.adService.allCars.sort(this.byPriceAsc);
                break;
            case 2:
                activeFilters ? this.filteredCars.sort(this.byPriceDesc) : this.adService.allCars.sort(this.byPriceDesc);
                break;
            case 3:
                activeFilters ? this.filteredCars.sort(this.byPower) : this.adService.allCars.sort(this.byPower);
                break;
        }
    }

    byPriceAsc(a,b) {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
    }

    byPriceDesc(a,b) {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
    }

    byPower(a,b) {
        if (a.engine.power < b.engine.power) return 1;
        if (a.engine.power > b.engine.power) return -1;
        return 0;
    }
}
