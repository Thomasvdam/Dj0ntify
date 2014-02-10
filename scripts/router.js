/*
 * Module dependencies
 */
var express = require('express');
var router = new express.Router();

router.get('/', function (req, res){
  console.log('Routing request for home.');
  res.render('home');
});

router.post('/', function (req, res) {
  var text = req.body.text;
  var djentText = "";
  var beat = 0;
  var line = 0;

  var reVowels = /^[aeiou]$/i;

  for (var i = 0; i < text.length; i++) {
    
    if (beat == 4) {

      if (line == 3) {
        djentText += '<br/>';
        line = 0;
      } else {
        djentText += ' | ';
        line ++;
      };
      beat = 0;
    };

    if (text[i] == ' ') {
      continue;
    } else if (reVowels.test(text[i])) {
      djentText += '0';
      beat++;
    } else {
      djentText += '-';
      beat++;
    };
  };
  res.send(djentText);
});

module.exports = router;