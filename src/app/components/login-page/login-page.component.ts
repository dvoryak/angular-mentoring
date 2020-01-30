import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from '../../entity';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

  public submitted = false;
  public formUser: User = new User();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log('User submitted');
    this.router.navigateByUrl('/courses')
    this.submitted = true;
  }


}
