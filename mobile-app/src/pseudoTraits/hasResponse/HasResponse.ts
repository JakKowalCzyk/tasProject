import {Events} from "ionic-angular";
export class HasResponse {

    constructor(private events  : Events) {}

    success(response : Object, event : string) {
        this.events.publish(event, response);
    }

    error(response : any, event : string) {
        this.events.publish('error:' + event, { msg : response.message})
    }
}
