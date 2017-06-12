/**
 * Created by smartit-11 on 09.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import {
         CounterComponent,
         HostCounterComponent,
         TimerComponent,
         HostTimerComponent,
         HostNameCardComponent,
         NameCardComponent,
         MessageBoxComponent,
         HostMessageBoxComponent,
         ChildComponent,
         HostChildComponent
        } from '../../index';

@NgModule({
    imports: [CommonModule],
    declarations: [
                    HostCounterComponent,
                    CounterComponent,
                    TimerComponent,
                    HostTimerComponent,
                    HostNameCardComponent,
                    NameCardComponent,
                    HostMessageBoxComponent,
                    MessageBoxComponent,
                    ChildComponent,
                    HostChildComponent
                  ],
    exports: [
                HostCounterComponent,
                HostTimerComponent,
                HostNameCardComponent,
                HostMessageBoxComponent,
                HostChildComponent
             ]
})
export class Lesson2Module {}