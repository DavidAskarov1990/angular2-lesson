import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    inputs: ["selectLesson"]
})
export class AppComponent {

    private _selectLesson: string;

    get selectLesson():string {
        return this._selectLesson;
    }

    set selectLesson(value){
        console.log('Click ', value)
        this._selectLesson = value;
    }
}
