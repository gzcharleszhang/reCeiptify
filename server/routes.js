const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.use('/expenses', controllers.recordExpenses);

// router.use('/transactions', );

module.exports = router;
