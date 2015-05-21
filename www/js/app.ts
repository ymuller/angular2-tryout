///<reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from "angular2/angular2";


@Component({
    selector: 'application-component'
})
@View({
    templateUrl: 'templates/application.html'
})


// Component controller
class ApplicationController {
    firstName: string;
    lastName: string;
    buttonLabel: string;



    constructor() {
        this.firstName = 'Yannick';
        this.lastName = 'MULLER';
        this.buttonLabel = 'TEST';
    }
}

bootstrap(ApplicationController);




