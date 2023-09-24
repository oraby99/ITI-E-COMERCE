import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsresService } from './usres.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private userserv:UsresService, private router: Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      const loggedStatus =this.userserv.islogged();
      if(!loggedStatus)
      {
        alert('MUST BE LOG IN FIRST ..!')
        this.router.navigateByUrl('/login');
      }
      return loggedStatus;
  }
  
}
