export class Engine {

    FUEL = {
        1 : 'Pb',
        2 : 'Diesel',
        3 : 'LPG',
        4 : 'Electric'
    };

    DRIVE = {
        1 : 'FWD',
        2 : 'RWD',
        3 : 'AWD'
    };

    fuel    : number;
    power   : number;
    drive   : number;

    constructor(
        fuel    : number,
        power   : number,
        drive   : number,
    ) {
        this.fuel   = fuel;
        this.power  = power;
        this.drive  = drive;
    }
}