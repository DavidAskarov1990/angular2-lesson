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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CounterComponent = (function () {
    function CounterComponent() {
        this.name = "Some name";
        this.counterValue = 0;
        this.couterStep = 1;
    }
    CounterComponent.prototype.increment = function () {
        this.counterValue = this.counterValue + this.couterStep;
    };
    return CounterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CounterComponent.prototype, "counterValue", void 0);
__decorate([
    core_1.Input("step"),
    __metadata("design:type", Number)
], CounterComponent.prototype, "couterStep", void 0);
CounterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "counter",
        templateUrl: 'counter.component.html',
        styleUrls: ['counter.component.css'],
        inputs: ["name"]
    })
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map