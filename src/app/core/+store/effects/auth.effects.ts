import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {AuthService} from '../../../services/auth.service';
import {loginComplete, loginFailure, loginRequest, logout} from '../actions/auth.actions';
import {User} from '../../../entity';

@Injectable()
export class AuthStoreEffects {
    constructor(
        private actions$: Actions,
        private authorizationService: AuthService,
        private router: Router
    ) {}

    loginRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginRequest),
            switchMap(({ login, password }): Observable<Action> =>
                this.authorizationService.login(login, password).pipe(
                    map((user: User) => loginComplete({ user })),
                    catchError((error) => of(loginFailure({ error })))
                )
            )
        )
    );

    loginComplete$ = createEffect(() =>
            this.actions$.pipe(
                ofType(loginComplete),
                tap(() => this.router.navigate(['/courses']))
            ),
        { dispatch: false }
    );

    loginFailure$ = createEffect(() =>
            this.actions$.pipe(
                ofType(loginFailure),
                tap((error) => {
                    console.log(error);
                    return this.router.navigate(['/login']);
                })
            ),
        { dispatch: false }
    );

    logout$ = createEffect(() =>
            this.actions$.pipe(
                ofType(logout),
                tap(() => this.router.navigate(['login']))
            ),
        { dispatch: false }
    );
}
