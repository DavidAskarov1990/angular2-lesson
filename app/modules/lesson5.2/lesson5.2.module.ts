/**
 * Created by david on 18.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhraseService } from '../../services/service.index';
import { Lesson5_2_RouitingModule } from './lesson5.2-routing.module';
import { PhraseDetailsComponent2, PhraseListComponent2 } from "../../components/component.index";

@NgModule({
    imports: [
        CommonModule,
        Lesson5_2_RouitingModule
    ],
    providers: [ PhraseService ],
    declarations: [PhraseListComponent2, PhraseDetailsComponent2]
})
export class Lesson5_2_Module {  }