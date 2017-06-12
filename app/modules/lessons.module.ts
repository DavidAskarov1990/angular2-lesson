/**
 * Created by smartit-11 on 09.06.17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteHeader } from './route';
import { Lesson1Module, Lesson2Module } from './module.index';
import { HeaderComponent, HeaderDirectiveComponent } from '../index';

@NgModule({
    imports: [
        Lesson1Module,
        Lesson2Module,
        RouterModule.forRoot(RouteHeader)
    ],
    declarations: [HeaderComponent, HeaderDirectiveComponent],
    exports: [Lesson1Module, Lesson2Module, HeaderComponent, HeaderDirectiveComponent],
})
export class LessonsModules {}
