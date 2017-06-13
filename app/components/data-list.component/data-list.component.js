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
/**
 * Created by smartit-11 on 13.06.17.
 */
var core_1 = require("@angular/core");
var service_index_1 = require("../../services/service.index");
var DataListComponent = (function () {
    function DataListComponent(dataService) {
        this.dataService = dataService;
        this.itemsSourse = [];
    }
    DataListComponent.prototype.ngOnInit = function () {
        this.itemsSourse = this.dataService.getData();
    };
    return DataListComponent;
}());
DataListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'data-lit-component',
        templateUrl: 'data-list.component.html',
        styleUrls: ['data-list.component.css']
    }),
    __metadata("design:paramtypes", [service_index_1.DataService])
], DataListComponent);
exports.DataListComponent = DataListComponent;
//# sourceMappingURL=data-list.component.js.map