/**
 * Created by david on 18.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson5_3_RoutingModule } from './lesson.5.3-routing.module';
import { Child1Component, RoutingChildrenComponent,  Child2Component} from "../../components/component.index";

@NgModule({
    imports:[
        CommonModule,
        Lesson5_3_RoutingModule
    ],
    declarations: [Child1Component, Child2Component, RoutingChildrenComponent]
})
export class Lesson5_3_Module {}