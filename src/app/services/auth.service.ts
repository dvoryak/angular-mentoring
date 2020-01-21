import { Injectable } from '@angular/core';
import {User} from '../entity/impl/user-model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  private isLoginSubject = new BehaviorSubject<boolean>(this.hasCurrentUser());

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.getUserInfo()));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public login(username: string, password: string): void {
    console.log('Logged successfully');
    localStorage.setItem('token', 'JWT');
    localStorage.setItem('currentUser', username);
    localStorage.setItem('password', password);
    this.isLoginSubject.next(true);
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  public getUserInfo(): string {
    return localStorage.getItem('currentUser');
  }

  private hasCurrentUser(): boolean {
    return !!localStorage.getItem('currentUser');
  }

}
