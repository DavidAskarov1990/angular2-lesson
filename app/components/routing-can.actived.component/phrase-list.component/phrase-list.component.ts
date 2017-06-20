/**
 * Created by smartit-11 on 13.06.17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import {PhraseService, Phrase } from "../../../services/service.index";

@Component({
    moduleId: module.id,
    selector: 'phrase-list',
    templateUrl: 'phrase-list.component.html',
    styleUrls: ['phrase-list.component.css']
})
export class PhraseListComponent3 implements OnInit {

    phrases: Phrase[];
    selectedId: number;

    constructor(private router: Router,
                private activateRoute: ActivatedRoute,
                private pharaseService: PhraseService){}

    ngOnInit(){
        this.activateRoute.params.forEach((params: Params) => {
            this.selectedId = +params["id"];

            this.pharaseService.getAll()
                .then(result => this.phrases = result);
        });
    }

    isSelected(phrase: Phrase):boolean {
        return phrase.id == this.selectedId;
    }

    onSelect(selected: Phrase){
        this.router.navigate(["phrases5", selected.id])
    }
}
