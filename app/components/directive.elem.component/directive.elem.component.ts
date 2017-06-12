/**
 * Created by smartit-11 on 12.06.17.
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'directive-elem',
    templateUrl: 'directive.elem.component.html',
    styleUrls: ['directive.elem.component.css']
})
export class DirectiveElementComponent {
    settings = {
        accent: true,
        error: true,
        highlighted: false
    };

    showUI: boolean = true;
    choice: string = '1';
    items: string[] = [];

    constructor(){
        for(let i =0; i < 10; i++){
            this.items.push(`Item - ${i}`);
        }
    }

    toogleVisibility() {
        this.showUI = !this.showUI;
    }

    getStyle(){
        let styles = {
            "background-color": "yellow",
            "font-weight": "bold",
            fontSize: "20px",
            border: "1px solid darkred"
        }
        return styles;
    }


}