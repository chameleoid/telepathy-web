'use strict';

import { Zepto as $ } from 'zepto-browserify';

// Disable scroll if iOS standalone is happening
if (window.navigator.standalone) {
  $(document).on('touchmove', function(event) {
    if ($('.modal').hasClass('open'))
      return;

    event.preventDefault();
    return false;
  });
}
