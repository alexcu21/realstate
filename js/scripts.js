global.jQuery = require('jquery');

bootstrap = require('bootstrap');
popper = require('popper.js');
Mustache = require('mustache');



jQuery(document).ready(function($){
  var jqxhr = $.getJSON('data.json', function(){

  }).done(function(data){
    var template = $('#template').html();
    var mostrarTemplate = Mustache.render(template, data);
    $('#galeria-londres').html(mostrarTemplate);
  });
});
