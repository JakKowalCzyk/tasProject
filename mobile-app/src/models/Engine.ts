export class Engine {

    // public static FUEL = {
    //     1 : 'PB',
    //     2 : 'ON',
    //     3 : 'LPG',
    //     4 : 'Electric'
    // };

    FUEL = [
        'PB',
        'ON',
        'LPG',
        'Electric'
    ];

    DRIVE = [
        'FWD',
        'RWD',
        'AWD'
    ];

    // DRIVE = {
    //     1 : 'FWD',
    //     2 : 'RWD',
    //     3 : 'AWD'
    // };

    // fuel    : number;
    fuel    : string;
    power   : number;
    // drive   : number;
    drive   : string;

    constructor(
        // fuel    : number,
        fuel    : string,
        power   : number,
        // drive   : number,
        drive   : string,
    ) {
        this.fuel   = fuel;
        this.power  = power;
        this.drive  = drive;
    }
}