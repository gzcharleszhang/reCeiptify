import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

  public username : string;

  constructor() {
  }

  ngOnInit() {

    this.username = "";
  }

  onLoginClick() {

    localStorage.setItem("user", this.username);
  }

}
