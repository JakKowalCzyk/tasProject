export class CarOption {
    public static NAMES = {
        1 : "Klimatyzacja",
        2 : "Nawigacja",
        3 : "Elektryczne szyby",
        4 : "Radio",
        5 : "Szyberdach"
    };

    name                : number;
    public isEnabled    : number;

    constructor(name : number, isEnabled : number) {
        this.name       = name;
        this.isEnabled  = isEnabled;
    }

}