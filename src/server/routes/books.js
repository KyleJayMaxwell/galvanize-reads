var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/gread';
var knex = require('../../../db/knex');
var books = require('../queries/books');

router.get('/', function(req, res, next) {
  books.getAllBooks().then(function(books) {
    res.render('books/all', { title: 'All Reads', books:books });
  });
});

router.get('/new', function(req, res, next) {
  res.render('books/new', { title: 'New Read', books:books });
});

// router.get('/', function(req, res, next) {
//   members.getAllMembers().then(function(members) {
//     res.render('members/all', { title: 'All Members', members:members });
//   });
// });

module.exports = router;
