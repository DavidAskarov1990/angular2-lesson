"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by smartit-11 on 12.06.17.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var index_1 = require("../../index");
var Lesson3Module = (function () {
    function Lesson3Module() {
    }
    return Lesson3Module;
}());
Lesson3Module = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule],
        declarations: [index_1.PropertyBindingComponent, index_1.ModelComponent, index_1.DirectiveElementComponent, index_1.TempRefComponent],
        exports: [index_1.PropertyBindingComponent, index_1.ModelComponent, index_1.DirectiveElementComponent, index_1.TempRefComponent]
    })
], Lesson3Module);
exports.Lesson3Module = Lesson3Module;
//# sourceMappingURL=lesson3.module.js.map