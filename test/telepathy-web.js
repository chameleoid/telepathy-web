'use strict';

require('should');

describe('index.html', () => {
  beforeEach(() => {
    browser.url('/');

    // browser.localStorage('DELETE') does not work in PhantomJS
    browser.execute(function() {
      delete window.localStorage;
      window.localStorage = {};
    });

    browser.url('/');

    $('#default-username').waitForEnabled();

    $('#default-username').setValue('test');
    $('#shared-secret').setValue('test');
    $('.save-settings').click();

    $('#domain').waitForEnabled();
  });

  it('should generate a password', () => {
    $('#domain').setValue('example.com');

    browser.waitUntil(() =>
      $('#password').getValue() == 'z<u9N_[c"R'
    );
  });

  it('should generate a password at a given index', () => {
    $('#index').selectByVisibleText('1');
    $('#domain').setValue('example.com');

    browser.waitUntil(() =>
      $('#password').getValue() == 'g:3WGYj0}~'
    );
  });

  it('should generate a password of a given length', () => {
    $('#length').selectByVisibleText('8');
    $('#domain').setValue('example.com');

    browser.waitUntil(() =>
      $('#password').getValue() == 'u9N_[c"R'
    );
  });

  it('should open settings menu', () => {
    $('#open-settings').click();

    browser.waitUntil(() =>
      $('#settings').getLocation() >= '0'
    );
  });

  it('should change the algorithm', () => {
    $('#open-settings').click();
    $('#algorithm').waitForEnabled();
    $('#algorithm').selectByVisibleText('SHA-512');
    $('.save-settings').click();
    $('#domain').waitForEnabled();
    $('#domain').setValue('example.com');

    browser.waitUntil(() =>
      $('#password').getValue() == 'V{fvC^YRi('
    );
  });

});

