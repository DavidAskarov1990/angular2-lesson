/**
 * Created by smartit-11 on 09.06.17.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LessonsModules,  AppComponent } from './index';

@NgModule({
    imports: [
        BrowserModule,
        LessonsModules
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}
