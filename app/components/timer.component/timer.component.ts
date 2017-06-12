/**
 * Created by david on 10.06.17.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['timer.component.css']
})
export class TimerComponent {
    private intervalObjet: any;
    private currentValue: number = 0;

    @Input()
    interval: number = 1000;

    @Output()
    tick: EventEmitter<number> = new EventEmitter();

    start() {
        if(this.intervalObjet) return;

        this.intervalObjet = setInterval(() => {
            this.callback();
        }, this.interval)
    }

    stop() {
        if(!this.intervalObjet) return;

        clearInterval(this.intervalObjet);
        this.intervalObjet = false;
    }

    private callback() {
        this.currentValue ++;
        this.tick.emit(this.currentValue);
    }
}