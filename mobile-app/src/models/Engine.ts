export class Engine {

    FUEL = [
        'PB',
        'DIESEL',
        'LPG',
        'ELECTRIC'
    ];

    DRIVE = [
        'FWD',
        'RWD',
        'AWD'
    ];

    fuel    : string;
    power   : number;
    drive   : string;

    constructor(
        fuel    : string,
        power   : number,
        drive   : string,
    ) {
        this.fuel   = fuel;
        this.power  = power;
        this.drive  = drive;
    }
}