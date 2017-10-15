export class CarOption {
    public static NAMES = {
        1 : "Klimatyzacja",
        2 : "Nawigacja",
        3 : "Elektryczne szyby",
        4 : "Radio",
        5 : "Szyberdach",
        6 : "Automat"
    };

    name                : number;
    public isEnabled    : boolean;

    constructor(name : number, isEnabled : boolean) {
        this.name       = name;
        this.isEnabled  = isEnabled;
    }

}