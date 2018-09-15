import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FirebaseModule, FirebaseProvider} from "angular-firebase";
import {FirebaseService} from "./services/firebase.service";
import {MatButtonModule} from "@angular/material";
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FirebaseModule,
    MatButtonModule
  ],
  providers: [FirebaseProvider, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
