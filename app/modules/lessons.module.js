"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by smartit-11 on 09.06.17.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var route_1 = require("./route");
var module_index_1 = require("./module.index");
var index_1 = require("../index");
console.log(route_1.RouteHeaderDirective);
console.log(route_1.RouteHeader);
var LessonsModules = (function () {
    function LessonsModules() {
    }
    return LessonsModules;
}());
LessonsModules = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            module_index_1.Lesson1Module,
            module_index_1.Lesson2Module,
            module_index_1.Lesson3Module,
            router_1.RouterModule.forRoot(route_1.RouteHeaderDirective),
            router_1.RouterModule.forRoot(route_1.RouteHeader)
        ],
        declarations: [index_1.HeaderDirectiveComponent, index_1.HeaderComponent],
        exports: [module_index_1.Lesson1Module, module_index_1.Lesson2Module, module_index_1.Lesson3Module, index_1.HeaderDirectiveComponent, index_1.HeaderComponent],
    })
], LessonsModules);
exports.LessonsModules = LessonsModules;
//# sourceMappingURL=lessons.module.js.map