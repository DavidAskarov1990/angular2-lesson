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
var router_1 = require("@angular/router");
var service_index_1 = require("../../../services/service.index");
var PhraseDetailsComponent = (function () {
    function PhraseDetailsComponent(router, activatedRoute, service) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
    }
    PhraseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = +params["id"];
            _this.service
                .getPhrase(id)
                .then(function (res) {
                _this.phrase = res;
            });
        });
    };
    PhraseDetailsComponent.prototype.goToPhraseList = function () {
        this.router.navigate(['phrases']);
    };
    return PhraseDetailsComponent;
}());
PhraseDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'phrase-detail',
        templateUrl: 'phrase-detail.component.html',
        styleUrls: ['phrase-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        service_index_1.PhraseService])
], PhraseDetailsComponent);
exports.PhraseDetailsComponent = PhraseDetailsComponent;
//# sourceMappingURL=phrase-detail.component.js.map