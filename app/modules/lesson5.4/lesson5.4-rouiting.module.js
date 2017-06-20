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
var service_index_1 = require("../../services/service.index");
var Lesson5_4_RoutingModule = (function () {
    function Lesson5_4_RoutingModule() {
    }
    return Lesson5_4_RoutingModule;
}());
Lesson5_4_RoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                {
                    path: "admin",
                    component: component_index_1.AdminHomeComponent,
                    canActivate: [service_index_1.AuthGuard],
                    children: [
                        {
                            path: "",
                            children: [
                                { path: "phrases5", component: component_index_1.ManagePhraseComponent },
                                { path: "users", component: component_index_1.ManageUsersComponent },
                                { path: "", redirectTo: "phrases5", pathMatch: "full" }
                            ]
                        }
                    ]
                },
                {
                    path: "login",
                    component: component_index_1.LoginCompoent
                }
            ])
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], Lesson5_4_RoutingModule);
exports.Lesson5_4_RoutingModule = Lesson5_4_RoutingModule;
//# sourceMappingURL=lesson5.4-rouiting.module.js.map