/**
 * Created by smartit-11 on 12.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyBindingComponent, ModelComponent, DirectiveElementComponent, TempRefComponent } from '../../index';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [PropertyBindingComponent, ModelComponent, DirectiveElementComponent, TempRefComponent],
    exports: [PropertyBindingComponent, ModelComponent, DirectiveElementComponent, TempRefComponent]
})
export class Lesson3Module {}