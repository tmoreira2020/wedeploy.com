// This file was automatically generated from you-made-it.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RyoOp.
 * @public
 */

goog.module('RyoOp.incrementaldom');

/** @suppress {extraRequire} */
goog.require('soy');
/** @suppress {extraRequire} */
goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;
var $import1 = goog.require('tutorial.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param2133 = function() {
    ie_open('div', null, null,
        'class', 'notfound');
      ie_open('div', null, null,
          'class', 'notfound-icon');
        ie_void('span', null, null,
            'class', 'icon-16-thumb-up');
      ie_close('div');
      ie_open('p', null, null,
          'class', 'notfound-text');
        itext('You made it!');
      ie_close('p');
      ie_open('p');
        itext('Now discover what else you can do with WeDeploy.');
      ie_close('p');
      ie_open('ul', null, null,
          'class', 'checklist');
        ie_open('li');
          ie_open('a', null, null,
              'href', '/tutorials/email-android/get-started.html');
            itext('Email on Android Tutorial');
          ie_close('a');
        ie_close('li');
        ie_open('li');
          ie_open('a', null, null,
              'href', '/tutorials/data-android/get-started.html');
            itext('Data on Android Tutorial');
          ie_close('a');
        ie_close('li');
      ie_close('ul');
    ie_close('div');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param2133}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'RyoOp.render';
}
