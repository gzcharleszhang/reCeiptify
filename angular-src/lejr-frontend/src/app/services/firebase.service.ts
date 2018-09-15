import { Injectable } from '@angular/core';
import * as firebase from 'firebase'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private database : firebase.database.Database;
  private storage : firebase.storage.Storage;

  constructor() {
    const config = {
      apiKey: "AIzaSyCbdv7JsEMaBkdaj5406baxNv0aOJJwuKk",
      authDomain: "lejr2firebase.firebaseapp.com",
      databaseURL: "https://lejr2firebase.firebaseio.com",
      projectId: "lejr2firebase",
      storageBucket: "lejr2firebase.appspot.com",
      messagingSenderId: "993862945593"
    };

    firebase.initializeApp(config);

    this.database = firebase.database();
    this.storage = firebase.storage();
  }

  createFileReference(file : File, name: string) {

    return this.storage.ref("images/" + name);
  }
}
