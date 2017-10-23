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

@Injectable()
export class FilterService extends HasResponse {

    activeFilters   : any;

    filteredCars    : Array<Car>;
    brands          : Object;

    constructor(
        private eventss         : Events,
        private http            : Http,
        private routeService    : RouteService,
        private adService       : AdService,
        private authService     : AuthService,
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
                    this.filteredCars.push(new Car(
                        car.id,
                        car.brandId,
                        car.name,
                        car.categoryType,
                        car.photo,
                        car.pricePerDay,
                        car.productionDate,
                        new Engine(car.fuelType, car.power, car.driveType),
                        [
                            car.hasAirConditioning,
                            car.hasNavi,
                            car.hasElectricWindow,
                            car.hasRadio,
                            car.hasSunroof,
                            !car.hasManualGearbox
                        ])
                    )
                }
            },(err) => {
                this.error(err.json(), 'car:filtered');
            })
    }

    clearFilters() {
        this.activeFilters = null;
    }
}