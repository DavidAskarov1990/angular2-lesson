import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "message-box",
    templateUrl: 'message-box.component.html',
    styleUrls: ['message-box.component.css']
})
export class MessageBoxComponent implements OnInit{
    visible: boolean = true;

    ngOnInit(){
        console.log('Start OnInit')
    }

    hide() {
        this.visible = false
    }
}
