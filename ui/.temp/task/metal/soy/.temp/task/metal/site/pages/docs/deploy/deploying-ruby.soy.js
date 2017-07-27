// This file was automatically generated from deploying-ruby.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace mPmNs.
 * @public
 */

goog.module('mPmNs.incrementaldom');

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
var $import1 = goog.require('ElectricCode.incrementaldom');
var $templateAlias2 = $import1.render;
var $import2 = goog.require('guide.incrementaldom');
var $templateAlias1 = $import2.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param1543 = function() {
    ie_open('h3');
      itext('Ruby');
    ie_close('h3');
    ie_open('h6');
      var dyn78 = opt_data.page.description;
      if (typeof dyn78 == 'function') dyn78(); else if (dyn78 != null) itext(dyn78);
    ie_close('h6');
    ie_open('article', null, null,
        'id', '1');
      ie_open('h2');
        itext('Introduction');
      ie_close('h2');
      ie_open('p');
        ie_open('a', null, null,
            'href', 'https://www.ruby-lang.org');
          itext('Ruby');
        ie_close('a');
        itext(' is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.');
      ie_close('p');
      ie_open('p');
        itext('We currently support Ruby 2.4.1.');
      ie_close('p');
    ie_close('article');
    ie_open('article', null, null,
        'id', '2');
      ie_open('h2');
        itext('Try it yourself');
      ie_close('h2');
      ie_open('p');
        itext('Want to see the process of deploying Ruby step by step?');
      ie_close('p');
      ie_open('div', null, null,
          'class', 'guide-btn-cta');
        ie_open('a', null, null,
            'class', 'btn btn-accent btn-sm',
            'href', '/tutorials/ruby',
            'target', '_blank',
            'data-senna-off', '');
          ie_void('span', null, null,
              'class', 'icon-16-external');
          itext('Try the tutorial');
        ie_close('a');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'guide-aux-cta');
        itext('or see a ');
        ie_open('a', null, null,
            'href', 'http://boilerplate-ruby.wedeploy.io',
            'target', '_blank',
            'data-senna-off', '');
          itext('live demo');
        ie_close('a');
        itext('.');
      ie_close('div');
    ie_close('article');
    ie_open('article', null, null,
        'id', '3');
      ie_open('h2');
        itext('Configuring');
      ie_close('h2');
      ie_open('aside');
        ie_open('p');
          itext('All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our ');
          ie_open('strong');
            ie_open('a', null, null,
                'href', '/docs/deploy/how-it-works.html');
              itext('How It Works Page');
            ie_close('a');
          ie_close('strong');
          itext('.');
        ie_close('p');
      ie_close('aside');
      ie_open('p');
        itext('Below is an example of a ');
        ie_open('code');
          itext('wedeploy.json');
        ie_close('code');
        itext(' for a Ruby container.');
      ie_close('p');
      $templateAlias2({code: '{\n    "id": "ruby",\n    "image": "wedeploy/ruby:beta",\n    "hooks": {\n        "build": "bundle install"\n    }\n}', mode: 'application/json'}, null, opt_ijData);
      ie_open('p');
        itext('The ');
        ie_open('code');
          itext('id');
        ie_close('code');
        itext(' for your services are uniquely determined by you.');
      ie_close('p');
    ie_close('article');
    ie_open('h2');
      itext('What\'s next?');
    ie_close('h2');
    ie_open('p');
      itext('Now you can start building your ruby based application.');
    ie_close('p');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param1543}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'mPmNs.render';
}
