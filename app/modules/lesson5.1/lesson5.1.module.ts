/**
 * Created by david on 18.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhraseService } from '../../services/service.index';
import { Lesson5_1_RouitingModule } from './lesson5.1-routing.module';


@NgModule({
    imports: [
        CommonModule,
        Lesson5_1_RouitingModule
    ],
    providers: [PhraseService]
})
export class Lesson5_1_Module {

}