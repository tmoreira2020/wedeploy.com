// This file was automatically generated from deploying-liferay.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace fvUtW.
 */

if (typeof fvUtW == 'undefined') { var fvUtW = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
fvUtW.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>Liferay</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Introduction</h2><p><a href="https://www.liferay.com">Liferay</a> is a portal, web content management and collaboration software package. It includes social collaboration features such as a doc library, off-line document sync, internal messaging, online presence, and more.</p><p>We currently support Liferay X.</p></article><article id="2"><h2>Try it yourself</h2><p>Want to see the process of deploying Liferay step by step?</p><div class="guide-btn-cta"><a class="btn btn-accent btn-sm" href="/tutorials/liferay" target="_blank" data-senna-off><span class="icon-16-external"></span>Try the tutorial</a></div><div class="guide-aux-cta">or see a <a href="http://boilerplate-liferay.wedeploy.io" target="_blank" data-senna-off>live demo</a>.</div></article><article id="3"><h2>Configuring</h2><aside><p>All WeDeploy projects use a consistant file structure and configuration files to deploy apps with the CLI or GitHub. Learn more on our <strong><a href="/docs/deploy/how-it-works.html">How It Works Page</a></strong>.</p></aside><p>Below is an example of a <code>wedeploy.json</code> for a Liferay container.</p>' + ElectricCode.render({code: soydata.$$markUnsanitizedTextForInternalBlocks('{\n    "id": "liferay",\n    "image": "wedeploy/liferay:beta"\n}'), mode: 'application/json'}, null, opt_ijData) + '<p>The <code>id</code> for your services are uniquely determined by you.</p></article><h2>What\'s next?</h2><p>Now you can start building your liferay based application.</p><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  fvUtW.render.soyTemplateName = 'fvUtW.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
fvUtW.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + fvUtW.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  fvUtW.soyweb.soyTemplateName = 'fvUtW.soyweb';
}
