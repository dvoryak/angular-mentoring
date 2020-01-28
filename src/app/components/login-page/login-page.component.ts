import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from '../../entity';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

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
              private authService: AuthService) { }

  ngOnInit(): void {
  }


  public onSubmit(): void {
    console.log('Login event');
    this.submitted = true;
    this.authService.login(this.formUser.email, this.formUser.password)
        .subscribe(data => {
          if (data) {
            this.router.navigateByUrl('/courses');
          }
        });
  }



}
