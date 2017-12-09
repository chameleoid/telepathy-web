'use strict';

import Telepathy from 'telepathy';
import UI from './ui.js';
import _ from 'underscore';
import { Zepto as $ } from 'zepto-browserify';

import './install';
import './ios-standalone';
import './modals';
import './settings';

const telepathy = new Telepathy();

const $password = $('#password');
const $domain = $('#domain');

$domain.on('keydown input', _.debounce(() => {
  let domain = $domain.val().replace(/^\s+|\s+$/g, '');

  if (!domain.length) {
    $password.val('');
    return;
  }

  $password.val(telepathy.password({
    domain: domain,
    algorithm: UI.settings['algorithm'],
    user: UI.settings['default-username'],
    secret: UI.settings['shared-secret'],
    length: (+$('#length').val()) || UI.settings['default-length'],
    index: (+$('#index').val()) || UI.settings['default-index'],

    alphabet:
      $('input[name=lax]:checked').val() == 'yes' ?
        Telepathy.alphabet.base62 :
        Telepathy.alphabet.base94,
  }));
}));

$password.on('focus click', _.debounce(() => {
  $password.select();
}));

$('.modal-close, input[name=lax], #index, #length').on('click change keydown', () => {
  $domain.trigger('keydown');
});

$(window).on('blur focus keydown load', _.debounce(event => {
  // do nothing if we have an open modal
  if ($('.modal.open').length)
    return;

  // escape key
  if (event.type == 'keydown' && event.keyCode != 27)
    return;

  $('#domain, #password').val('');
  $domain.focus();
}));
