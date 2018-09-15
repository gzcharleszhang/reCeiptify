import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-payment-popup',
  templateUrl: './payment-popup.component.html',
  styleUrls: ['./payment-popup.component.css']
})
export class PaymentPopupComponent implements OnInit {

  public paymentInfo: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.paymentInfo = data;
    console.log(data);
  }

  ngOnInit() {
  }

}
