const { default: axios } = require('axios');
const firebase = require('firebase');
const shortid = require('shortid');
const _ = require('lodash');

module.exports = {
  recordExpenses: (req, res, next) => {
    const db = firebase.database();
    const { url, userId } = req.body;
    const TaggunURL = 'https://api.taggun.io/api/receipt/v1/verbose/url'
    const XEURL = 'https://xecdapi.xe.com/v1/convert_from.json/'

    axios.post(TaggunURL, { url }, { headers: { apikey: process.env.TAGGUN_KEY } })
      .then((response) => {
        const { data } = response;
        const expenseId = shortid.generate();
        const { amounts } = data;
        let amount = data.totalAmount.data || null;
        let originalAmount = amount;
        let originalCurrency = 'CAD';
        let expensePromise = Promise.resolve();
        if (data.totalAmount.text.toLowerCase().includes('usd')) {
          expensePromise = expensePromise.then(() => {
            return axios.get(`${XEURL}?from=USD&to=CAD&amount=${amount}`,
              { auth: { username: process.env.XE_USERNAME, password: process.env.XE_PASSWORD } })
              .then(currencyRes => {
                const { data } = currencyRes;
                originalCurrency = 'USD';
                originalAmount = amount;
                amount = data.to[0].mid.toFixed(2);
              })
              .catch(err => console.log(err));
          })
        } else if (data.totalAmount.text.toLowerCase().includes('chf')) {
          expensePromise = expensePromise.then(() => {
            return axios.get(`${XEURL}?from=CHF&to=CAD&amount=${amount}`,
              { auth: { username: process.env.XE_USERNAME, password: process.env.XE_PASSWORD } })
              .then(currencyRes => {
                const { data } = currencyRes;
                originalCurrency = 'CHF';
                originalAmount = amount;
                amount = data.to[0].mid.toFixed(2);
              })
              .catch(err => console.log(err));
          })
        }
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
          return _.uniqBy(lineItems, 'text');
        }
        
        expensePromise = expensePromise.then(() => {
          const expense = {
            userId,
            imageUrl: url,
            lineItems: getLineItems(),
            amount,
            merchantName: data.merchantName.data || null,
            originalAmount,
            originalCurrency,
          }
          console.log(expense);
          return db.ref('expenses/' + expenseId).set(expense)
            .then(() => {
              const userRef = db.ref('users/7291e7e8-1da3-4c23-8594-795f67fa5a65_39e0dc13-14d5-4b5c-af5a-49b1dcef34ed');
              userRef.once('value')
                .then((user) => {
                  const { amountOweing } = user.val();
                  db.ref('users/7291e7e8-1da3-4c23-8594-795f67fa5a65_39e0dc13-14d5-4b5c-af5a-49b1dcef34ed')
                    .set({ amountOweing: (Number.parseFloat(amountOweing) + (amount / 2)).toFixed(2) })
                      .then(() => res.json({ ...expense, expenseId }));
                })
            })
            .catch(err => console.log(err));
        });
        
        return expensePromise;
      })
      .catch(err => res.json(err));
  }
}
