import {Events} from "ionic-angular";
export class HasResponse {

    constructor(private events  : Events) {}

    success(response : Object, event : string) {
        console.log(response, event);
        this.events.publish(event);
    }

    error(response : any, event : string) {
        console.log(response.message);
        this.events.publish('error:' + event, { msg : response.message})
    }

}