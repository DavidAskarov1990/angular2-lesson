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
var index_1 = require("../../index");
var Lesson2Module = (function () {
    function Lesson2Module() {
    }
    return Lesson2Module;
}());
Lesson2Module = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [
            index_1.HostCounterComponent,
            index_1.CounterComponent,
            index_1.TimerComponent,
            index_1.HostTimerComponent,
            index_1.HostNameCardComponent,
            index_1.NameCardComponent,
            index_1.HostMessageBoxComponent,
            index_1.MessageBoxComponent,
            index_1.ChildComponent,
            index_1.HostChildComponent
        ],
        exports: [
            index_1.HostCounterComponent,
            index_1.HostTimerComponent,
            index_1.HostNameCardComponent,
            index_1.HostMessageBoxComponent,
            index_1.HostChildComponent
        ]
    })
], Lesson2Module);
exports.Lesson2Module = Lesson2Module;
//# sourceMappingURL=lesson2.module.js.map