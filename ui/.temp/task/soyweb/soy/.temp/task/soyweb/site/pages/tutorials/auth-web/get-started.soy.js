// This file was automatically generated from get-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace LvIRF.
 */

if (typeof LvIRF == 'undefined') { var LvIRF = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
LvIRF.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Get Started</h4><p>Authenticating users with WeDeploy is super easy. This tutorial will walk you through how to create, sign in, and sign out users in your app using the API Client and how to deploy your project with one terminal command.</p><h6>What you\'ll need</h6><ul class="checklist"><li><a href="https://console.wedeploy.com/signup" target="_blank">A WeDeploy account</a></li><li>A code editor</li></ul><h6>What you\'ll do</h6><ul class="checklist"><li>Clone a sample Git repository</li><li>Add configuration files</li><li>Include the API Client</li><li>Add the API methods</li><li>Deploy the project</li><li>Start authenticate users</li></ul><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  LvIRF.render.soyTemplateName = 'LvIRF.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
LvIRF.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + LvIRF.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  LvIRF.soyweb.soyTemplateName = 'LvIRF.soyweb';
}
