"use strict";
/**
 * Created by smartit-11 on 13.06.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var phrase_1 = require("./data/phrase");
var phrases = [
    new phrase_1.Phrase(1, "Hello World 1", "English 1"),
    new phrase_1.Phrase(2, "Hello World 2", "English 2"),
    new phrase_1.Phrase(3, "Hello World 3", "English 3"),
    new phrase_1.Phrase(4, "Hello World 4", "English 4")
];
var pharasesPromise = Promise.resolve(phrases);
var PhraseService = (function () {
    function PhraseService() {
    }
    PhraseService.prototype.getAll = function () {
        return pharasesPromise;
    };
    PhraseService.prototype.getPhrase = function (id) {
        return pharasesPromise
            .then(function (phrases) {
            return phrases.find(function (x) { return x.id == id; });
        });
    };
    return PhraseService;
}());
PhraseService = __decorate([
    core_1.Injectable()
], PhraseService);
exports.PhraseService = PhraseService;
//# sourceMappingURL=phrase.service.js.map