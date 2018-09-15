// server/server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require('firebase');

require('dotenv').config();

const app = express();

const router = require('./routes');
const port = 8080;

app.listen(port, () => {
  console.log(`running at localhost: ${port}`);
});

app.use(cors());

// firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "lejr2firebase.firebaseapp.com",
  databaseURL: "https://lejr2firebase.firebaseio.com",
  projectId: "lejr2firebase",
  storageBucket: "lejr2firebase.appspot.com",
  messagingSenderId: "993862945593"
};
firebase.initializeApp(firebaseConfig);

app.set('view engine', 'html');
if (process.env.NODE_ENV === 'production') {
  app.set('views', path.join(__dirname, '../../public'));
  app.use(express.static(path.join(__dirname, '../../public')));
  app.get('/', (req, res) => {
    res.render('index');
  });
}

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

const errorHandler = (err, req, res, next) => {
  let { message, statusCode } = err;
  if (!message) {
    message = 'Server Error';
  }
  if (!statusCode) {
    statusCode = 500;
  }
  res.status(statusCode).json({ message, statusCode });
};

app.use('/api', router);
app.use(errorHandler);

module.exports = app;
