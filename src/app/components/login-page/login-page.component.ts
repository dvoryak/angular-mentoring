import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from '../../entity';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/+store/core.state';
import {loginRequest} from '../../core/+store/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

  public submitted = false;
  public formUser: User = new User();

  constructor(private router: Router,
              private authService: AuthService,
              private store: Store<AppState>) { }

  ngOnInit(): void {
  }


  public onSubmit(): void {
    console.log('Login event');
    this.submitted = true;

    const authData = {
      email: this.formUser.email,
      password: this.formUser.password,
    };
    this.store.dispatch(loginRequest({login: authData.email, password: authData.password}));

  }


}
