/**
 * Created by smartit-11 on 13.06.17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PhraseService } from "../../../services/service.index";

@Component({
    moduleId: module.id,
    selector: 'phrase-detail',
    templateUrl: 'phrase-detail.component.html',
    styleUrls: ['phrase-detail.component.css']
})
export class PhraseDetailsComponent implements OnInit{

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private service: PhraseService) {}

    ngOnInit(){

    }

}