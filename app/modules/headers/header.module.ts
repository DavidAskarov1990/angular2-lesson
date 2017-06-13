/**
 * Created by david on 11.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent, HeaderDirectiveComponent, HeaderService } from '../../index';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HeaderComponent, HeaderDirectiveComponent, HeaderService],
    exports: [HeaderComponent, HeaderDirectiveComponent, HeaderService]
})
export class HeaderModule {}