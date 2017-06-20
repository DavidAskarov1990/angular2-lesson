/**
 * Created by smartit-11 on 13.06.17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PhraseService, Phrase } from "../../../services/service.index";

@Component({
    moduleId: module.id,
    selector: 'phrase-detail',
    templateUrl: 'phrase-detail.component.html',
    styleUrls: ['phrase-detail.component.css']
})
export class PhraseDetailsComponent implements OnInit{

    phrase: Phrase;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private service: PhraseService) {}

    ngOnInit(){
        this.activatedRoute.params.forEach((params:Params) => {
            let id = +params["id"];
            this.service
                .getPhrase(id)
                .then(res => {
                    this.phrase = res;
                })
        })
    }

    goToPhraseList(){
        this.router.navigate(['phrases']);
    }

}