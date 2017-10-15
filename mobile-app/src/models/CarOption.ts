export class CarOption {

    public NAMES = [
        "Klimatyzacja",
        "Nawigacja",
        "Elektryczne szyby",
        "Radio",
        "Szyberdach",
        "Automat"
    ];

    name                : number;
    public isEnabled    : boolean;

    constructor(name : number, isEnabled : boolean) {
        this.name       = name;
        this.isEnabled  = isEnabled;
    }

    getName() {
        return this.NAMES[this.name];
    }

}