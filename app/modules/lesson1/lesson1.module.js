"use strict";
/**
 * Created by smartit-11 on 09.06.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../index");
var Lesson1Module = (function () {
    function Lesson1Module() {
    }
    return Lesson1Module;
}());
Lesson1Module = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [index_1.ChapterComponent, index_1.IncrementComponent],
        exports: [index_1.ChapterComponent, index_1.IncrementComponent]
    })
], Lesson1Module);
exports.Lesson1Module = Lesson1Module;
//# sourceMappingURL=lesson1.module.js.map