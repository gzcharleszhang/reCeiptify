const { default: axios } = require('axios');
const firebase = require('firebase');
const shortid = require('shortid');

module.exports = {
  recordExpenses: (req, res, next) => {
    const db = firebase.database();
    const { url, userId } = req.body;
    const TaggunURL = 'https://api.taggun.io/api/receipt/v1/verbose/url'

    axios.post(TaggunURL, { url }, { headers: { apikey: process.env.TAGGUN_KEY } })
      .then((response) => {
        const { data } = response;
        const expenseId = shortid.generate();
        const { amounts } = data;
        const getLineItems = () => {
          const lineItems = [];
          for (let i = 0; i < amounts.length; i += 1) {
            if (amounts[i].text.toLowerCase().includes('total')) {
              break;
            }
            lineItems.push({
              text: amounts[i].text,
              amount: amounts[i].data,
            });
          }
          return lineItems;
        }
        
        const expense = {
          userId,
          imageUrl: url,
          lineItems: getLineItems(),
          amount: data.totalAmount.data,
          merchantName: data.merchantName.data,
        }
        console.log(expense);
        db.ref('expenses/' + expenseId).set(expense)
          .then(() => {
            res.json({ ...expense, expenseId })
          })
          .catch(err => console.log(err));
      })
      .catch(err => res.json(err));
  },

  transfer: (req, res, next) => {
    const { amount, currency, fromAccountId, toAccountId } = req.body;
    const db = firebase.database();
    const tdUrl = "https://api.td-davinci.com/api/transfers";
    const tdKey = process.env.TD_KEY;

    axios.post(tdUrl, { ...req.body, description: 'LEJR' }, { headers: { Authorization: tdKey } })
      .then((response) => {
        const { data } = response;
        const { id: tdTransactionId, ...otherData } = data.result;
        const transactionId = shortid.generate();
        const transaction = {
          ...otherData,
          tdTransactionId,
        };
        console.log(transaction);
        db.ref('/transactions/' + transactionId).set(transaction)
          .then(() => res.json(transaction));
      })
      .catch(err => console.log(err));
  }
}
