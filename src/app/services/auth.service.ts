import { Injectable } from '@angular/core';
import {User} from '../entity/impl/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(this.getUserInfo());
  }

  public login(username: string, password: string): void {
    console.log('Logged successfully');
    localStorage.setItem('token', 'JWT');
    localStorage.setItem('currentUser', username);
    localStorage.setItem('password', password);
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  public getUserInfo(): string {
    return localStorage.getItem('currentUser');
  }

  private hasCurrentUser(): boolean {
    return !!localStorage.getItem('currentUser');
  }

}
