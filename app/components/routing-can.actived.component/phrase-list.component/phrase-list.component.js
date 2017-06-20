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
var PhraseListComponent3 = (function () {
    function PhraseListComponent3(router, activateRoute, pharaseService) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.pharaseService = pharaseService;
    }
    PhraseListComponent3.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.forEach(function (params) {
            _this.selectedId = +params["id"];
            _this.pharaseService.getAll()
                .then(function (result) { return _this.phrases = result; });
        });
    };
    PhraseListComponent3.prototype.isSelected = function (phrase) {
        return phrase.id == this.selectedId;
    };
    PhraseListComponent3.prototype.onSelect = function (selected) {
        this.router.navigate(["phrases5", selected.id]);
    };
    return PhraseListComponent3;
}());
PhraseListComponent3 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'phrase-list',
        templateUrl: 'phrase-list.component.html',
        styleUrls: ['phrase-list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        service_index_1.PhraseService])
], PhraseListComponent3);
exports.PhraseListComponent3 = PhraseListComponent3;
//# sourceMappingURL=phrase-list.component.js.map