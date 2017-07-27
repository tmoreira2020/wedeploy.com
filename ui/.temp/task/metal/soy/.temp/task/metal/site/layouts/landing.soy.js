// This file was automatically generated from landing.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace landing.
 * @public
 */

goog.module('landing.incrementaldom');

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
var $import1 = goog.require('Topbar.incrementaldom');
var $templateAlias1 = $import1.render;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  ie_open('div', null, null,
      'class', ($$temp = opt_data.elementClasses) == null ? 'main' : $$temp);
    ie_open('main', null, null,
        'class', 'content');
      $topbar(opt_data, null, opt_ijData);
      var dyn17 = opt_data.content;
      if (typeof dyn17 == 'function') dyn17(); else if (dyn17 != null) itext(dyn17);
      $footer(opt_data, null, opt_ijData);
      $modal(opt_data, null, opt_ijData);
    ie_close('main');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'landing.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $topbar(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'id', 'topbar');
    ie_open('div', null, null,
        'class', 'col-xs-16 col-lg-14 col-lg-offset-1');
      ie_open('div', null, null,
          'class', 'row');
        ie_open('nav', null, null,
            'class', 'topbar topbar-large topbar-light');
          $topbarLeftContent(opt_data, null, opt_ijData);
          $topbarRightContent(opt_data, null, opt_ijData);
        ie_close('nav');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.topbar = $topbar;
if (goog.DEBUG) {
  $topbar.soyTemplateName = 'landing.topbar';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $topbarLeftContent(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'topbar-logo');
    ie_open('a', null, null,
        'class', 'topbar-logo-link',
        'href', '/');
      ie_open('span', null, null,
          'class', 'wedeploy-logo');
        ie_open('span', null, null,
            'class', 'we-circle');
          ie_open('span', null, null,
              'class', 'we');
            itext('We');
          ie_close('span');
        ie_close('span');
        ie_open('span', null, null,
            'class', 'deploy');
          itext('Deploy\u2122');
        ie_close('span');
        ie_open('span', null, null,
            'class', 'liferay');
          itext('by Liferay');
        ie_close('span');
        ie_open('span', null, null,
            'class', 'alpha-container');
          ie_void('span', null, null,
              'class', 'arrow-up');
          ie_open('span', null, null,
              'class', 'alpha');
            itext('alpha');
          ie_close('span');
        ie_close('span');
      ie_close('span');
    ie_close('a');
  ie_close('div');
}
exports.topbarLeftContent = $topbarLeftContent;
if (goog.DEBUG) {
  $topbarLeftContent.soyTemplateName = 'landing.topbarLeftContent';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $topbarRightContent(opt_data, opt_ignored, opt_ijData) {
  $templateAlias1({section: opt_data.site.index}, null, opt_ijData);
}
exports.topbarRightContent = $topbarRightContent;
if (goog.DEBUG) {
  $topbarRightContent.soyTemplateName = 'landing.topbarRightContent';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $footer(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', 'footer');
    ie_open('div', null, null,
        'class', 'container-wedeploy flex-left-center');
      ie_open('div', null, null,
          'class', 'col-xs-16 col-sm-8 info-container col-md-10 col-lg-10 col-lg-offset-1');
        ie_open('div', null, null,
            'class', 'footer__logo info');
          ie_open('span');
            itext('WeDeploy\u2122');
          ie_close('span');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'footer__copy info');
          ie_open('span');
            itext('Copyright \u00A9 2017');
            ie_open('br');
            ie_close('br');
            itext('Liferay, Inc.');
          ie_close('span');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'footer__link info');
          ie_open('a', null, null,
              'href', 'http://status.wedeploy.com/',
              'target', '_blank');
            ie_open('span');
              itext('Uptime status');
            ie_close('span');
          ie_close('a');
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'footer__media-kit col-xs-16 col-sm-8 col-md-6 col-lg-4');
        ie_open('a', null, null,
            'data-senna-off', '',
            'href', 'images/WeDeploy-Media-Kit.zip',
            'class', 'btn btn-inverse-accent btn-s',
            'download', '');
          itext('Media Kit');
        ie_close('a');
        ie_open('a', null, null,
            'class', 'ic-github',
            'href', 'http://github.com/wedeploy',
            'target', '_blank');
          ie_void('span', null, null,
              'class', 'icon-16-github');
        ie_close('a');
        ie_open('a', null, null,
            'class', 'ic-twitter',
            'href', 'http://twitter.com/wedeploy',
            'target', '_blank');
          ie_void('span', null, null,
              'class', 'icon-16-twitter');
        ie_close('a');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.footer = $footer;
if (goog.DEBUG) {
  $footer.soyTemplateName = 'landing.footer';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $modal(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'modal');
    ie_open('div', null, null,
        'class', 'modal-container');
      ie_open('a', null, null,
          'class', 'modal__close flex-center-center',
          'href', 'javascript:void(0);');
        ie_void('span', null, null,
            'class', 'close__icon icon-16-cancel');
      ie_close('a');
      ie_open('div', null, null,
          'id', 'modal__form-container');
        ie_open('div', null, null,
            'class', 'form flex-center-top');
          ie_open('div', null, null,
              'class', 'logo flex-center-center');
            ie_open('span');
              itext('We');
            ie_close('span');
          ie_close('div');
          ie_open('h2');
            itext('Request an Invite for WeDeploy\u2122');
          ie_close('h2');
          ie_open('p');
            itext('We can\'t wait to see what you\'re going to build.');
          ie_close('p');
          ie_open('form', null, null,
              'id', 'form-modal',
              'class', 'flex-center-top column form-signup');
            ie_open('div', null, null,
                'class', 'form-group');
              ie_open('label');
                itext('Email');
              ie_close('label');
              ie_open('input', null, null,
                  'type', 'text',
                  'class', 'form-control',
                  'name', 'email',
                  'placeholder', 'Enter your email address');
              ie_close('input');
            ie_close('div');
            ie_void('p', null, null,
                'id', 'form-modal__validation',
                'class', 'form-validation');
            ie_open('button', null, null,
                'id', 'form-modal__submit',
                'class', 'btn btn-accent');
              ie_open('span');
                itext('Get Started \u2013 It\u2019s FREE');
              ie_close('span');
            ie_close('button');
            ie_open('div', null, null,
                'class', 'small-container flex-center-top');
              ie_open('small');
                itext('By entering your email you agree to receive information about WeDeploy\u2122.');
              ie_close('small');
            ie_close('div');
          ie_close('form');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'copy');
          ie_open('p');
            itext('Copyright \u00A9 2017 Liferay, Inc.');
          ie_close('p');
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'id', 'modal__response-container',
          'class', 'flex-center-top');
        ie_open('div', null, null,
            'class', 'logo flex-center-center');
          ie_open('span');
            itext('We');
          ie_close('span');
        ie_close('div');
        ie_open('h2');
          itext('Thanks for requesting an invite!');
        ie_close('h2');
        ie_open('p');
          itext('We\'ll drop you an email when WeDeploy\u2122 is ready. Stay tuned.');
        ie_close('p');
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.modal = $modal;
if (goog.DEBUG) {
  $modal.soyTemplateName = 'landing.modal';
}
