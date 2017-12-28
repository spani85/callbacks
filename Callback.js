var Callback = (function($) {
  'use strict';
  var c;

  var init = function() {
    c = [];
  };

  var setCallback = function(callback) {
    c.push(callback);
  };

  var run = function() {
    for(var i = 0; i < c.length; i++) {
      c[i]();
    }
  }

  return {
    init: init,
    setCallback: setCallback,
    run: run
  }
})(jQuery);