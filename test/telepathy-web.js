'use strict';

require('should');

describe('index.html', () => {
  beforeEach(() => {
    browser.url('/');

    browser.localStorage('DELETE');

    $('#default-username').setValue('test');
    $('#shared-secret').setValue('test');
    $('.save-settings').click();

    $('#domain').waitForEnabled();
  });

  it('should generate a password', () => {
    $('#domain').setValue('example.com');

    $('#password').waitForValue();
    $('#password').getValue().should.equal('z<u9N_[c"R');
  });

  it('should generate a password at a given index', () => {
    $('#index').selectByVisibleText('1');
    $('#domain').setValue('example.com');

    $('#password').waitForValue();
    $('#password').getValue().should.equal('g:3WGYj0}~');
  });

  it('should generate a password of a given length', () => {
    $('#length').selectByVisibleText('8');
    $('#domain').setValue('example.com');

    $('#password').waitForValue();
    $('#password').getValue().should.equal('u9N_[c"R');
  });
});
