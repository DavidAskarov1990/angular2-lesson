/**
 * Created by david on 18.06.17.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhraseListComponent, PhraseDetailsComponent } from '../../index';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: "phrases2", component: PhraseListComponent},
            {path: "phrases2/:id", component: PhraseDetailsComponent},
            {path: "", redirectTo: "phrases2", pathMatch: "full" },

        ])
    ],
    exports: [RouterModule]
})
export class Lesson5_1_RouitingModule {

}