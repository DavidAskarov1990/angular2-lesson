"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by smartit-11 on 13.06.17.
 */
var core_1 = require("@angular/core");
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getData = function () {
        var items = [];
        for (var i = 0; i < 10; i++) {
            items.push("Item " + i);
        }
        return items;
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map