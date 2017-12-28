;(function( $ ) {
  'use strict';

  var $select;
  var $save;
  var $form;

  var fplugin1 = function() {
    console.log('Funzione plugin 1');
  }

  $(function() {
    $select = $('#template');
    $save = $('#save');
    $form = $('#form');

    Callback.init();
    Callback.setCallback(fplugin1);

    $select.on('change', function(e) {
      console.log(e.currentTarget.value);
    });

    $form.on('submit', function(e) {
      console.log('faccio le mie cose');
      Callback.run();
      return false;
    });
  });

  $( window ).load(function() {

  });

})( jQuery );