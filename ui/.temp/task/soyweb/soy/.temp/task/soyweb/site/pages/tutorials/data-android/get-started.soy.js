// This file was automatically generated from get-started.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace IexqZ.
 */

if (typeof IexqZ == 'undefined') { var IexqZ = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
IexqZ.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(tutorial.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h4>Get Started</h4><p>Saving and fetching data with WeDeploy is super easy. This tutorial will walk you through how to use data in your app using the API Client and how to deploy your project with one terminal command.</p><h6>What you\'ll need</h6><ul class="checklist"><li><a href="https://console.wedeploy.com/signup" target="_blank">A WeDeploy account</a></li><li><a href="https://developer.android.com/studio/index.html" target="_blank">Android Studio</a></li></ul><h6>What you\'ll do</h6><ul class="checklist"><li>Clone a sample Git repository</li><li>Add configuration files</li><li>Include the API Client</li><li>Deploy the project</li><li>Add the API methods</li><li>Run the App</li><li>Start saving and fetching data</li></ul><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  IexqZ.render.soyTemplateName = 'IexqZ.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
IexqZ.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + IexqZ.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  IexqZ.soyweb.soyTemplateName = 'IexqZ.soyweb';
}
