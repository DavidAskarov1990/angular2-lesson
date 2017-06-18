/**
 * Created by david on 11.06.17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent, HeaderDirectiveComponent, HeaderService, HeaderRouteComponent } from '../../index';
import { RouteHeaderSevice, RouteHeader, RouteHeaderDirective, RouteHeaderRoute } from '../route';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        RouterModule.forRoot(RouteHeaderDirective),
        RouterModule.forRoot(RouteHeader),
        RouterModule.forRoot(RouteHeaderSevice),
        RouterModule.forRoot(RouteHeaderRoute)
    ],
    declarations: [HeaderComponent, HeaderDirectiveComponent, HeaderRouteComponent, HeaderService],
    exports: [HeaderComponent, HeaderDirectiveComponent, HeaderRouteComponent, HeaderService]
})
export class HeaderModule {}