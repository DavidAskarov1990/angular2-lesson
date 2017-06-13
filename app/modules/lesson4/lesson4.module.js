"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by smartit-11 on 13.06.17.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var index_1 = require("../../index");
var service_index_1 = require("../../services/service.index");
var Lesson4Module = (function () {
    function Lesson4Module() {
    }
    return Lesson4Module;
}());
Lesson4Module = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        providers: [service_index_1.DataService, service_index_1.CounterService],
        declarations: [index_1.DataListComponent, index_1.CounterParentComponent, index_1.Counter1Component, index_1.Counter2Component, index_1.Counter3Component],
        exports: [index_1.DataListComponent, index_1.CounterParentComponent, index_1.Counter1Component, index_1.Counter2Component, index_1.Counter3Component]
    })
], Lesson4Module);
exports.Lesson4Module = Lesson4Module;
//# sourceMappingURL=lesson4.module.js.map