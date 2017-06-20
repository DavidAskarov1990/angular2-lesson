/**
 * Created by david on 18.06.17.
 */
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

     constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authService.isLoggedIn){
            return true;
        } else {
            this.authService.redirectUrl = state.url;
            this.router.navigate(["login"]);
            return false;
        }
    }
}