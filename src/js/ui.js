import _ from 'underscore';
import { Zepto as $ } from 'zepto-browserify';

// Populate values for index/length select boxes
let i;
for (i=4; i<=100; i+=(i<30?1:(i<50?5:10)))
  $('#length,#default-length').append('<option value="' + i +'">' + i + '</option>');

for (i=0; i<=50; i++)
  $('#index,#default-index').append('<option value="' + i + '">' + i + '</option>');

export default class UI {
  static settings = {};

  static _settings = {
    'default-username': '',
    'shared-secret': '',
    'save-secret': 'no',
    'algorithm': 'SHA256',
    'default-length': 10,
    'default-index': 0,
  };

  static save() {
    let omit = UI.settings['save-secret'] == 'no' ? 'shared-secret' : '';
    let settings = _.omit(UI.settings, omit);

    localStorage.telepathyWeb = JSON.stringify({
      settings: settings
    });

    UI._settings = UI.settings;
  }

  static load() {
    let data = JSON.parse(localStorage.telepathyWeb || '{}');

    if (!data) return;

    _.each(_.keys(UI._settings), function(key) {
      if (data.settings && _.has(data.settings, key))
        UI._settings[key] = data.settings[key];

      UI.settings[key] = UI._settings[key];

      let $option = $('#settings [name=' + key + ']');

      switch ($option.prop('type')) {
        case 'radio':
          $option.each(function() {
            let $this = $(this);
            $this.prop('checked', $this.val() == UI.settings[key]);
          });
          break;

        default:
          $option.val(UI.settings[key]);
          break;
      }
    });

    $('#index').val(UI.settings['default-index']);
    $('#length').val(UI.settings['default-length']);
  }
}

UI.load();
