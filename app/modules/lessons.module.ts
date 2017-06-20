/**
 * Created by smartit-11 on 09.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson1Module, Lesson2Module, Lesson3Module, Lesson4Module, Lesson5Module, Lesson5_1_Module, Lesson5_3_Module} from './module.index';
import {Lesson5_2_Module} from "./lesson5.2/lesson5.2.module";
import {Lesson5_4_Module} from "./lesson5.4/lesson5.4.module";

@NgModule({
    imports: [
        CommonModule,
        Lesson1Module,
        Lesson2Module,
        Lesson3Module,
        Lesson4Module,
        Lesson5Module,
        Lesson5_1_Module,
        Lesson5_2_Module,
        Lesson5_3_Module,
        Lesson5_4_Module
    ],
    exports: [
        Lesson1Module,
        Lesson2Module,
        Lesson3Module,
        Lesson4Module,
        Lesson5Module,
        Lesson5_1_Module,
        Lesson5_2_Module,
        Lesson5_3_Module,
        Lesson5_4_Module
    ]
})

export class LessonsModules {}
