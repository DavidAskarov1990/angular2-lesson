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
// import { Phrase } from "../../../services/data/phrase";
var PhraseListComponent = (function () {
    function PhraseListComponent(router, pharaseService) {
        this.router = router;
        this.pharaseService = pharaseService;
    }
    PhraseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pharaseService.getAll()
            .then(function (result) { return _this.phrases = result; });
    };
    PhraseListComponent.prototype.onSelect = function (selected) {
        this.router.navigate(["phrases", selected.id]);
    };
    return PhraseListComponent;
}());
PhraseListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'phrase-list',
        templateUrl: 'phrase-list.component.html',
        styleUrls: ['phrase-list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        service_index_1.PhraseService])
], PhraseListComponent);
exports.PhraseListComponent = PhraseListComponent;
//# sourceMappingURL=phrase-list.component.js.map