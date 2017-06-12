/**
 * Created by smartit-11 on 09.06.17.
 */

import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "counter",
    templateUrl: 'counter.component.html',
    styleUrls: ['counter.component.css'],
    inputs: ["name"]
})
export class CounterComponent {
    name: string = "Some name";

    @Input()
    counterValue: number = 0;

    @Input("step")
    couterStep: number = 1;

    increment(){
        this.counterValue = this.counterValue + this.couterStep;
    }
}