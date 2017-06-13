/**
 * Created by smartit-11 on 09.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson1Module, Lesson2Module, Lesson3Module, Lesson4Module, Lesson5Module} from './module.index';

@NgModule({
    imports: [
        CommonModule,
        Lesson1Module,
        Lesson2Module,
        Lesson3Module,
        Lesson4Module,
        Lesson5Module
    ],
    exports: [Lesson1Module, Lesson2Module, Lesson3Module, Lesson4Module, Lesson5Module]
})

export class LessonsModules {}
