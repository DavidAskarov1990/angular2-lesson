/**
 * Created by smartit-11 on 12.06.17.
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'property-binding',
    templateUrl: 'propperty-binding.component.html',
    styleUrls: ['property-binding.component.css'],
    styles: ["img {margin: 20px}"]
})
export class PropertyBindingComponent {
    imageSrc: string = '/app/images/image.jpg';
    imageTitle: string = "Title Image";
    flag: boolean = false;
    value: number = 20;

    allClasses: string = "border highlighted";
    currentClasses: string = "";

    isBorder = true;
    isHighligh = false;

    testEvent(event) {
        for(let prop in event) {
            console.log(`${prop} = ${event[prop]}`);
        }
    }

    toogleAllClasses(){
        if(this.currentClasses == ""){
            this.currentClasses = this.allClasses;
        } else {
            this.currentClasses = "";
        }
    }
}
