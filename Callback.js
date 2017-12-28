var Callback = (function($) {
  'use strict';
  var c;

  var init = function() {
    c = [];
  };

  var setCallback = function(callback) {
    c.push(callback);
  };

  var getCallbacks = function() {
    return c;
  };

  var run = function() {
    for(var i = 0; i < c.length; i++) {
      c[i]();
    }
  };

  return {
    init: init,
    setCallback: setCallback,
    getCallbacks: getCallbacks,
    run: run
  }
})(jQuery);