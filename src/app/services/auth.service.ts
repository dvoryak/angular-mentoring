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

    public login(username: string, password: string): void {

        this.http.post<User>(`${SERVER_ENDPOINT}/${LOGIN_PATH}`, {email: username, password})
            .pipe(tap(token => {
                    if (token) {
                        this.setToken(token.token);
                        this.$isAuthenticated.next(true);
                        this.$currentLoggedUserSubject.next(token);
                        this.router.navigateByUrl('/courses');
                    }
                    this.$isAuthenticated.next(false);
                }),
            ).subscribe();

    }

    public logout(): void {
        localStorage.removeItem('token');
        this.$currentLoggedUserSubject.next(null);
    }

    public getUser(): Observable<User> {
        const tokenUser = this.getToken();
        this.http.post<User>(`${SERVER_ENDPOINT}/${USER_INFO_PATH}`, {token: tokenUser})
            .pipe(tap(user => this.$currentLoggedUserSubject.next(user)))
            .subscribe();
        return this.$currentLoggedUserSubject.asObservable();
    }

    public isAuthenticated(): Observable<boolean> {
        return this.$isAuthenticated.asObservable();
    }


    private getToken(): string {
        return localStorage.getItem('token');
    }

    private setToken(token: string): void {
        localStorage.setItem('token', token);
    }

}
