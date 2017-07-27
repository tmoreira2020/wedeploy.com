// This file was automatically generated from environment-variables-new-java-service-and-multiple-custom-domains.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AeDPI.
 */

if (typeof AeDPI == 'undefined') { var AeDPI = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
AeDPI.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><p>' + soy.$$escapeHtml(opt_data.page.description) + '</p><h4>Environment Variables</h4><p>An important piece of any kind of deployment is setting up environment variables. This can be used to protect credentials for an external database or a secret key that only a production environment should use. Now you can do this by going to the &quot;<em>Environment</em>&quot; tab on any WeDeploy service.</p><figure><img src="../images/blog/post-2--0.png" srcset="../images/blog/post-2--0.png 1x, ../images/blog/post-2--0-2x.png 2x" alt="Environnment Variables"></figure><h4>New Java Service</h4><p>As part of our mission to create a very broad platform for all developers, we\'re introducing a new Java service. If you\'re interested, check the boilerplate examples we created using <a href="https://github.com/wedeploy/boilerplate-java">Gradle</a>, <a href="https://github.com/wedeploy/boilerplate-java/tree/maven">Maven</a>, and <a href="https://github.com/wedeploy/boilerplate-java/tree/ant">Ant</a>.</p><figure><img class="original-size" src="../images/blog/post-2--1.png" srcset="../images/blog/post-2--1.png 1x, ../images/blog/post-2--1-2x.png 2x" alt="New Java Service"></figure><blockquote><p>As part of our mission to create a very broad platform for all developers, we\'re introducing a new Java service.</p></blockquote><h4>Multiple Custom Domains</h4><p>In the past, you could only set one custom domain per project. Although that was useful for many people, there are many cases where you need to configure more than one domain. Now you have the ability to do that by going to the &quot;<em>Settings</em>&quot; menu on your project.</p><figure><img src="../images/blog/post-2--2.png" srcset="../images/blog/post-2--2.png 1x, ../images/blog/post-2--2-2x.png 2x" alt="New Java Service"></figure><p>If you have any questions, feel free to <a href="https://chat.wedeploy.com/">contact us.</a></p><p>Happy coding!</p></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  AeDPI.render.soyTemplateName = 'AeDPI.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
AeDPI.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + AeDPI.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  AeDPI.soyweb.soyTemplateName = 'AeDPI.soyweb';
}
