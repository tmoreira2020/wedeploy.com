/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from deploy-your-app.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace hkmNe.
 * @public
 */

goog.module('hkmNe.incrementaldom');

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

var $templateAlias2 = Soy.getTemplate('ElectricCode.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('tutorial.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param3460 = function() {
    ie_open('h4');
      itext('Deploy Your App');
    ie_close('h4');
    ie_open('p');
      itext('Now the moment you have been waiting for - deployment!');
    ie_close('p');
    ie_open('h6');
      itext('Add a Git remote');
    ie_close('h6');
    ie_open('p');
      itext('Open up your terminal and go to the ');
      ie_open('code');
        itext('tutorial-java');
      ie_close('code');
      itext(' folder. Then, add a git remote by running:');
    ie_close('p');
    $templateAlias2({code: 'git remote add wedeploy http://git.wedeploy.com/<projectID>.git', mode: 'xml'}, null, opt_ijData);
    ie_open('h6');
      itext('Push first commit');
    ie_close('h6');
    ie_open('p');
      itext('The remote is now set up and you are ready to make your first commit!');
    ie_close('p');
    ie_open('ol');
      ie_open('li');
        ie_open('code');
          itext('git add .');
        ie_close('code');
      ie_close('li');
      ie_open('li');
        ie_open('code');
          itext('git commit -m "Awesome commit"');
        ie_close('code');
      ie_close('li');
      ie_open('li');
        ie_open('code');
          itext('git push wedeploy master');
        ie_close('code');
      ie_close('li');
    ie_close('ol');
    ie_open('p');
      itext('If it is your first time pushing to WeDeploy\'s git, you will need to enter the email and password for your WeDeploy account.');
    ie_close('p');
    ie_open('h6');
      itext('See it live');
    ie_close('h6');
    ie_open('p');
      itext('Once you have pushed, WeDeploy will immediately start deploying your project.');
    ie_close('p');
    ie_open('p');
      itext('Give it a few moments and then go to ');
      ie_open('code');
        itext('java-<projectID>.wedeploy.sh');
      ie_close('code');
      itext(' to see what you deployed! Pretty cool, right?');
    ie_close('p');
    ie_open('figure');
      ie_open('img', null, null,
          'src', '/images/tutorials/it-works.png',
          'alt', 'It works!');
      ie_close('img');
    ie_close('figure');
    ie_open('aside');
      ie_open('h6');
        ie_void('span', null, null,
            'class', 'icon-16-star');
        itext(' Pro Tip');
      ie_close('h6');
      ie_open('p');
        itext('You can always check the status of your deployment by going to the ');
        ie_open('em');
          itext('overview');
        ie_close('em');
        itext(' section of your project\'s ');
        ie_open('a', null, null,
            'href', 'https://console.wedeploy.com',
            'target', '_blank');
          itext('console');
        ie_close('a');
        itext('.');
      ie_close('p');
    ie_close('aside');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param3460}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'hkmNe.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class hkmNe extends Component {}
Soy.register(hkmNe, templates);
export { hkmNe, templates };
export default templates;
/* jshint ignore:end */
