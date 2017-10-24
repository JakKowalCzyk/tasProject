export class Order {
    id          : number;
    carId       : number;
    from        : any;
    to          : any;
    totalPrice  : number;
    active      : boolean;
    willBeActive: boolean;

    constructor(
        id          : number,
        carId       : number,
        from        : any,
        to          : any,
        totalPrice  : number,
        active      : boolean,
        willBeActive: boolean,
    ) {
        this.id          = id;
        this.carId       = carId;
        this.from        = from;
        this.to          = to;
        this.totalPrice  = totalPrice;
        this.active      = active;
        this.willBeActive= willBeActive;
    }


}