const express = require('express');
const router = require('express-promise-router')();
const booksController = require('../controllers/books');



router.route('/getBooks')
    .get(booksController.getBooks);

router.route('/getBookInfo')
    .get(booksController.getBookInfo);



module.exports = router;