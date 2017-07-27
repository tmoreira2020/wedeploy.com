// This file was automatically generated from feature-overview.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace OyLHN.
 */

if (typeof OyLHN == 'undefined') { var OyLHN = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
OyLHN.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(guide.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('<h3>' + soy.$$escapeHtml(opt_data.page.title) + '</h3><h6>' + soy.$$escapeHtml(opt_data.page.description) + '</h6><article id="1"><h2>Zero downtime upgrades</h2><p>WeDeploy provides automation for updating services and the systems with zero downtime.</p><p>WeDeploy services can all be updated with rolling, blue-green, or canary deployment patterns. If the update fails, roll it back with a single click. These powerful tools are critical for minimizing downtime and user interruption.</p></article><article id="2"><h2>Service discovery and load balancing</h2><p>WeDeploy includes several options for automating service discovery and load balancing.</p><p>Distributed services create distributed problems, but you don\u2019t have to solve them all yourself. WeDeploy includes automatic DNS endpoint generation, an API for service lookup, transport layer (L4) virtual IP proxying for high speed internal communication, and application layer (L7) load balancing for external-facing services.</p></article><article id="3"><h2>Service visibility</h2><p>WeDeploy provides an option for you to specify whether your service is going to be public or private for public access.</p></article><article id="4"><h2>High availability</h2><p>WeDeploy is highly available and makes it easy for your services to be highly available too.</p><p>Mission-critical services require health monitoring, self-healing, and fault tolerance both for themselves and the platform and infrastructure they run on. WeDeploy gives you multiple layers of protection.</p><p>To achieve self-healing, WeDeploy services are monitored and restarted when they fail. Even legacy services that don\u2019t support distribution or replication can be automatically restarted to maximize uptime and reduce service interruption.</p></article><article id="5"><h2>Elastic scalability</h2><p>WeDeploy gives you the power to easily scale your services up and down with the turn of a dial.</p><p>Horizontal scaling is trivial in Docker Swarm, as long as your service supports it. You can change the number of service instances at any time. WeDeploy even lets you autoscale the number of instances based on session count, using the WeDeploy Load Balancer.</p></article><article id="6"><h2>User interfaces</h2><p>WeDeploy offers two interfaces to make it easy to monitor and manage the projects and its services.</p><p>The <strong><a href="/docs/intro/using-the-console.html">WeDeploy Console</a></strong> lets you monitor resource allocation, running services health, and more with intuitive browser-based navigation, real-time graphs, and interactive debugging tools.</p><p>The <strong><a href="/docs/intro/using-the-command-line.html">WeDeploy Command-line Interface (CLI)</a></strong> provides you control from the comfort of a terminal. It\u2019s powerful, yet easily scriptable, with handy plugins to interact with installed projects.</p></article><h2>What\'s next?</h2><ul><li>Learn more about <a href="/docs/intro/how-it-works.html">how it works</a>.</li></ul><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.page.title) + '"><input type="hidden" value="' + soy.$$escapeHtmlAttribute(opt_data.site.title) + '">')}), null, opt_ijData));
};
if (goog.DEBUG) {
  OyLHN.render.soyTemplateName = 'OyLHN.render';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
OyLHN.soyweb = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(base.render(soy.$$augmentMap(opt_data, {content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + OyLHN.render(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  OyLHN.soyweb.soyTemplateName = 'OyLHN.soyweb';
}
