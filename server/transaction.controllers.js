const { default: axios } = require('axios');
const firebase = require('firebase');
const shortid = require('shortid');
const _ = require('lodash');

module.exports = {
  transfer: (req, res, next) => {
    const { userId, fromAccountID, toAccountID } = req.body;
    const db = firebase.database();
    const tdUrl = "https://api.td-davinci.com/api/transfers";
    const tdKey = process.env.TD_KEY;

    db.ref('/users/' + userId).once('value')
      .then((snapshot) => {
        const amount = snapshot.val().amountOweing;
        const currency = 'CAD';
        // if (amount === 0) {
        //   res.json({});
        // }

        axios.post(tdUrl, {
          fromAccountID,
          toAccountID,
          amount,
          currency,
          description: 'LEJR',
        }, { headers: { Authorization: tdKey } })
          .then((response) => {
            const { data } = response;
            const { id: tdTransactionId, ...otherData } = data.result;
            const transactionId = shortid.generate();
            const transaction = {
              ...otherData,
              tdTransactionId,
              id: transactionId,
            };
            console.log(transaction);
            const INTUIT_URL = `https://sandbox-quickbooks.api.intuit.com/v3/company/${process.env.INTUIT_REALM_ID}/journalentry`
            axios.post(INTUIT_URL, {
              Line: [
                {
                  Id: 0,
                  Description: 'Employee Reimbursement',
                  Amount: amount,
                  DetailType: 'JournalEntryLineDetail',
                  JournalEntryLineDetail: {
                    PostingType: 'Debit',
                    AccountRef: {
                      value: '96',
                      name: 'Sales Expense',
                    }
                  }
                },
                {
                  Description: 'Employee Reimbursement',
                  Amount: amount,
                  DetailType: 'JournalEntryLineDetail',
                  JournalEntryLineDetail: {
                    PostingType: 'Credit',
                    AccountRef: {
                      value: '97',
                      name: 'Cash on Hand',
                    }
                  }
                }
              ]
            }, {
              headers: { Authorization: `bearer ${process.env.INTUIT_ACCESS_TOKEN}` },
            })
            .then(payment => console.log(payment))
            .catch(err => {
              console.log(err.response.data.Fault)
            });
            db.ref('/users/' + userId).set({ amountOweing: 0 })
            db.ref('/transactions/' + transactionId).set(transaction)
              .then(() => res.json(transaction));
          })
          .catch(err => console.log(err));
      })
  },

  fetchAll: (req, res) => {
    const db = firebase.database();
    db.ref('/transactions').once('value')
      .then((snapshot) => {
        const transactions = Object.values(snapshot.val());
        res.json(transactions);
      });
  },

  reimburse: (req, res) => {
    const { userId } = req.params;
    const db = firebase.database();

    db.ref('/expenses').once('value')
      .then((expenses) => {
        const userExpenses = Object.values(expenses.val())
          .filter(e => e.userId === userId);
        const sum = _.sumBy(userExpenses, 'amount');
        res.json({ amount: sum, userId });
      })
  }
}
