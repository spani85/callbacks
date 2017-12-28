;(function( $ ) {
  'use strict';

  var ftheme1 = function() {
    console.log('Funzione theme 1');
  }

  $(function() {
    Callback.setCallback(ftheme1);
  });

  $( window ).load(function() {

  });

})( jQuery );