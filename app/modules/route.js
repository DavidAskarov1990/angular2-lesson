"use strict";
/**
 * Created by david on 10.06.17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
exports.RouteHeader = [
    { path: "counter", component: index_1.HostCounterComponent },
    { path: "chapter", component: index_1.ChapterComponent },
    { path: "increment", component: index_1.IncrementComponent },
    { path: "timer", component: index_1.HostTimerComponent },
    { path: "cardname", component: index_1.HostNameCardComponent },
    { path: "message", component: index_1.HostMessageBoxComponent },
    { path: "child", component: index_1.HostChildComponent },
    { path: "", redirectTo: "chapter", pathMatch: "full" }
];
exports.RouteHeaderDirective = [
    { path: "propertyBinding", component: index_1.PropertyBindingComponent },
    { path: "modelComponent", component: index_1.ModelComponent },
    { path: "directiveElem", component: index_1.DirectiveElementComponent },
    { path: "tempRef", component: index_1.TempRefComponent },
    { path: "", redirectTo: "propertyBinding", pathMatch: "full" }
];
exports.RouteHeaderSevice = [
    { path: "dataList", component: index_1.DataListComponent },
    { path: "counterParent", component: index_1.CounterParentComponent },
    { path: "", redirectTo: "dataList", pathMatch: "full" }
];
exports.RouteHeaderRoute = [
    { path: "", redirectTo: "phrases3", pathMatch: "full" },
    { path: "phrases", component: index_1.PhraseListComponent },
    { path: "phrases/:id", component: index_1.PhraseDetailsComponent }
];
//# sourceMappingURL=route.js.map