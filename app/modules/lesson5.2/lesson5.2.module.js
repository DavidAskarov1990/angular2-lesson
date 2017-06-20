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
var service_index_1 = require("../../services/service.index");
var lesson5_2_routing_module_1 = require("./lesson5.2-routing.module");
var component_index_1 = require("../../components/component.index");
var Lesson5_2_Module = (function () {
    function Lesson5_2_Module() {
    }
    return Lesson5_2_Module;
}());
Lesson5_2_Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            lesson5_2_routing_module_1.Lesson5_2_RouitingModule
        ],
        providers: [service_index_1.PhraseService],
        declarations: [component_index_1.PhraseListComponent2, component_index_1.PhraseDetailsComponent2]
    })
], Lesson5_2_Module);
exports.Lesson5_2_Module = Lesson5_2_Module;
//# sourceMappingURL=lesson5.2.module.js.map