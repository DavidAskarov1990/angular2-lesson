/**
 * Created by david on 18.06.17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhraseDetailsComponent2, PhraseListComponent2 } from '../../components/component.index';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "phrases3", component: PhraseListComponent2 },
            { path: "phrases3/:id", component: PhraseDetailsComponent2 }
        ])
    ],
    exports: [ RouterModule ]
})
export class Lesson5_2_RouitingModule { }
