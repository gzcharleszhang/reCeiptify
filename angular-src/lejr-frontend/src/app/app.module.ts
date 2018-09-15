import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FirebaseModule, FirebaseProvider} from "angular-firebase";
import {FirebaseService} from "./services/firebase.service";
import {MatButtonModule} from "@angular/material";
import { HomePageComponent } from './home-page/home-page.component';

const routes : Routes = [
  {path: "**", component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FirebaseModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [FirebaseProvider, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
