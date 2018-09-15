const express = require('express');
const expenseControllers = require('./expense.controllers');
const transactionControllers = require('./transaction.controllers');

const router = express.Router();

router.post('/expenses', expenseControllers.recordExpenses);

router.post('/transactions/transfer', transactionControllers.transfer);

router.get('/transactions/', transactionControllers.fetchAll);

router.get('/transactions/:userId/reimburse', transactionControllers.reimburse);

module.exports = router;
