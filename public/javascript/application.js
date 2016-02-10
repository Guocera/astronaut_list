'use strict';

$(document).ready(function() {

  var getNauts = function(nauts) {
    $('#nauts-list').append($("<div></div>")
      .addClass("col-sm-3 col-xs-6")
    )
  };

  var selected = function(naut) {
    $('#name').text(naut.first_name + " " + naut.last_name);
    $('#country').text(naut.country);
    $('#selection-year').text(naut.selection_year);
  };


  $.getJSON('/nauts', getNauts);

  $.getJSON('/selected_naut', selected);
// $(this).attr("src", urlAbsolute)




});
