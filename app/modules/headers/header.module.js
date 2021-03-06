"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by david on 11.06.17.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var index_1 = require("../../index");
var route_1 = require("../route");
var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            router_1.RouterModule.forRoot(route_1.RouteHeaderDirective),
            router_1.RouterModule.forRoot(route_1.RouteHeader),
            router_1.RouterModule.forRoot(route_1.RouteHeaderSevice),
            router_1.RouterModule.forRoot(route_1.RouteHeaderRoute)
        ],
        declarations: [index_1.HeaderComponent, index_1.HeaderDirectiveComponent, index_1.HeaderRouteComponent, index_1.HeaderService],
        exports: [index_1.HeaderComponent, index_1.HeaderDirectiveComponent, index_1.HeaderRouteComponent, index_1.HeaderService]
    })
], HeaderModule);
exports.HeaderModule = HeaderModule;
//# sourceMappingURL=header.module.js.map