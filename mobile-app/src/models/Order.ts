export class Order {
    id          : number;
    carId       : number;
    from        : any;
    to          : any;
    totalPrice  : number;

    constructor(
        id          : number,
        carId       : number,
        from        : any,
        to          : any,
        totalPrice  : number,
    ) {
        this.id          = id;
        this.carId       = carId;
        this.from        = from;
        this.to          = to;
        this.totalPrice  = totalPrice;
    }


}