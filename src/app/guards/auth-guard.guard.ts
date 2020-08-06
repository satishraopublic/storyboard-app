import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStateService } from '../shared/services/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private userState: UserStateService, private router: Router){

  }
  
  canActivate(): boolean
  {
    var islogin = this.userState.IsUserLogged();
    if(!islogin)this.router.navigate(['login']);
    return islogin;
  }
  
}
