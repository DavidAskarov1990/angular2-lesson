/**
 * Created by david on 11.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HeaderComponent, HeaderDirectiveComponent } from '../../index';

@NgModule({
    imports: [CommonModule],
    declarations: [HeaderComponent, HeaderDirectiveComponent],
    exports: [HeaderComponent, HeaderDirectiveComponent]
})
export class HeaderModule {}