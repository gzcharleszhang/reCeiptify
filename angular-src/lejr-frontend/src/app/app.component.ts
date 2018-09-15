import { Component } from '@angular/core';
import {FirebaseService} from "./services/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lejr-frontend';

  constructor(private fbService: FirebaseService) {

  }

  onUploadClick(event) {
    let file = event.target.files[0];

    this.fbService.uploadFile(file, "jack");
  }

}
