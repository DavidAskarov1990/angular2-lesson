/**
 * Created by david on 19.06.17.
 */
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/Observable';

import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;

    redirectUrl: string;

    login(login: string, password: string): Observable<boolean> {
        return Observable
            .of(true)
            .delay(1500)
            .do(val => {
                if(login == '123' && password == '123'){
                    this.isLoggedIn = true;
                }
                return this.isLoggedIn;
            })
    }

    logout(){
        this.isLoggedIn = false;
    }
}
