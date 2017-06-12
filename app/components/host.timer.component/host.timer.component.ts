/**
 * Created by david on 10.06.17.
 */

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'host-timer',
    templateUrl: 'host.timer.component.html',
    styleUrls: ['host.timer.component.css']
})

export class HostTimerComponent {

    tickHandler1(value){
        console.log('Tick Handler 1 - ', value);
    }

    tickHandler2(value){
        console.log('Tick Handler 2 - ', value);
    }
}