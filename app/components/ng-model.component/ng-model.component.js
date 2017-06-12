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
var ModelComponent = (function () {
    function ModelComponent() {
        this.xValue = 0;
        this.yValue = 0;
    }
    ModelComponent.prototype.calculate = function () {
        this.result = +this.xValue + +this.yValue;
    };
    ModelComponent.prototype.reset = function () {
        this.xValue = this.yValue = 0;
        this.result = undefined;
    };
    return ModelComponent;
}());
ModelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'model-component',
        templateUrl: 'ng-model.component.html',
        styleUrls: ['ng-model.component.css']
    })
], ModelComponent);
exports.ModelComponent = ModelComponent;
//# sourceMappingURL=ng-model.component.js.map