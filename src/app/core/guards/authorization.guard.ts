import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {map, skipWhile} from 'rxjs/operators';
import {User} from '../../entity';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
    constructor(
      private router: Router,
      private authorizationService: AuthService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> | boolean | UrlTree {
        return (this.authorizationService.$currentLoggedUserSubject.asObservable().pipe(
            skipWhile(x => x === null),
            map((logged: User) => !!logged || this.router.parseUrl('/login'))
        ));

    }



}
