'use strict';

$(document).ready(function() {

  var getNauts = function(nauts) {
    for(var i = 0; i < nauts.length; i++) {
      $('#nauts-list').append($("<div></div>")
        .addClass("col-sm-3 col-xs-6")
        .append($("<a></a>")
          .attr({ href: "#" })
          .append($("<img></img>")
            .addClass("img-responsive portfolio-item")
            .attr({ src: "http://lorempixel.com/500/300/" })
            .attr({ alt: "" })
          )
        )
      );  
    }
    
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
