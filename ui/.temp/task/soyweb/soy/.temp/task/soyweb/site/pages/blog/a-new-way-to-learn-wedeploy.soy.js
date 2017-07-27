// This file was automatically generated from a-new-way-to-learn-wedeploy.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace QWodp.
 */

if (typeof QWodp == 'undefined') { var QWodp = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
QWodp.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(blog.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<article><p>' + soy.$$escapeHtml(opt_data.page.description) + '</p><p>Since then, we have been exploring new ways to take the WeDeploy learning experience to the next level, which is why we are excited to announce a brand new sibling in the documentation family: <strong>Tutorials</strong>.</p><figure><img src="../images/blog/post-8--0.png" alt="Tutorial preview"></figure><h4>Which topics are covered?</h4><ul><li><strong><a target="_blank" href="/tutorials/hosting/get-started.html">Hosting</a></strong>: Deploy static files like HTML, CSS, and JS.</li><li><strong><a target="_blank" href="/tutorials/data-web/get-started.html">Data</a></strong>: Deploy a to-do list app using our Data Service and JS.</li><li><strong><a target="_blank" href="/tutorials/auth-web/get-started.html">Auth</a></strong>: Deploy an authentication app using our Auth Service and JS.</li><li><strong><a target="_blank" href="/tutorials/email-web/get-started.html">Email</a></strong>: Deploy an email-sending app using our Email Service and JS.</li><li><strong><a target="_blank" href="/tutorials/java/get-started.html">Java</a></strong>: Deploy an app using Java and Spring Boot.</li><li><strong><a target="_blank" href="/tutorials/ruby/get-started.html">Ruby</a></strong>: Deploy an app using Ruby and Sinatra.</li><li><strong><a target="_blank" href="/tutorials/nodejs/get-started.html">Node.js</a></strong>: Deploy an app using Node.js and Express.</li><li><strong><a target="_blank" href="/tutorials/liferay/get-started.html">Liferay</a></strong>: Deploy a Liferay Portal instance.</li></ul><h4>Why tutorials?</h4><p>Everyone learns differently. Some simply want to grab snippets of code and implement them in their projects. Others want to see a walkthrough of how to use the code in a real-life situation.</p><blockquote><p>There is nothing like seeing the code in action, and that is exactly what tutorials provide!</p></blockquote><p>We felt like the first group was being well taken care of by our <a href="/docs/">extensive documentation</a>, but there was nothing for the second group. After brainstorming different ways to provide this kind of step-by-step flow for those users, we landed on the concept of a tutorial.</p><figure><img src="../images/blog/post-8--1.png" alt="See the code"></figure><h4>What were our goals?</h4><p>We had three goals for our tutorials:</p><ol><li><strong>Simple UX</strong>: This started with the design and bled all the way through to the words and phrasings we used. It had to be something that reflected one of the most important parts of the WeDeploy product itself: ease of use.</li><li><strong>Consistent Flow</strong>: Most users come with a goal in mind of what they want to implement and what stack they want to implement it with. But what about after they build that first app? We wanted to create a consistent experience and content flow across all the tutorials so that users could easily learn about other services that were not already familiar to them.</li><li><strong>Educational Content</strong>: The end goal of each tutorial is deploying and interacting with a fully functional app, but we didn\'t want users to just get to the end, we wanted them to learn something. We spent hours, even days, coming up with the balance between the difficulty and educational takeaway of the tutorial, and we are very excited with the results.</li></ol><h4>What\'s in it for you?</h4><p>Like we said above, each tutorial takes you all the way from clone to deploy in a matter of minutes. This not only gives you a inside look into specific details of the service you are interested in, but it also teaches you about other things like source code file structure, API methods, configuration files, deployment flow using git, and so much more.</p><hr><p>So what are you waiting for? Unlock the power of WeDeploy by starting one of these tutorials today!</p><p>Don\'t forget to let us know how it goes! You can connect with us on <a href="https://twitter.com/wedeploy">Twitter</a> or join our community on <a href="https://chat.wedeploy.com">Slack</a>.</p></article><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  QWodp.render.soyTemplateName = 'QWodp.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
QWodp.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + QWodp.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  QWodp.soyweb.soyTemplateName = 'QWodp.soyweb';
}
