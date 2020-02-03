import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../entity';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/+store/core.state';
import {logout} from '../../core/+store/actions/auth.actions';

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
        private store: Store<AppState>
    ) {
    }

    public onLogOff(): void {
        this.store.dispatch(logout());
    }

    public onLogIn(): void {
    }

    ngOnInit(): void {
        this.currentLoggedUser = this.authService.getUser();
    }
}
