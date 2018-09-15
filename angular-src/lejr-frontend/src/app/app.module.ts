import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FirebaseModule, FirebaseProvider} from "angular-firebase";
import {FirebaseService} from "./services/firebase.service";
import {MatButtonModule, MatProgressSpinnerModule} from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import {FormsModule} from "@angular/forms";
import { UploadReceiptComponent } from './upload-receipt/upload-receipt.component';
import {ExpensesService} from "./services/expenses.service";
import {HttpClientModule} from "@angular/common/http";
import { FriendsComponent } from './friends/friends.component';
import { PaymentPopupComponent } from './payment-popup/payment-popup.component';


const routes : Routes = [
  {path: "upload", component: UploadReceiptComponent},
  {path: "friends", component: FriendsComponent},
  {path: "**", component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPopupComponent,
    UploadReceiptComponent,
    FriendsComponent,
    PaymentPopupComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FirebaseModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [FirebaseProvider, FirebaseService, ExpensesService],
  entryComponents: [LoginPopupComponent, PaymentPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
