/**
 * Created by david on 18.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent, ManageUsersComponent, ManagePhraseComponent, LoginCompoent } from '../../components/component.index';
import { Lesson5_4_RoutingModule } from './lesson5.4-rouiting.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Lesson5_4_RoutingModule
    ],
    declarations: [AdminHomeComponent, ManageUsersComponent, ManagePhraseComponent, LoginCompoent]
})
export class Lesson5_4_Module {}