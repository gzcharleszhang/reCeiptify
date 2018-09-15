import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private readonly CREATE_EXPENSE_ENDPOINT = "http://localhost:8080/api/expenses";
  private readonly TRANSACT_ENDPOINT = "http://localhost:8080/api/transactions/transfer";

  private readonly BUYER_USER_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_9de7e105-36ff-4151-9b52-35607f4c50bb";
  private readonly PAYER_USER_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_39e0dc13-14d5-4b5c-af5a-49b1dcef34ed";
  private readonly BUYER_ACCOUNT_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_74461df2-7b46-4c5e-a538-815ac6a9ae1c";
  private readonly PAYER_ACCOUNT_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_24e38c7d-11da-4feb-854c-57fcd5241218";

  constructor(private http: HttpClient) { }

  createExpense(url) {

    if (localStorage.getItem("user") === "Isabella") {
      const userId = this.BUYER_USER_ID;

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

  transferMoney() {

    if (localStorage.getItem("user") === "Sean") {
      const fromAccountID = this.PAYER_ACCOUNT_ID;
      const toAccountID = this.BUYER_ACCOUNT_ID;

      const userId = this.PAYER_USER_ID;

      let body = {
        fromAccountID: fromAccountID,
        toAccountID: toAccountID,
        userId: userId
      };

      return this.http.post(this.TRANSACT_ENDPOINT, body);
    }

    else {
      return null;
    }
  }
}
