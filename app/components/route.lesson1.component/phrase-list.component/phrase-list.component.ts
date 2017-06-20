/**
 * Created by smartit-11 on 13.06.17.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {PhraseService, Phrase } from "../../../services/service.index";

@Component({
    moduleId: module.id,
    selector: 'phrase-list',
    templateUrl: 'phrase-list.component.html',
    styleUrls: ['phrase-list.component.css']
})
export class PhraseListComponent implements OnInit {

    phrases: Phrase[];

    constructor(private router: Router,
                private pharaseService: PhraseService){}

    ngOnInit(){
        this.pharaseService.getAll()
            .then(result => this.phrases = result);
    }

    onSelect(selected: Phrase){
        this.router.navigate(["phrases", selected.id])
    }

}