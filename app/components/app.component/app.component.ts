import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    _selectLesson: string = 'components';

    selectLesson(value){
        this._selectLesson = value;
    }
}
