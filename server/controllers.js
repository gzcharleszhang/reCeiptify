const { default: axios } = require('axios');
const firebase = require('firebase');
const shortid = require('shortid');

module.exports = {
  recordExpenses: (req, res, next) => {
    const db = firebase.database();
    const { url, userId } = req.body;
    const TaggunURL = 'https://api.taggun.io/api/receipt/v1/simple/url'

    axios.post(TaggunURL, { url }, { headers: { apikey: '0d421fe0b87211e8b187f3e9d1401099' } })
      .then((response) => {
        const { data } = response;
        console.log(data);
        const expenseId = shortid.generate();
        const expense = {
          amount: data.totalAmount.data,
          date: data.date.data,
          merchantName: data.merchantName.data,
          merchantAddress: data.merchantAddress.data,
        }
        return db.ref('expenses/' + expenseId).set(expense)
          .then(() => res.json({ ...expense, expenseId }))
      })
      .catch(err => res.json(err));
  }
}
