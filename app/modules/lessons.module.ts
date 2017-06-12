/**
 * Created by smartit-11 on 09.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteHeader, RouteHeaderDirective } from './route';
import { Lesson1Module, Lesson2Module, Lesson3Module, HeaderModule } from './module.index';
import { HeaderComponent, HeaderDirectiveComponent } from '../index';
console.log(RouteHeaderDirective)
console.log(RouteHeader)
@NgModule({
    imports: [
        CommonModule,
        Lesson1Module,
        Lesson2Module,
        Lesson3Module,
        RouterModule.forRoot(RouteHeaderDirective),
        RouterModule.forRoot(RouteHeader)
    ],
    declarations: [HeaderDirectiveComponent, HeaderComponent],
    exports: [Lesson1Module, Lesson2Module, Lesson3Module, HeaderDirectiveComponent, HeaderComponent],
})

export class LessonsModules {}
