const express = require("express");

let router = express.Router();

// http://localhost:5000/items/books  //items was normally infront of books here but was move to middleware
router
  .route("/books")
  .get((req, res) => {

      res.send("Get: its route is /items/books")
  })
  .post((req, res) => {
    res.send("POST: its route is /items/books")
  });

// http://localhost:5000/items/books/:bookId

router
  .route("/books/:bookId")
  .get((req, res) => {

    res.send("Get: its route is /items/books/:bookId" +req.params.bookId)
  })
  .put((req, res) => {

    res.send("Get: its route is /items/books/:bookId" +req.params.bookId)
  })
  .delete((req, res) => {
      
    res.send("Get: its route is /items/books/:bookId" +req.params.bookId)
  });

module.exports = router;
