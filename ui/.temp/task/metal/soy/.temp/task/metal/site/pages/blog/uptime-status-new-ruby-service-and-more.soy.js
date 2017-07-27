// This file was automatically generated from uptime-status-new-ruby-service-and-more.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ALvBT.
 * @public
 */

goog.module('ALvBT.incrementaldom');

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
var $import1 = goog.require('blog.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param624 = function() {
    ie_open('article');
      ie_open('p');
        var dyn40 = opt_data.page.description;
        if (typeof dyn40 == 'function') dyn40(); else if (dyn40 != null) itext(dyn40);
      ie_close('p');
      ie_open('blockquote');
        ie_open('p');
          itext('You\'re shaping the future of this product.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('In the last few weeks we\'ve been working day and night to make WeDeploy more stable. Almost two hundred projects have been created since we first launched and dozens of bugs have been fixed.');
      ie_close('p');
      ie_open('p');
        itext('Today, we would like to show you some of the things we\'re working on.');
      ie_close('p');
      ie_open('h4');
        itext('Uptime Status');
      ie_close('h4');
      ie_open('p');
        itext('Even though this is an alpha version and problems are somewhat expected, we recognize the importance of being transparent about outages. That\'s why we would like to share with you a new page where you can check ');
        ie_open('a', null, null,
            'href', 'https://status.wedeploy.com/');
          itext('WeDeploy\'s uptime status');
        ie_close('a');
        itext('.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'src', '../images/blog/post-1--0.png',
            'alt', 'Uptime Status');
        ie_close('img');
      ie_close('figure');
      ie_open('h4');
        itext('Ruby Service');
      ie_close('h4');
      ie_open('p');
        itext('Our mission is to create a platform for all kinds of developers. With that in mind, we\'re introducing a new Ruby service. You can get more information by ');
        ie_open('a', null, null,
            'href', '/docs/other/ruby.html');
          itext('reading the docs');
        ie_close('a');
        itext(' or checking this ');
        ie_open('a', null, null,
            'href', 'https://github.com/wedeploy/boilerplate-ruby');
          itext('boilerplate');
        ie_close('a');
        itext('. Go to ');
        ie_open('a', null, null,
            'href', 'https://console.wedeploy.com');
          itext('Console');
        ie_close('a');
        itext(' to start using Ruby Service.');
      ie_close('p');
      ie_open('figure');
        ie_open('img', null, null,
            'class', 'original-size',
            'src', '../images/blog/post-1--1.png',
            'srcset', '../images/blog/post-1--1.png 1x, ../images/blog/post-1--1-2x.png 2x',
            'alt', 'Ruby Service');
        ie_close('img');
      ie_close('figure');
      ie_open('blockquote');
        ie_open('p');
          itext('Our mission is to create a platform for all kinds of developers.');
        ie_close('p');
      ie_close('blockquote');
      ie_open('p');
        itext('If you have any questions, feel free to ');
        ie_open('a', null, null,
            'href', 'https://chat.wedeploy.com/');
          itext('contact us');
        ie_close('a');
        itext('.');
      ie_close('p');
    ie_close('article');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param624}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ALvBT.render';
}
