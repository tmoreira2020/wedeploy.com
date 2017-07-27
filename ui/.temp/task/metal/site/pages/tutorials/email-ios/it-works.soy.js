/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from it-works.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aqajz.
 * @public
 */

goog.module('aqajz.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
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

var $templateAlias1 = Soy.getTemplate('tutorial.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param3260 = function() {
    ie_open('h4');
      itext('Send an Email');
    ie_close('h4');
    ie_open('p');
      itext('Great work, your app is now live! Now let\'s send an email.');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        itext('Run the app in the simulator.');
      ie_close('li');
      ie_open('li');
        itext('Fill in the form (make sure you put your email in the "to" field).');
      ie_close('li');
      ie_open('li');
        itext('Click submit and check your email inbox because you\'ve got mail!');
      ie_close('li');
    ie_close('ol');
    ie_open('p');
      itext('Awesome! You just deployed an app and sent an email within a few minutes! We can\'t wait to see what else you create with WeDeploy!');
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
  $templateAlias1(soy.$$assignDefaults({content: param3260}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'aqajz.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class aqajz extends Component {}
Soy.register(aqajz, templates);
export { aqajz, templates };
export default templates;
/* jshint ignore:end */
