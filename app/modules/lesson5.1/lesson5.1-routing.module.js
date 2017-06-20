"use strict";
/**
 * Created by david on 18.06.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../../index");
var Lesson5_1_RouitingModule = (function () {
    function Lesson5_1_RouitingModule() {
    }
    return Lesson5_1_RouitingModule;
}());
Lesson5_1_RouitingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: "phrases2", component: index_1.PhraseListComponent },
                { path: "phrases2/:id", component: index_1.PhraseDetailsComponent },
                { path: "", redirectTo: "phrases2", pathMatch: "full" },
            ])
        ],
        exports: [router_1.RouterModule]
    })
], Lesson5_1_RouitingModule);
exports.Lesson5_1_RouitingModule = Lesson5_1_RouitingModule;
//# sourceMappingURL=lesson5.1-routing.module.js.map