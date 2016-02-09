'use strict';

$(document).ready(function() {

  (function() {
    var getNauts = function(nauts) {
      console.log(nauts);
    };

    $.getJSON('/nauts', getNauts);
  })();

  (function() {
    var selected = function(naut) {
      $('#name').text(naut.first_name + " " + naut.last_name)
    };

    $.getJSON('/selected_naut', selected);
  })();


});
