import { Injectable } from '@angular/core';
import * as firebase from 'firebase'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  database : firebase.database.Database;
  storage : firebase.storage.Storage;

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

  uploadFile(file : File, name: string) {

    const randomId = Math.random().toString(36).substring(2);

    let reference = this.storage.ref("images/" + randomId);

    reference.put(file).then(snapshot => {
      this.database.ref("images/" + name).push({
        imageId: randomId,
        date: Date.now()
      }).then(response => {
        this.database.ref("images/" + name).once("value").then(response => {
          console.log(response.val());
        })
      });
    });
  }
}
