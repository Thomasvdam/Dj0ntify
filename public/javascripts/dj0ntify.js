$(document).ready(function() {

  $("#Dj0ntify").submit(function() {

    var text = $("textarea[name=text]").val();
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
    $("#Dj0nted").html(djentText);
    return false;
  });
});