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
var common_1 = require("@angular/common");
var lesson_5_3_routing_module_1 = require("./lesson.5.3-routing.module");
var component_index_1 = require("../../components/component.index");
var Lesson5_3_Module = (function () {
    function Lesson5_3_Module() {
    }
    return Lesson5_3_Module;
}());
Lesson5_3_Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            lesson_5_3_routing_module_1.Lesson5_3_RoutingModule
        ],
        declarations: [component_index_1.Child1Component, component_index_1.Child2Component, component_index_1.RoutingChildrenComponent]
    })
], Lesson5_3_Module);
exports.Lesson5_3_Module = Lesson5_3_Module;
//# sourceMappingURL=lesson5.3.module.js.map