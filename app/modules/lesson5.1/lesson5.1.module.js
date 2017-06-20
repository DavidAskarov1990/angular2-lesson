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
var lesson5_1_routing_module_1 = require("./lesson5.1-routing.module");
var Lesson5_1_Module = (function () {
    function Lesson5_1_Module() {
    }
    return Lesson5_1_Module;
}());
Lesson5_1_Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            lesson5_1_routing_module_1.Lesson5_1_RouitingModule
        ],
        providers: [service_index_1.PhraseService]
    })
], Lesson5_1_Module);
exports.Lesson5_1_Module = Lesson5_1_Module;
//# sourceMappingURL=lesson5.1.module.js.map