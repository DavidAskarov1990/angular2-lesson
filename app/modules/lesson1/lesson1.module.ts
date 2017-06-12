/**
 * Created by smartit-11 on 09.06.17.
 */

import { NgModule } from '@angular/core';
import { ChapterComponent, IncrementComponent } from '../../index';

@NgModule({
    imports: [],
    declarations: [ChapterComponent, IncrementComponent],
    exports: [ChapterComponent, IncrementComponent]
})
export class Lesson1Module {}