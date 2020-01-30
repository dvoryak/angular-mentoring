import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../entity';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    public currentLoggedUser: Observable<User>;

    constructor(
        private authService: AuthService,
        private router: Router,
        private ref: ChangeDetectorRef
    ) {
    }

    public onLogOff(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    public onLogIn(): void {
    }

    ngOnInit(): void {
        this.currentLoggedUser = this.authService.getUser();
    }
}
