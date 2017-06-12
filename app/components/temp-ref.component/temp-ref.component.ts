/**
 * Created by smartit-11 on 12.06.17.
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'temp-ref-component',
    templateUrl: 'temp-ref.component.html'
})
export class TempRefComponent {
    result: number;

    calculateSum(x, y) {
        console.log(`${x}  ${y}`)
        this.result = +x + +y;
    }
}