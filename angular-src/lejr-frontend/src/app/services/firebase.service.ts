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

  uploadFile(file : File, name: string) {

    const randomId = Math.random().toString(36).substring(2);

    let reference = this.storage.ref("images/" + randomId);

    // upload the file to C L O U D S T O R A G E
    reference.put(file).then(snapshot => {

      // get the download url
      reference.getDownloadURL().then(response => {

        // put the meta data in the database
        this.database.ref("images/" + name).push({
          imageId: randomId,
          date: Date.now(),
          url: response
        }).then(response => {
          // do nothing for now
        });
      });
    });


  }
}
