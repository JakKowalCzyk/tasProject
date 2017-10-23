import { Component }        from '@angular/core';
import { NavController }    from "ionic-angular";

//pages
import { AddCarPage }       from "../../pages/add-car/add-car";

@Component({
  selector: 'add-icon',
  templateUrl: 'add-icon.component.html'
})
export class AddIconComponent {

    constructor(
        private navCtrl : NavController,
    ) {}

    clicked() {
        this.navCtrl.push(AddCarPage)
    }


}
