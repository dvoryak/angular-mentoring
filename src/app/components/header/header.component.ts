import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logo = 'assets/images/logo.png';
  public isLogged = false;
  public userName = 'Pavlo Dvoriak';

  constructor() {  }

  ngOnInit(): void {
  }

  public onLogOff(): void {
    this.isLogged = false;
  }

  public onLogIn(): void {
    this.isLogged = true;
  }

}
