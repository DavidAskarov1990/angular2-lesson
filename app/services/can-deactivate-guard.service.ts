/**
 * Created by david on 19.06.17.
 */
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from "rxjs/Observable";

export interface CanComponentDeactive {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactive>{
    canDeactivate(component: CanComponentDeactive){
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}