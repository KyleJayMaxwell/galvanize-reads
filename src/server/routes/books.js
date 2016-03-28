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

router.post('/new', function(req, res, next) {
  var title = req.body.title;
  var cover_url = req.body.cover;
  var genre = req.body.genre;
  var description = req.body.desc;
  books.addBook(title, genre, description, cover_url).then(function(results) {
    res.redirect('/books');
  });
});

router.get('/edit/:id',function(req, res, next) {
  var id = req.params.id;  
  books.getSingleBook(id).then(function(book) {
    res.render('books/edit', { title: 'Edit', book: book });
  });
});

router.post('/edit/:id', function(req, res, next) {
  var id = req.params.id; 
  var title = req.body.title;
  var cover_url = req.body.cover;
  var genre = req.body.genre;
  var description = req.body.desc; 
  books.editBook(id, title, cover_url, genre, description).then(function(results) {
    res.redirect('/books/'+id);
  });
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  books.getSingleBook(id).then(function(book){
    res.render('books/single', { title: 'Individual Book', book: book });
  });
});

router.post('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  books.deleteBook(id).then(function(books) {
    res.redirect('/books');
  });
});

// router.get('/', function(req, res, next) {
//   members.getAllMembers().then(function(members) {
//     res.render('members/all', { title: 'All Members', members:members });
//   });
// });

module.exports = router;
