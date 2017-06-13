/**
 * Created by smartit-11 on 09.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteHeader, RouteHeaderDirective, RouteHeaderSevice } from './route';
import { Lesson1Module, Lesson2Module, Lesson3Module, HeaderModule } from './module.index';

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        Lesson1Module,
        Lesson2Module,
        Lesson3Module,
        RouterModule.forRoot(RouteHeaderDirective),
        RouterModule.forRoot(RouteHeader),
        RouterModule.forRoot(RouteHeaderSevice)
    ],
    exports: [Lesson1Module, Lesson2Module, Lesson3Module, HeaderModule]
})

export class LessonsModules {}
