/**
 * Created by david on 19.06.17.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../../services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'login.component.html'
})
export class LoginCompoent {
    userPassword: string;
    userLogin: string;
    message: string;

    constructor(public authService: AuthService, public router: Router){
        this.setMessage()
    }

    setMessage(){
        this.message = `Logged ${this.authService.isLoggedIn ? "in" : "on"}`;
    }

    login(){
        this.message = "Trying to log in ...";
        this.authService.login(this.userLogin, this.userPassword)
            .subscribe(() => {
                this.setMessage();
                if(this.authService.isLoggedIn){
                    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'users';
                    this.router.navigate([redirect])
                }
            })
    }
}