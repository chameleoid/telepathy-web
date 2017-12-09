'use strict';

import { Zepto as $ } from 'zepto-browserify';

$('.modal-close').on('click', function() {
  $(this).parents('.modal').removeClass('open');
});
