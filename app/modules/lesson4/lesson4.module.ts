/**
 * Created by smartit-11 on 13.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
            DataListComponent,
            CounterParentComponent,
            Counter1Component,
            Counter2Component,
            Counter3Component

        } from '../../index'
import { DataService, CounterService } from '../../services/service.index'

@NgModule({
    imports: [CommonModule, FormsModule],
    providers: [DataService, CounterService],
    declarations: [DataListComponent, CounterParentComponent, Counter1Component, Counter2Component, Counter3Component],
    exports: [DataListComponent, CounterParentComponent, Counter1Component, Counter2Component, Counter3Component]
})
export class Lesson4Module {}