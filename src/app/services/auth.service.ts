import {Injectable} from '@angular/core';
import {User} from '../entity';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

const LOGIN_PATH = 'auth/login';
const USER_INFO_PATH = 'auth/userinfo';
const SERVER_ENDPOINT = 'http://localhost:3004';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private $currentLoggedUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    private $isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient, private router: Router) {
    }

    public login(username: string, password: string): Observable<boolean> {

        this.http.post<User>(`${SERVER_ENDPOINT}/${LOGIN_PATH}`, {email: username, password})
            .pipe(tap(token => {
                    if (token) {
                        this.setUser(token.token);
                        this.$isAuthenticated.next(true);
                        this.$currentLoggedUserSubject.next(token);
                    }
                    this.$isAuthenticated.next(false);
                }),
            ).subscribe();

        return this.$isAuthenticated.asObservable();
    }

    public logout(): void {
        localStorage.removeItem('token');
        this.$currentLoggedUserSubject.next(null);
    }

    public getUser(): Observable<User> {
        const tokenUser = this.getCurrentUser();
        this.http.post<User>(`${SERVER_ENDPOINT}/${USER_INFO_PATH}`, {token: tokenUser})
            .pipe(tap(user => this.$currentLoggedUserSubject.next(user)))
            .subscribe();
        return this.$currentLoggedUserSubject.asObservable();
    }

    public isAuthenticated(): boolean {
        return this.$isAuthenticated.value;
    }


    private getCurrentUser(): string {
        return localStorage.getItem('token');
    }

    private setUser(user: string): void {
        localStorage.setItem('token', user);
    }

}
