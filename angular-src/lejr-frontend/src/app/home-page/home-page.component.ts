import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {LoginPopupComponent} from "../login-popup/login-popup.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog() {
    const dialogRef = this.dialog.open(LoginPopupComponent);
  }

}
