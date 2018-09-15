import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private readonly CREATE_EXPENSE_ENDPOINT = "/api/expenses";

  constructor(private http: HttpClient) { }

  createExpense(url) {

    if (localStorage.getItem("user") === "Isabella") {
      const userId = "7291e7e8-1da3-4c23-8594-795f67fa5a65_9de7e105-36ff-4151-9b52-35607f4c50bb";

      let body = {
        url: url,
        userId: userId
      };

      return this.http.post(this.CREATE_EXPENSE_ENDPOINT, body);
    }

    else {
      return null;
    }
  }
}
