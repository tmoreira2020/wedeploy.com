/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace jTYeL.
 * @public
 */

goog.module('jTYeL.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('termsPage.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var param662 = function() {
    ie_open('article');
      ie_open('h3');
        var dyn43 = opt_data.page.description;
        if (typeof dyn43 == 'function') dyn43(); else if (dyn43 != null) itext(dyn43);
      ie_close('h3');
      ie_open('p');
        itext('PLEASE READ THIS AGREEMENT CAREFULLY BEFORE PURCHASING AND/OR USING WEDEPLOY. BY USING WEDEPLOY, END USER SIGNIFIES ITS ASSENT TO AND ACCEPTANCE OF THIS AGREEMENT AND ACKNOWLEDGES IT HAS READ AND UNDERSTANDS THIS AGREEMENT. AN INDIVIDUAL ACTING ON BEHALF OF AN ENTITY REPRESENTS THAT HE OR SHE HAS THE AUTHORITY TO ENTER INTO THIS AGREEMENT ON BEHALF OF THAT ENTITY. IF END USER DOES NOT ACCEPT THE TERMS OF THIS AGREEMENT, THEN IT MUST NOT USE WEDEPLOY.');
      ie_close('p');
      ie_open('p');
        itext('This Liferay WeDeploy Alpha Services Agreement, including all referenced appendices and documents located at URLs (the ');
        ie_open('strong');
          itext('"Agreement"');
        ie_close('strong');
        itext('), is between Liferay, Inc. (');
        ie_open('strong');
          itext('"Liferay"');
        ie_close('strong');
        itext(') with a principal place of business at 1400 Montefino Ave, Diamond Bar, CA 91765 and the user of WeDeploy (');
        ie_open('strong');
          itext('"WeDeploy"');
        ie_close('strong');
        itext(') who accepts the terms of this Agreement (');
        ie_open('strong');
          itext('"You"');
        ie_close('strong');
        itext(' or ');
        ie_open('strong');
          itext('"End User"');
        ie_close('strong');
        itext('). The effective date of this Agreement is the earlier of the date that End User accepts this Agreement or the date that End User uses WeDeploy (');
        ie_open('strong');
          itext('"Effective Date"');
        ie_close('strong');
        itext(').');
      ie_close('p');
      ie_open('h5');
        itext('1. Definitions');
      ie_close('h5');
      ie_open('p');
        ie_open('strong');
          itext('"Account"');
        ie_close('strong');
        itext(' means the individual account each End User must create and use to access WeDeploy.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('"Acceptable Use Policy"');
        ie_close('strong');
        itext(' means the WeDeploy Acceptable Use Policy set forth in Appendix A, attached to this Agreement.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('"Affiliate"');
        ie_close('strong');
        itext(' means in the case of a company, an entity that owns or controls, is owned or controlled by, or is under common control or ownership with a party, where \u2018control\u2019 is the possession, direct or indirect, of the power to direct or cause the direction of the management and policies of an entity, whether though ownership of voting shares, by contract or otherwise.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('"Application(s)"');
        ie_close('strong');
        itext(' means the web application(s) that an End User creates and makes available through the use of WeDeploy.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('"Alpha Term"');
        ie_close('strong');
        itext(' means the period of time Liferay makes the "alpha" version of WeDeploy available to the general public.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('"Content"');
        ie_close('strong');
        itext(' means any content or data whether developed in connection with WeDeploy or otherwise, software code, documentation, materials, information, text files, images and/or trademarks associated with Your Account, Application or any other use of WeDeploy and not provided by Liferay.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('"Liferay Software and/or Services"');
        ie_close('strong');
        itext(' means the software and/or services made available through WeDeploy for End User to build an Application that is owned by, maintained by, or is a community project sponsored by Liferay.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('"Privacy Policy"');
        ie_close('strong');
        itext(' means Liferay\u2019s privacy policy set forth at https://www.liferay.com/privacy-policy.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('"Service Level"');
        ie_close('strong');
        itext(' means the resources allotted per each End User Account within the WeDeploy web service.');
      ie_close('p');
      ie_open('p');
        ie_open('strong');
          itext('"Third Party Software and/or Services"');
        ie_close('strong');
        itext(' means the software and/or services made available through WeDeploy for End User to build an Application that is not owned or maintained by Liferay.');
      ie_close('p');
      ie_open('h5');
        itext('2. Accounts');
      ie_close('h5');
      ie_open('p');
        itext('An End User is required to create and maintain an Account to access and use Liferay WeDeploy to create Applications by providing a valid email address and creating a password. End Users may not create multiple Accounts to increase the Service Level provided for each End User. Each End User remains fully responsible for any activity through an End User\u2019s Account.');
      ie_close('p');
      ie_open('h5');
        itext('3. Use');
      ie_close('h5');
      ie_open('p');
        itext('Liferay grants End User a non-exclusive, non-assignable, worldwide right to access and use WeDeploy for the Alpha Term solely for the Customer\'s evaluation and testing of WeDeploy and subject to the terms herein. Each End User is responsible for determining the suitability of WeDeploy for each End User\u2019s individual use, including with respect to any laws and/or regulations relating to data protection or privacy. After the Alpha Term, WeDeploy may be made available under a separate agreement for use other than solely for evaluation and subject to terms that vary from this Agreement. You understand that Lifeary is not obligated to provide You access to WeDeploy, your Application or your Content after expiration of the Alpha Term. You are responsible for backing up your Application, Content or other data. Liferay\u2019s provision of the WeDeploy under this Agreement does not require Liferay to meet any service level agreements, promises, or uptimes. Liferay retains all right, title, and interest in WeDeploy.');
      ie_close('p');
      ie_open('h5');
        itext('4. Content');
      ie_close('h5');
      ie_open('p');
        itext('Each End User is responsible for the Content made available through use of WeDeploy, including but not limited to the Content\u2019s compliance with law, the Content\u2019s compliance with the Acceptable Use Policy, the right to use such Content, and administering take down notices related to the Content. Liferay however reserves the right to suspend or terminate an End User\u2019s use of or access to WeDeploy immediately and without liability to a End User if any Content breaks any applicable law, requires additional consent or permission a End User has not obtained, or does not comply with the Acceptable Use Policy. An End User may be required upon a reasonable request by Liferay to provide Content or other information as may be reasonably necessary to ensure a End User\u2019s compliance with the Acceptable Use Policy. End Users are prohibited from using WeDeploy to store, create, or deploy Content that is regulated under the International Traffic in Arms Regulations (ITAR).');
      ie_close('p');
      ie_open('h5');
        itext('5. Third Party Software and Services');
      ie_close('h5');
      ie_open('p');
        itext('Certain Third Party Software and/or Services may be made available for use through WeDeploy for an End User to create its own Application(s). Each End User is fully responsible for the choice of any Third Party Software and/or Services within an End User\u2019s Application. The availability of such Third Party Software and/or Services does not constitute and endorsement by Liferay. The terms and/or conditions that apply to an End User\u2019s use of any Third Party Software and/or Services within a End User\u2019s Application are as solely agreed upon between a End User and the Third Party Software and/or Services provider. If an End User chooses to use Third Party Software and/or Services within an End User\u2019s Application, Liferay may be required to grant the Third Party Software and/or Services provider access to a End User\u2019s Content or Account to the extent necessary to provide the Third Party Software and/or Services or for interoperability with the Third Party Software and/or Services. Third Party Services may be removed from or no longer available through WeDeploy at any time, for example but not limited to if a take down is required by law or due to inconsistent interoperability.');
      ie_close('p');
      ie_open('h5');
        itext('6. Provision of Services');
      ie_close('h5');
      ie_open('p');
        itext('You give Liferay, its Affiliates, subcontractors, and vendors a worldwide, royalty-free, non-exclusive license to (a) host the Content provided by You through Your use of WeDeploy, and (b) display the Content provided by You through Your use of WeDeploy accessible by other users. You represent and warrant that you own all rights in, or have received a valid license to use the Content, with rights or license sufficient to enable any activities in connection with WeDeploy. You must provide all required and appropriate warnings, information and disclosures as may be required due to the nature of the Content. You are solely responsible for backing up Content and otherwise using measures, as You deem necessary to ensure that Content is not lost.');
      ie_close('p');
      ie_open('h5');
        itext('7. Fees');
      ie_close('h5');
      ie_open('p');
        itext('There are currently no fees associated with an End Users use of WeDeploy during the Alpha Term. Use of WeDeploy may be subject to fees under a separate agreement upon conclusion of the Alpha Term.');
      ie_close('p');
      ie_open('h5');
        itext('8. Term and Termination');
      ie_close('h5');
      ie_open('p');
        itext('This Agreement will terminate upon expiration of the Alpha Term. Sections # will survive termination of this agreement.');
      ie_close('p');
      ie_open('h5');
        itext('9. Feedback');
      ie_close('h5');
      ie_open('p');
        itext('End Users may choose to submit, including but not limited to, comments, information, feedback, enhancement requests, recommendations, corrections, and ideas regarding Liferay\u2019s products or services (collectively "Feedback") to Liferay in order for Liferay to improve its products and services. If End Users do not want Liferay to improve the products and services using Feedback, please do not submit the Feedback. If you do submit Feedback, Liferay may incorporate such Suggestions as Liferay\u2019s own into its product and services without any obligation to account to You in any way and Liferay shall be the owner of any products and services it creates as a result of Your Feedback. Liferay may use solutions or technologies that monitor an End Users usage statistics while using WeDeploy. Liferay will only use such usage statistics related to an End User Account in accordance with the Privacy Policy and only to improve WeDeploy or to assist an End User in its use of WeDeploy.');
      ie_close('p');
      ie_open('h5');
        itext('10. Data');
      ie_close('h5');
      ie_open('p');
        itext('To provide Liferay WeDeploy to End Users, Liferay may transfer an End User\u2019s Content or other information between Liferay, its Affiliates, vendors, and/or subcontractors, which may be located worldwide. Liferay\u2019s Affiliates and/or subcontractors are acting as data processors on behalf of an End User, and may process the Content to provide Liferay WeDeploy. Each End User is responsible for obtaining any necessary consents from users whose sensitive data or other Content is hosted in an End User\u2019s Application. Any Content or other data used by an End User in an Application an run on Liferay WeDeploy will be subject to and may be used in accordance with the Privacy Policy. Each End User that creates an Application for End Users agrees to protect the privacy of the Application\u2019s End Users, including implementing appropriate policies and safeguards (that at minimum contain terms substantially similar to those in the Privacy Policy) and notifying such End Users that their data will be stored on facilities accessible to Liferay, its Affiliates, vendors and/or subcontractors. Liferay may provide information including but not limited to Content and information concerning your Account as required by law or to establish or to exercise its legal rights to defend itself against claims without liability.');
      ie_close('p');
      ie_open('h5');
        itext('11. Warranties');
      ie_close('h5');
      ie_open('p');
        itext('You represent and warrant that (a) Your use of WeDeploy you will comply with all applicable laws and regulations; (b) You will comply with the Acceptable Use Policy when using WeDeploy; (c) You have the rights in the Content and Application to use such Content and Application with WeDeploy; (d) Your Content and Application do not infringe a third party\u2019s intellectual property rights (e); You will take all reasonable security precautions when using WeDeploy; and (f) You will not reverse engineer or attempt to reverse engineer WeDeploy.');
      ie_close('p');
      ie_open('p');
        itext('TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WEDEPLOY (INCLUDING ANY SOFTWARE) AS PROVIDED BY LIFERAY AND ITS AFFILIATES ARE PROVIDED AND LICENSED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTY OF QUALITY, MERCHANTABILITY, TITLE, NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE, AND SUCH IMPLIED WARRANTIES, AND ANY OTHER WARRANTIES, REPRESENTATIONS, CONDITIONS AND TERMS, EXPRESS OR IMPLIED (AND WHETHER IMPLIED BY STATUTE, COMMON LAW, COURSE OF DEALING, TRADE USAGE OR OTHERWISE) ARE HEREBY EXCLUDED TO THE FULLEST EXTENT PERMITTED BY LAW. LIFERAY AND ITS AFFILIATES DO NOT GUARANTEE THAT WEDEPLOY OR ANY SOFTWARE OR SERVICES PROVIDED UNDER THIS AGREEMENT HAVE BEEN DESIGNED TO MEET CUSTOMER\u2019S SPECIFIC BUSINESS REQUIREMENTS, THE USE OF WEDEPLOY SERVICES OR SOFTWARE WILL BE UNINTERRUPTED OR ERROR FREE, COMPLY WITH LEGAL OR REGULATORY REQUIREMENTS APPLICABLE TO CUSTOMER, OR THAT LIFERAY WILL CORRECT ALL ERRORS. END USER AGREES THAT IT IS SOLELY RESPONSIBLE FOR THE RESULTS OBTAINED FROM THE USE WEDEPLOY SERVICES AND SOFTWARE PROVIDED UNDER THIS AGREEMENT.');
      ie_close('p');
      ie_open('p');
        itext('WITHOUT LIMITING THE GENERALITY OF THE FOREGOING DISCLAIMER, WEDEPLOY SERVICES AND ANY SOFTWARE PROVIDED UNDER THIS AGREEMENT ARE NOT SPECIFICALLY DESIGNED, MANUFACTURED OR INTENDED FOR USE IN (I) FACILITIES OR ENVIRONMENTS REQUIRING FAILSAFE PERFORMANCE, INCLUDING BUT NOT LIMITED TO (A) THE PLANNING, CONSTRUCTION, MAINTENANCE, CONTROL, OR DIRECT OPERATION OF NUCLEAR FACILITIES, (B) AIRCRAFT NAVIGATION, CONTROL OR COMMUNICATION SYSTEMS, WEAPONS SYSTEMS, (C) DIRECT LIFE SUPPORT SYSTEMS OR (II) ULTRA-HAZARDOUS OR STRICT LIABILITY ACTIVITIES AND THE CUSTOMER IS SOLELY RESPONSIBLE AND EXPRESSLY ASSUMES ALL RISK FOR ANY SUCH USE.');
      ie_close('p');
      ie_open('h5');
        itext('12. Limitation of Liability');
      ie_close('h5');
      ie_open('p');
        itext('NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED IN THIS AGREEMENT AND TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT WILL LIFERAY OR ITS AFFILIATES HAVE ANY LIABILITY TO END USER AND/OR ITS AFFILIATES, UNDER ANY LEGAL OR EQUITABLE THEORY, WHETHER IN CONTRACT, TORT (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE), PRODUCT LIABILITY, STATUTE OR OTHERWISE, FOR OR IN CONNECTION WITH: (I) ANY ECONOMIC LOSSES, LOSS OF REVENUE, LOSS OF CUSTOMERS OR BUSINESS, LOSS OF OR DAMAGE TO REPUTATION OR GOODWILL, LOSS OF ANTICIPATED PROFITS, LOSS UNDER OR IN RELATION TO ANY OTHER CONTRACT, LOSS OF DATA OR INTERRUPTION OF SERVICES, LOSS OF ANTICIPATED SAVINGS OR BENEFITS, OR COVER OR ANALOGOUS COST RELATED TO THE PROCUREMENT OF REPLACEMENT SERVICES OR SOFTWARE; (II) ANY LOSSES, COSTS, EXPENSES OR DAMAGES ARISING OUT OF OR IN CONNECTION WITH ANY MALFUNCTIONS, REGULATORY NON-COMPLIANCE, DELAYS, PRODUCT LIABILITY, RELIANCE, BREACH OF ANY IMPLIED DUTY; OR (III) ANY LOSSES, COSTS, EXPENSES OR DAMAGES OTHER THAN DIRECT DAMAGES, INCLUDING WITHOUT LIMITATION, ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL OR PUNITIVE DAMAGES, LOSSES, COSTS OR EXPENSES. IN EACH CASE (I) THROUGH (III), WHETHER OR NOT FORESEEABLE; EVEN IF A PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, LOSSES, COSTS OR EXPENSES.');
      ie_close('p');
      ie_open('p');
        itext('FOR ALL EVENTS AND CIRCUMSTANCES AND TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE AGGREGATE AND CUMULATIVE LIABILITY OF LIFERAY AND ITS AFFILIATES TO THE OTHER PARTY AND/OR ITS AFFILIATES ARISING OUT OF OR RELATING TO THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ON ACCOUNT OF PERFORMANCE OR NON-PERFORMANCE OF OBLIGATIONS, REGARDLESS OF THE FORM OF THE CAUSE OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE), STATUTE OR OTHERWISE WILL NOT EXCEED FIFTY UNITED STATES DOLLARS ($50).');
      ie_close('p');
      ie_open('h5');
        itext('13. Indemnification');
      ie_close('h5');
      ie_open('p');
        itext('If a third party makes a claim against Liferay or its Affiliates that Your Application, Content or other use of WeDeploy infringes any patent, copyright or trademark, or misappropriates any trade secret, then You shall indemnify and defend Liferay, its Affiliates, its directors, officers and employees against such a claim at Your expense and You shall pay all losses, damages and expenses (including reasonable attorneys\' fees) finally awarded against such parties or agreed to in a written settlement agreement signed by Liferay and/or its Affiliates, to the extent arising from the claim.');
      ie_close('p');
      ie_open('h5');
        itext('14. Governing Law; Jurisdiction');
      ie_close('h5');
      ie_open('p');
        itext('The validity, interpretation and enforcement of this Agreement (and any dispute or claim relating to it, or its formation, existence, construction, performance or termination) will be governed by and construed in accordance with the laws of the United States and of the State of California without giving effect to the conflicts of laws provisions thereof or the United Nations Convention on Contracts for the International Sale of Goods. All disputes or claims arising out of or relating to this Agreement or its subject matter will be submitted to the exclusive jurisdiction of the state or federal courts of competent jurisdiction located in Los Angeles County, California and each party irrevocably consents to such personal jurisdiction and waives all objections to this venue. In the event the Uniform Computer Information Transactions Act (UCITA) or any similar federal or state laws or regulations are enacted, it will not apply to this Agreement, and the governing law will remain as if such law or regulation had not been enacted.');
      ie_close('p');
      ie_open('h5');
        itext('15. Notices');
      ie_close('h5');
      ie_open('p');
        itext('All notices to Liferay permitted or required under this Agreement shall be in English, in writing and shall be delivered in person, by certified or registered express mail, by other nationally recognized overnight delivery service, electronic mail, or facsimile. Notices shall be deemed received the day of personal delivery, or in relation to transmission by electronic mail, at the time at which the notice enters an information system which is under the control of the recipient or in relation to facsimile, on receipt by the sender of an acknowledgment or transmission report generated by the machine from which the facsimile was sent that the facsimile was successfully sent in its entirety or five (5) days after deposit in the mail or with a nationally recognized overnight delivery service. End Users shall direct all notices to Liferay under this Agreement to the following address: Liferay, Inc., Attn: Legal Department, 1400 Montefino Avenue, Diamond Bar, California 91765; E-mail: legal@liferay.com; FAX: (866) 497-9792. All notices to End Users permitted or required under this Agreement shall be addressed to the e-mail address associated with an End Users Account and shall be deemed received immediately after being sent to the e-mail address provided to Liferay.');
      ie_close('p');
      ie_open('h5');
        itext('16. Assignment');
      ie_close('h5');
      ie_open('p');
        itext('You may not assign this Agreement or any of its rights or obligations under this Agreement without the Liferay\u2019s prior written consent. Liferay may assign this Agreement or any of its rights or obligations under this agreement (i) to any Affiliate, or (ii) in connection with any sale, transfer, or other disposition of all or substantially all of its business or assets.');
      ie_close('p');
      ie_open('h5');
        itext('17. Force Majeure');
      ie_close('h5');
      ie_open('p');
        itext('Neither party shall be liable to the other for failure or delay in the performance of a required obligation under this Agreement if such failure or delay is caused by acts of God, wars, riots, strikes, fire, terrorist acts, flood, explosion, failure or diminishment of power or of telecommunications or data networks or services, earthquake or other natural disaster, government regulation, or other similar cause beyond such party\'s reasonable control.');
      ie_close('p');
      ie_open('h5');
        itext('18. Headings');
      ie_close('h5');
      ie_open('p');
        itext('Headings to the sections of this Agreement are for convenience only and shall not have any effect on construction and interpretation of this Agreement. No provision shall be construed adversely to a party solely on the ground that the party was responsible for the preparation of this Agreement or that provision');
      ie_close('p');
      ie_open('h5');
        itext('19. Entire Agreement');
      ie_close('h5');
      ie_open('p');
        itext('This agreement contains all the terms agreed to by the parties relating to its subject matter. It replaces all previous discussions, understandings, and agreements.');
      ie_close('p');
      ie_open('h5');
        itext('20. Severability');
      ie_close('h5');
      ie_open('p');
        itext('If any part of this agreement is declared unenforceable or invalid, the remainder will continue to be valid and enforceable.');
      ie_close('p');
      ie_open('h5');
        itext('21. Waiver');
      ie_close('h5');
      ie_open('p');
        itext('A party\'s failure or neglect to enforce any of rights under this agreement will not be deemed to be a waiver of that party\'s rights.');
      ie_close('p');
      ie_open('h5');
        itext('22. Waiver of Jury Trial');
      ie_close('h5');
      ie_open('p');
        itext('TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, EACH PARTY WAIVES THE RIGHT TO TRIAL BY JURY IN ANY LEGAL PROCEEDING ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE TRANSACTIONS CONTEMPLATED UNDER THIS AGREEMENT.');
      ie_close('p');
      ie_open('h5');
        itext('23. Agreement Updates');
      ie_close('h5');
      ie_open('p');
        itext('Liferay reserves the right to update this Agreement from time to time by posting an updated version no later than thirty (30) days prior to the posted effective date of such update. Your continued use and access of WeDeploy after the posted effective date signifies your acceptance to the updated Agreement.');
      ie_close('p');
    ie_close('article');
    ie_open('article');
      ie_open('h3');
        itext('Appendix A: WeDeploy Acceptable Use Policy');
      ie_close('h3');
      ie_open('h5');
        itext('1. Content');
      ie_close('h5');
      ie_open('p');
        itext('Your use of WeDeploy is subject to all applicable laws and regulations, and You agree not to violate such laws and/or regulations. In addition, You agree not to insert, upload, contribute, share, post, distribute, transmit or otherwise promote or facilitate Content that, including but not limited to: (a) is illegal; (b) violates, misappropriates or infringes the third party intellectual property rights of others; (c) solicits, encourages, or promotes use of illegal substances or activities; (d) is threatening, abusive, harassing, defamatory, slanderous, libelous, derogatory, or violent; (e) is invasive of a third party\u2019s legal rights, including privacy or publicity rights; (f) is vulgar, obscene, bigoted, hateful, or that advocates racial or ethnic intolerance; (g) is profane, scandalous, pornographic, indecent, or otherwise objectionable; (h) is malicious or contains technology that may damage, interfere with, or intercept any system, program or data, including viruses, trojan horses, worms, time bombs or other harmful or disruptive components.');
      ie_close('p');
      ie_open('h5');
        itext('2. Conduct');
      ie_close('h5');
      ie_open('p');
        itext('Liferay provides access to WeDeploy for use and purposes in conformance with applicable documentation and/or as otherwise generally described by Liferay and not for interfering with other users enjoyment of WeDeploy or to harass other users or third parties. You are prohibited from conduct, including but not limited to: (a) using WeDeploy for any act or action that gives rise to civil or criminal liability for Yourself or for Liferay or otherwise violates any applicable law or regulation; (b) engaging in any activity that inappropriately restricts or inhibits any other user from using or enjoying WeDeploy, including hacking, cracking, spoofing, or defacing any portion of WeDeploy; (c) posting, distributing, or transmitting chain letters, mass mailings, spam mail, any robot, spider, site search/retrieval application, or other manual or automatic device or process to retrieve or index data or "data mine"; (d) harvesting or collecting information about other WeDeploy users without their express written consent; (e) interfering with others\u2019 use and enjoyment of WeDeploy, including intentionally attempting to overload any portion of WeDeploy; (f) launching or facilitating a denial of service attack from or on WeDeploy or (g) using WeDeploy in connection with illegal or unlawful sharing.');
      ie_close('p');
      ie_open('h5');
        itext('3. Security');
      ie_close('h5');
      ie_open('p');
        itext('You may not use WeDeploy in any manner that would comprise or violate the security of WeDeploy or other users of WeDeploy, including but not limited to: (a) accessing or using WeDeploy in violation of law, any applicable terms and conditions, or without permission, attempting to test the vulnerability of the security of WeDeploy or to breach any of the security measures of WeDeploy; (b) imitating or impersonating another person or his or her email address or creating false accounts intended to misrepresent yourself or the source of your email; (c) intercepting or monitoring activity on WeDeploy without permission or (d) using any means to circumvent the security limitations of WeDeploy.');
      ie_close('p');
      ie_open('h5');
        itext('4. Reporting');
      ie_close('h5');
      ie_open('p');
        itext('Liferay encourages You to report violations of this Acceptable Use Policy to Liferay. Liferay has the right, but not the obligation, to monitor Your activity and Content to determine Your compliance with this Acceptable Use Policy. Liferay has the right in its sole discretion to monitor your activity and Content within any part of WeDeploy accessible to other users such as chat rooms or discussion forums to determine compliance with this Acceptable Use Policy. Liferay has the right in its sole discretion to edit, refuse to post or remove any material submitted to or posted on a Liferay website or WeDeploy that Liferay finds to be in violation of this Acceptable Use Policy or is otherwise objectionable. You are solely responsible for Your activities and any Content You post, transmit, or otherwise make available on a Liferay website or WeDeploy. You acknowledge and agree that Liferay does not have any liability for any action or inaction with respect to your Conduct, communication or posting on a Liferay website or WeDeploy. Liferay may report any activity Liferay believes may violate any law to law enforcement, regulators, or other relevant third parties.');
      ie_close('p');
      ie_open('h5');
        itext('5. Trademarks');
      ie_close('h5');
      ie_open('p');
        itext('The trademarks, trade names, service marks and logos of Liferay, Liferay\u2019s Affiliates and third parties used in the Liferay websites and other WeDeploy ("Trademarks") are the property of Liferay, Liferay\u2019s Affiliates or the third parties. You have no right to use any such Trademarks, and nothing contained in WeDeploy or this Policy grants any right to use (by implication, waiver, estoppel or otherwise) any Trademarks without the prior written permission of Liferay, Liferay\u2019s Affiliate or the respective third party owner. Please see www.liferay.com/trademark.');
      ie_close('p');
      ie_open('h5');
        itext('6. Linking');
      ie_close('h5');
      ie_open('p');
        itext('You may encounter links to non-Liferay sites or services while using WeDeploy, which should not be interpreted as endorsement of Liferay of such third party sites or the company, products, services or content to which they link as such sites are not under Liferay control and Liferay is not responsible for the content of any linked site or any link contained in a linked site. If You decide to access any third party site, product or service linked through WeDeploy, you do so at your own risk.');
      ie_close('p');
      ie_open('h5');
        itext('7. Updates');
      ie_close('h5');
      ie_open('p');
        itext('Liferay reserves the right to update this Policy from time to time by posting an updated version no later than thirty (30) days prior to the posted effective date of such update. Your continued use and access of WeDeploy after the posted effective date signifies your acceptance to the updated Policy.');
      ie_close('p');
    ie_close('article');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.page.title);
    ie_close('input');
    ie_open('input', null, null,
        'type', 'hidden',
        'value', opt_data.site.title);
    ie_close('input');
  };
  $templateAlias1(soy.$$assignDefaults({content: param662}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'jTYeL.render';
}

exports.render.params = ["page","site"];
exports.render.types = {"page":"any","site":"any"};
templates = exports;
return exports;

});

class jTYeL extends Component {}
Soy.register(jTYeL, templates);
export { jTYeL, templates };
export default templates;
/* jshint ignore:end */
