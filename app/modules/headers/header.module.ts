/**
 * Created by david on 11.06.17.
 */
import { NgModule } from '@angular/core';
import { HeaderComponent, HeaderDirectiveComponent } from '../../index';

@NgModule({
    declarations: [HeaderComponent, HeaderDirectiveComponent],
    exports: [HeaderComponent, HeaderDirectiveComponent]
})
export class HeaderModule {}