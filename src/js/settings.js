'use strict';

import UI from './ui';
import { Zepto as $ } from 'zepto-browserify';

$('#open-settings').on('click', function(event) {
  event.preventDefault();
  $('#settings').addClass('open');
});

$('#settings input, #settings select').each((n, element) => {
  let $element = $(element);

  $element.on('change', () => {
    if (!$element.prop('name'))
      return;

    UI.settings[$element.prop('name')] = $element.val();
  });
});

$('.save-settings').on('click', function() {
  UI.save();
  UI.load();
});

$('.reset-settings').on('click', function() {
  UI.load();
});

if (!UI.settings['shared-secret'].length)
  $('#settings').addClass('open');
