export class User {

    id          : number;
    email       : string;
    name        : string;
    city        : string;
    base64Auth  : string;

    constructor(
        id          : number,
        email       : string,
        name        : string,
        city        : string,
        base64Auth  : string,
    ) {
        this.id         = id;
        this.email      = email;
        this.name       = name;
        this.city       = city;
        this.base64Auth = base64Auth;
    }

}