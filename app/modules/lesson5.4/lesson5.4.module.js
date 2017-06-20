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
var forms_1 = require("@angular/forms");
var component_index_1 = require("../../components/component.index");
var lesson5_4_rouiting_module_1 = require("./lesson5.4-rouiting.module");
var Lesson5_4_Module = (function () {
    function Lesson5_4_Module() {
    }
    return Lesson5_4_Module;
}());
Lesson5_4_Module = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            lesson5_4_rouiting_module_1.Lesson5_4_RoutingModule
        ],
        declarations: [component_index_1.AdminHomeComponent, component_index_1.ManageUsersComponent, component_index_1.ManagePhraseComponent, component_index_1.LoginCompoent]
    })
], Lesson5_4_Module);
exports.Lesson5_4_Module = Lesson5_4_Module;
//# sourceMappingURL=lesson5.4.module.js.map