///<reference path="../../typings/angular2/angular2.d.ts" />



// TypeScript
import {Component, View, bootstrap, For} from 'angular2/angular2';
@Component({
    selector: 'display'
})
@View({
    template: `<p>My name: {{ myName }}</p>
  <p>Friends:</p>
  <ul>
     <li *for="#name of names">
        {{ name }}
     </li>
  </ul>`,
    directives: [For]
})
class DisplayComponent {
    myName: string;
    names: Array<string>;


    constructor() {
        this.myName = "Alice";
        this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
        setInterval(function () { this.time = (new Date()).toString(); }.bind(this), 1000);
    }
}

bootstrap(DisplayComponent);



