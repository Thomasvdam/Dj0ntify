/*
 * Module dependencies
 */
var express = require('express');
var router = new express.Router();

router.get('/', function (req, res){
  console.log('Routing request for home.');
  res.render('home');
  console.log('SAY WHAT');
});

module.exports = router;