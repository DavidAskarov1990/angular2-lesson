"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by david on 18.06.17.
 */
var core_1 = require("@angular/core");
var ManageUsersComponent = (function () {
    function ManageUsersComponent() {
    }
    return ManageUsersComponent;
}());
ManageUsersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'admin-manage-users',
        templateUrl: 'users.component.html'
    })
], ManageUsersComponent);
exports.ManageUsersComponent = ManageUsersComponent;
//# sourceMappingURL=users.component.js.map