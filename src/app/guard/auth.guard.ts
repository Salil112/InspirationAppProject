import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../sercices/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public _commonService: CommonService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //checking if authToken is Present or not. If not then, we are navigating back to login
    if (this._commonService.authToken == '' || this._commonService.authToken == null) {
      this.router.navigate(['login']);
      return false
    } else {
      return true;
    }
  }




}
