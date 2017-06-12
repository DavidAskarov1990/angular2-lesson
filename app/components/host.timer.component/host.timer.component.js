"use strict";
/**
 * Created by david on 10.06.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HostTimerComponent = (function () {
    function HostTimerComponent() {
    }
    HostTimerComponent.prototype.tickHandler1 = function (value) {
        console.log('Tick Handler 1 - ', value);
    };
    HostTimerComponent.prototype.tickHandler2 = function (value) {
        console.log('Tick Handler 2 - ', value);
    };
    return HostTimerComponent;
}());
HostTimerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'host-timer',
        templateUrl: 'host.timer.component.html',
        styleUrls: ['host.timer.component.css']
    })
], HostTimerComponent);
exports.HostTimerComponent = HostTimerComponent;
//# sourceMappingURL=host.timer.component.js.map