'use strict';

$(document).ready(function() {

  var getNauts = function(nauts) {
    console.log(nauts);
  };

  var selected = function(naut) {
    $('#name').text(naut.first_name + " " + naut.last_name);
    $('#country').text(naut.country);
    $('#selection-year').text(naut.selection_year);
  };


  $.getJSON('/nauts', getNauts);

  $.getJSON('/selected_naut', selected);



});
