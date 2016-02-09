$(document).ready(function() {

  (function() {
    var getNauts = function(data) {
      console.log(data);
    };

    $.getJSON('/nauts', getNauts);
  })();
});
