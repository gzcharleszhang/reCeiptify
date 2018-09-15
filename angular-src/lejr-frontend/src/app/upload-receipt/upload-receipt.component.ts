import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../services/firebase.service";
import {ExpensesService} from "../services/expenses.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload-receipt',
  templateUrl: './upload-receipt.component.html',
  styleUrls: ['./upload-receipt.component.css']
})
export class UploadReceiptComponent implements OnInit {

  public fileChoosen : boolean;
  public ocrDone : boolean;

  public imgUrl : string;
  public imageFields : any;

  constructor(private fbService: FirebaseService,
               private expenseService: ExpensesService,
               private router : Router) { }

  ngOnInit() {
    this.fileChoosen = false;
    this.ocrDone = false;
    this.imageFields = null;
  }

  onFileChosen(event) {
    const file = event.target.files[0];

    let fileName = Math.random().toString(36).substr(2);

    if (name !== null && name !== undefined) {
      const fileReference = this.fbService.createFileReference(file, fileName);

      this.fileChoosen = true;

      // upload the file to C L O U D S T O R A G E
      fileReference.put(file).then(snapshot => {

        // get the download url
        fileReference.getDownloadURL().then(url => {

          this.imgUrl = url;

          // Call the OCR API
          this.expenseService.createExpense(url).subscribe(res => {
            this.imageFields = res;
            this.ocrDone = true;
          });
        });
      });
    }
  }

  onSplitClick() {
    this.router.navigateByUrl("friends")
  }

}
