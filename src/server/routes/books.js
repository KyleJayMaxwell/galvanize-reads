var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/gread';
var knex = require('../../../db/knex');
var books = require('../queries/books');
var genres = require('../queries/genres');

router.get('/', function(req, res, next) {
  books.getAllBooks().then(function(books) {
    res.render('books/all', { title: 'Galvanize Reads', books:books });
  });
});

router.get('/new', function(req, res, next) {
  genres.getAllGenres().then(function(genres){
  res.render('books/new', { title: 'Galvanize Reads', genres: genres });
  });
});

router.post('/new', function(req, res, next) {
  var title = req.body.title;
  var cover_url = req.body.cover;
  var g_id = req.body.g_id;
  var description = req.body.desc;
  books.addBook(title, g_id, description, cover_url).then(function(results) {
    res.redirect('/books');
  });
});

router.get('/edit/:id',function(req, res, next) {
  
  var promises = [];

  var id = req.params.id; 

  promises.push(books.getSingleBook(id));
  promises.push(genres.getAllGenres());

  return Promise.all(promises)

  .then(function(result) {
    res.render('books/edit', { title: 'Galvanize Reads',
                                book: result[0][0],
                                genres: result[1] 
                              }
              );
  })

  .catch( function (error) { return error; });

});


router.post('/edit/:id', function(req, res, next) {
  var id = req.params.id; 
  var title = req.body.title;
  var cover_url = req.body.cover_url;
  var g_id = req.body.g_id;
  var description = req.body.desc; 
  books.editBook(id, title, g_id, description, cover_url).then(function(results) {
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
