import { Component, OnInit } from '@angular/core';
import {User} from '../../entity/impl/user-model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public submitted = false;
  public formUser: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log('User submitted');
    this.submitted = true;
  }


}
