/**
 * Created by david on 18.06.17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingChildrenComponent, Child1Component, Child2Component } from '../../components/component.index';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: '/phrases4',
                pathMatch: 'full'
            },
            {
                path: 'phrases4',
                component: RoutingChildrenComponent,
                children: [
                    {
                        path: "child1",
                        component: Child1Component,
                    },
                    {
                        path: "child2",
                        component: Child2Component
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class Lesson5_3_RoutingModule { }