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
var PropertyBindingComponent = (function () {
    function PropertyBindingComponent() {
        this.imageSrc = '/app/images/image.jpg';
        this.imageTitle = "Title Image";
        this.flag = false;
        this.value = 20;
        this.allClasses = "border highlighted";
        this.currentClasses = "";
        this.isBorder = true;
        this.isHighligh = false;
    }
    PropertyBindingComponent.prototype.testEvent = function (event) {
        for (var prop in event) {
            console.log(prop + " = " + event[prop]);
        }
    };
    PropertyBindingComponent.prototype.toogleAllClasses = function () {
        if (this.currentClasses == "") {
            this.currentClasses = this.allClasses;
        }
        else {
            this.currentClasses = "";
        }
    };
    return PropertyBindingComponent;
}());
PropertyBindingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'property-binding',
        templateUrl: 'propperty-binding.component.html',
        styleUrls: ['property-binding.component.css'],
        styles: ["img {margin: 20px}"]
    })
], PropertyBindingComponent);
exports.PropertyBindingComponent = PropertyBindingComponent;
//# sourceMappingURL=property-binding.component.js.map