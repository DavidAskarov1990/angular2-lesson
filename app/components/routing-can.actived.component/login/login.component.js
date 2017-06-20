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
 * Created by david on 19.06.17.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../../services/auth.service");
var LoginCompoent = (function () {
    function LoginCompoent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.setMessage();
    }
    LoginCompoent.prototype.setMessage = function () {
        this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "on");
    };
    LoginCompoent.prototype.login = function () {
        var _this = this;
        this.message = "Trying to log in ...";
        this.authService.login(this.userLogin, this.userPassword)
            .subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : 'users';
                _this.router.navigate([redirect]);
            }
        });
    };
    return LoginCompoent;
}());
LoginCompoent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-login',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], LoginCompoent);
exports.LoginCompoent = LoginCompoent;
//# sourceMappingURL=login.component.js.map