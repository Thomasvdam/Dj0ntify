$(document).ready(function() {
  $("#Dj0ntify").submit(function() {

    var text = $("textarea[name=text]").val();
    var character;
    var beat = 0;
    var line = 0;

    var reVowels = /^[aeiou]$/i;

    for (var i = 0; i < text.length; i++) {
      
      if (beat == 4) {

        if (line == 3) {
          $("#Dj0nted").append('<br/>');
          line = 0;
        } else {
          $("#Dj0nted").append(' | ');
          line ++;
        };
        beat = 0;
      };

      if (text[i] == ' ') {
        continue;
      } else if (reVowels.test(text[i])) {
        $("#Dj0nted").append('0');
        beat++;
      } else {
        $("#Dj0nted").append('-');
        beat++;
      };
    };
    return false;
  });
});