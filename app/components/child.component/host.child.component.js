"use strict";
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
var child_component_1 = require("./child.component");
var HostChildComponent = (function () {
    function HostChildComponent() {
    }
    HostChildComponent.prototype.showBlock = function () {
        this.block.show();
    };
    HostChildComponent.prototype.showAllBlocks = function () {
        this.blocks.forEach(function (x) {
            x.show();
        });
    };
    return HostChildComponent;
}());
__decorate([
    core_1.ViewChild(child_component_1.ChildComponent),
    __metadata("design:type", child_component_1.ChildComponent)
], HostChildComponent.prototype, "block", void 0);
__decorate([
    core_1.ViewChildren(child_component_1.ChildComponent),
    __metadata("design:type", core_1.QueryList)
], HostChildComponent.prototype, "blocks", void 0);
HostChildComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'host-child',
        templateUrl: 'host.child.component.html'
    })
], HostChildComponent);
exports.HostChildComponent = HostChildComponent;
//# sourceMappingURL=host.child.component.js.map