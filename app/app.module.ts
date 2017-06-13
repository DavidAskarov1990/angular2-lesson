/**
 * Created by smartit-11 on 09.06.17.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LessonsModules,  AppComponent } from './index';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        LessonsModules
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}
