/**
 * Created by smartit-11 on 13.06.17.
 */

import { Component } from '@angular/core';
import {CounterService} from "../../../services/counter.service";

@Component({
    moduleId: module.id,
    selector: 'counter-3',
    templateUrl: 'counter3.component.html',
    exportAs:'test-name'
})
export class Counter3Component {
    private counter: number = 0;

    constructor(private counterService: CounterService){}

    plusOne(){
        this.counterService.increment();
        this.counter = this.counterService.getValue();
    }

    minusOne(){
        this.counterService.decrement();
        this.counter = this.counterService.getValue();
    }
}