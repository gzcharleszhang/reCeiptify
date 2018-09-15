import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {

  public username : string;

  constructor(private router: Router, private dialog: MatDialogRef<LoginPopupComponent>) {
  }

  ngOnInit() {

    this.username = "";
  }

  onLoginClick() {

    if (this.username === "Isabella") {
      localStorage.setItem("user", this.username);

      this.router.navigateByUrl("upload").then(next => {
        this.dialog.close();
      });
    }

    else if (this.username === "Sean") {
      localStorage.setItem("user", this.username);

      this.router.navigateByUrl("friends").then(next => {
        this.dialog.close();
      });
    }
  }

}
