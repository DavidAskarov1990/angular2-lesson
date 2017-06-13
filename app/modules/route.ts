/**
 * Created by david on 10.06.17.
 */

import {
            ChapterComponent,
            IncrementComponent,
            HostCounterComponent,
            HostTimerComponent,
            HostNameCardComponent,
            HostMessageBoxComponent,
            HostChildComponent,
            PropertyBindingComponent,
            ModelComponent,
            DirectiveElementComponent,
            TempRefComponent

}from '../index'

export const RouteHeader = [
    { path: "counter", component: HostCounterComponent},
    { path: "chapter", component: ChapterComponent },
    { path: "increment", component: IncrementComponent },
    { path: "timer", component: HostTimerComponent },
    { path: "cardname", component: HostNameCardComponent },
    { path: "message", component: HostMessageBoxComponent },
    { path: "child", component: HostChildComponent },
    { path: "", redirectTo: "chapter", pathMatch: "full" }
];

export const RouteHeaderDirective = [
    { path: "propertyBinding", component: PropertyBindingComponent },
    { path: "modelComponent", component: ModelComponent },
    { path: "directiveElem", component: DirectiveElementComponent },
    { path: "tempRef", component: TempRefComponent },
    { path: "", redirectTo: "propertyBinding", pathMatch: "full" }
];

export const RouteHeaderSevice = [

];