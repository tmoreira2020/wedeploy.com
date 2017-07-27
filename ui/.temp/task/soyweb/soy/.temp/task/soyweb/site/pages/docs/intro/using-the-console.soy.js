// This file was automatically generated from using-the-console.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace PlUMi.
 */

if (typeof PlUMi == 'undefined') { var PlUMi = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
PlUMi.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Introduction</h2><p>The WeDeploy Console is a home for you to create, install, manage, configure, view logs, and check the status of your projects.</p><p>To get started, you first need to create a WeDeploy account by signing up through the <a href="https://console.wedeploy.com/signup">Console Signup Page</a>.</p><p>When you login to the Console, you will see a list of your WeDeploy projects. If you don\'t have any yet, don\'t worry, we will go over how to change that below.</p><p><img src="/images/docs/intro/using-the-dashboard--dashboard.png" alt="Console"></p></article><article id="2"><h2>Create a new project</h2><p>To start, you must create new project by going to the button in the top right corner named <em>&quot;New Project&quot;</em>. Then you can type an ID for your project. Project names are permanent and cannot be changed later.</p><p><img src="/images/docs/intro/using-the-dashboard--new-project.png" alt="New Project"></p><p>Once your project is created, it will show up on your Console main page. To see the details of your project, click on the name of the project.</p><p><img src="/images/docs/intro/using-the-dashboard--project-container-list.png" alt="Project Container List"></p></article><article id="3"><h2>Install a service</h2><p>By clicking on a project, you can start monitoring and configuring your project and its services.</p><p>In each project, you can have up to five services installed. To install a new service, click on the <em>&quot;Install Service&quot;</em> button in the top right corner of your project\'s Console screen.</p><p><img src="/images/docs/intro/using-the-dashboard--install-container.png" alt="Install Container"></p><h5>Select a service type</h5><p>You must choose the type of service you want to install.</p><p><img src="/images/docs/intro/using-the-dashboard--select-a-container-type.png" alt="Select a Container Type"></p><h5>Choose an ID</h5><p>Similar to project ID\'s, service ID\'s are permanent and cannot be changed later. When you have chosen an ID, click <em>&quot;Install Service&quot;</em>.</p><p><img src="/images/docs/intro/using-the-dashboard--install-container-form.png" alt="Install Container Form"></p><h5>Install service</h5><p>Now WeDeploy will start building and deploying your service automatically.</p><p><img src="/images/docs/intro/using-the-dashboard--container-up-and-running.png" alt="Container Up and Running"></p></article><article id="4"><h2>View your service live</h2><p>Once your service is installed, we give you a specific URL for that service that is made up with the service and project ID\'s (<em>website-strawberry.wedeploy.io</em>). You can always find this URL by clicking on the service in the overview section.</p><p><img src="/images/docs/intro/using-the-dashboard--url-generated.png" alt="URL Generated"></p></article><h2>What\'s next?</h2><ul><li>Learn more about using <a href="/docs/intro/using-the-command-line.html">the WeDeploy CLI</a>.</li></ul><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  PlUMi.render.soyTemplateName = 'PlUMi.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
PlUMi.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + PlUMi.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  PlUMi.soyweb.soyTemplateName = 'PlUMi.soyweb';
}
