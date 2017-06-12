/**
 * Created by smartit-11 on 12.06.17.
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'model-component',
    templateUrl: 'ng-model.component.html',
    styleUrls: ['ng-model.component.css']
})
export class ModelComponent{
    xValue: number = 0;
    yValue: number = 0;
    result: number;

    calculate() {
        this.result = +this.xValue + +this.yValue;
    }

    reset(){
        this.xValue = this.yValue = 0;
        this.result = undefined;
    }
}
