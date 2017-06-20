"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by david on 18.06.17.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var component_index_1 = require("../../components/component.index");
var Lesson5_3_RoutingModule = (function () {
    function Lesson5_3_RoutingModule() {
    }
    return Lesson5_3_RoutingModule;
}());
Lesson5_3_RoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                {
                    path: '',
                    redirectTo: '/phrases4',
                    pathMatch: 'full'
                },
                {
                    path: 'phrases4',
                    component: component_index_1.RoutingChildrenComponent,
                    children: [
                        {
                            path: "child1",
                            component: component_index_1.Child1Component,
                        },
                        {
                            path: "child2",
                            component: component_index_1.Child2Component
                        }
                    ]
                }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], Lesson5_3_RoutingModule);
exports.Lesson5_3_RoutingModule = Lesson5_3_RoutingModule;
//# sourceMappingURL=lesson.5.3-routing.module.js.map