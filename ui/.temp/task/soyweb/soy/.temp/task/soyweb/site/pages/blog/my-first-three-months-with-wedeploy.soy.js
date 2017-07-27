// This file was automatically generated from my-first-three-months-with-wedeploy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JwhxG.
 */

if (typeof JwhxG == 'undefined') { var JwhxG = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
JwhxG.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><p>' + soy.$$escapeHtml(opt_data.page.description) + '</p><figure><img src="../images/blog/post-4--0.png" alt="Jonni Lundy Working"></figure><p>I have no coding background. Before my internship, I had never opened DevTools in my life and I thought that Java and JavaScript were the same thing.</p><p>Needless to say, I was a little intimidated of coming in as the new guy, but once I started using WeDeploy and working with the team, those fears drifted away like a bunch of balloons strapped to a house (\'UP\' anyone?).</p><p>I still remember the first time I deployed. I had just finished making my very first website, and Zeno said I should try deploying it by myself. I honestly didn\'t know where to start, so I went to the docs, read through some guides, and gave it a shot.</p><blockquote><p>Within 15 minutes, it was live!</p></blockquote><p>It was one of the best feelings I\'ve had during this internship.</p><p>Knowing that I, the new guy who didn\'t know what an API was or how to run \'npm install\', could deploy my own website faster than it takes me to run to Starbucks and get my triple ristretto hazelnut latte (with almond milk please).</p><figure><img src="../images/blog/post-4--1.png" alt="Jonni Lundy Collaborating"></figure><p>By far my favorite thing about being on the WeDeploy team is being able to get behind a product that is so powerful and yet incredibly intuitive to use.</p><p>If I can deploy, then I\'m sure you can! So what are you waiting for?!</p></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  JwhxG.render.soyTemplateName = 'JwhxG.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
JwhxG.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + JwhxG.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  JwhxG.soyweb.soyTemplateName = 'JwhxG.soyweb';
}
