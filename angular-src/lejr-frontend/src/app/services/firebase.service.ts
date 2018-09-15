import { Injectable } from '@angular/core';
import * as firebase from 'firebase'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private database : firebase.database.Database;
  private storage : firebase.storage.Storage;

  private readonly BUYER_USER_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_9de7e105-36ff-4151-9b52-35607f4c50bb";
  private readonly PAYER_USER_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_39e0dc13-14d5-4b5c-af5a-49b1dcef34ed";
  private readonly BUYER_ACCOUNT_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_74461df2-7b46-4c5e-a538-815ac6a9ae1c";
  private readonly PAYER_ACCOUNT_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_24e38c7d-11da-4feb-854c-57fcd5241218";

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

  getAmountsOweing() {
    return this.database.ref("/users/" + this.PAYER_USER_ID);
  }
}
