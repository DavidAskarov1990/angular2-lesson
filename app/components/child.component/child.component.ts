/**
 * Created by david on 11.06.17.
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child',
    templateUrl: 'child.component.html'
})
export class ChildComponent {
    visible: boolean = false;

    show(){
        this.visible = !this.visible;
    }
}
