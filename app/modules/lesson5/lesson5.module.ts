/**
 * Created by smartit-11 on 13.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PhraseListComponent, PhraseDetailsComponent } from '../../index'
import { PhraseService } from '../../services/service.index'

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [PhraseListComponent, PhraseDetailsComponent],
    exports: [PhraseListComponent, PhraseDetailsComponent],
    providers: [PhraseService]
})
export class Lesson5Module {

}
