import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  public seanAmountOwing : number;

  public isIsabella : boolean;

  constructor(private fbService: FirebaseService) {
    this.seanAmountOwing = 0;

    this.isIsabella = (localStorage.getItem("user") === "Isabella")
  }

  ngOnInit() {
    this.fbService.getAmountsOweing().on("value", snapshot => {
      this.seanAmountOwing = snapshot.val().amountOweing;
    });
  }

}
