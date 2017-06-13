/**
 * Created by smartit-11 on 13.06.17.
 */
import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/service.index";

@Component({
    moduleId:module.id,
    selector: 'data-lit-component',
    templateUrl: 'data-list.component.html',
    styleUrls: ['data-list.component.css']
})
export class DataListComponent implements OnInit{
    public itemsSourse: string[] = [];

    constructor(private dataService: DataService){

    }

    ngOnInit(){
        this.itemsSourse = this.dataService.getData();
    }
}