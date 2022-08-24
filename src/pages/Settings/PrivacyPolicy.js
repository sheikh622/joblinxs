import { Container, Col, Card, Row, Form, Button } from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";


const PrivacyPolicy = (props, row) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const dispatch = useDispatch();
    const history = useHistory();



    return (
        <>
            <Navbar module={"Privacy Policy"} />
            <Container>
                <Col xs={12} xl={12} className={'d-flex justify-content-end mb-4 pb-2'}>
                    <Link className="text-white fw-bold" to={Routes.Settings.path}>
                        <Button variant="primary" type="submit">
                            {"  "}
                            Back
                        </Button>
                    </Link>
                </Col>
                <Row>
                    <h5>

                        Joblinxs Inc of 318 Mclevin Ave, Toronto, ON, M1B 6C4 (hereinafter “Joblinxs”, “we” or “us”) is committed to protecting and respecting your privacy. This policy sets out the basis on which any Personal Information as defined in Canada`s Personal Information Protection and Electronic Documents Act (the “Personal Information”) we collect from account holders or individual users or visitors to our iOS and Android mobile application (hereinafter “APP”), or that is uploaded to our APP, will be processed by us. If you are using the Joblinxs through our website, please refer to our Privacy Policy posted on the website.

                        Account holders, users and visitors of our APP or owners of Personal Information collected by us (each, “you”) should read the following carefully to understand our views and practices regarding your Personal Information and how we will treat it.

                        By providing any Personal Information to us, you consent to the collection, use, disclosure and transfer of such Personal Information in the manner and for the purposes set out below.

                        Principles of data processing
                        We process users' Personal Information only in compliance with the relevant data protection regulations. User data is only processed if the following legal permissions exist:

                        •	in order to provide our contractual services and online services;
                        •	processing is required by law;
                        •	with your consent; and
                        •	on the basis of our legitimate interests (i.e., interest in the analysis, optimisation and economic operation and security of our APP).

                        The above legal bases are set out as follows:

                        •	consent;
                        •	processing for the fulfilment of our services and implementation of contractual measures;
                        •	processing for the fulfilment of our legal obligations; and
                        •	processing to protect our legitimate interests.

                        Installation of our APP
                        Our APP can be downloaded from the APP stores "Google Playstore" and "Apple APP Store". Downloading our APP may require prior registration with the respective APP store and installation of the APP store software.

                        APP installation via the Google Playstore
                        You can use the Google service "Google Play" of Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, US, to install our APP.

                        As far as we are aware, Google collects and processes the following data;

                        •	License check,
                        •	network access,
                        •	network connection,
                        •	WLAN connections,
                        •	location information,

                        It cannot be ruled out that Google also transmits the information to a server in a third country. We cannot influence which personal data Google processes with your registration and the provision of downloads in the respective app store and app store software. The responsible party in this respect is solely Google as the operator of the Google Play Store. You can find more detailed information in Google's Privacy Policy, which you can access here: https://policies.google.com/privacy.

                        APP installation via the Apple APP Store
                        You can use the Apple service "App Store" a service of Apple Inc., 1 Infinite Loop, Cupertino, CA 95014, US, to install our APP.

                        As far as we are aware, Apple collects and processes the following data;

                        •	device identifiers,
                        •	IP addresses,
                        •	location information,

                        It cannot be excluded that Apple also transmits the information to a server in a third country. We cannot influence which personal data Apple processes with your registration and the provision of downloads in the respective app store and app store software. The responsible party in this respect is solely Apple as the operator of the Apple APP Store. You can find more detailed information in Apple's Privacy Policy, which you can access here: https://www.apple.com/legal/privacy/.

                        Device information
                        We collect information from and about the device(s) you use to access our APP, including hardware and software information such as IP address, device ID and type, device-specific and APP settings and properties, APP crashes, information about your wireless and mobile network connection such as your service provider and signal strength; information about device sensors such as accelerometer, gyroscope and compass.

                        Authorisations and Access
                        We may request access or permission to your Location, Phone Storage (read and write) and Notifications from your mobile device. The legal basis for data processing is our legitimate interest and the provision of contractual or pre-contractual measures. You can change your permissions at any time via Settings (iOS) or Settings Menu (Android).

                        Google Services
                        The APP uses some Google and Google Firebase tools of Google Inc, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA, in particular we are using

                        •	Firebase Cloud Storage is a web hosting service;
                        •	Firebase Realtime Database is a web hosting and backend service;
                        •	Firebase Authentication is a login and authentication service to facilitate the sign-in and authentication process, Firebase Authentication may use third party identity services and store the information on their platform;
                        •	Firebase Cloud Messaging is a cross-platform cloud solution for messages and notifications for Android, iOS, and web applications; and
                        •	Google Maps to track locations of your service provider (Subject to the service provider`s consent).

                        Push messages
                        When using the APP, you will receive so-called push messages from us, even if you are not currently using the APP. These are messages that we send you as part of the performance of the contract, but also promotional information. You can adjust or stop receiving push messages at any time via the device settings of your device.



                        Registration
                        If you register on our website, we will request mandatory and, where applicable, non-mandatory data in accordance with our registration form for the purposes stated below. This may include the following:

                        Personal Service Seekers:	Business Service Seekers:	Service Provider (employee or a subcontractor profile):
                        •	Name
                        •	Address
                        •	Telephone Number
                        •	Email Address
                        •	Date of Birth
                        •	Profile Picture	•	Name
                        •	Address
                        •	Telephone Number
                        •	Email Address
                        •	Business Registration
                        •	Business Logo	•	Name
                        •	Address
                        •	Telephone Number
                        •	Email Address
                        •	Date of Birth
                        •	Profile Picture
                        •	List of Skills
                        •	List of Technical/ Software Skills
                        •	Personal Attributes
                        •	Career Overview
                        •	Educational Qualifications
                        •	Employment History
                        •	Volunteering History
                        •	Work Placements
                        •	Tools Available
                        •	Transportation Available
                        •	Upload Banking Information
                        •	Social Insurance information (for employees only)

                        The entry of your data is encrypted so that third parties cannot read your data when it is entered. Your data will remain stored for as long as the registration lasts, in particular the storage is still necessary for the fulfilment/execution of the contract, for legal prosecution by us or for our other legitimate interests or we are required by law to retain your data (e.g., within the framework of tax retention periods).

                        Profile
                        As a registered user, you have the opportunity to create a user profile with just a few clicks and details. If you make use of the option, the relevant profile data you provide will be transferred to your profile. Of course, you can change the information at any time via the settings in your profile. When creating a profile, you can submit Personal Information. You have choices about the information on your profile. You don’t have to provide additional information on your profile; however, profile information helps you to get more from our Services. It’s your choice whether to include sensitive information on your profile and to make that sensitive information public. Please do not post or add Personal Information to your profile that you would not want to be available. The legal basis for the processing of your Personal Information is the establishment and implementation of the user contract for the use of the service. We store the data until you delete your user account. Insofar as legal retention periods are to be observed, storage also takes place beyond the time of deletion of a user account.

                        When you contact us
                        If you contact us, we will receive your email address and may store your IP address and the information you give us so that we can process your request.

                        Communication with other users
                        We store our users' communications that take place via the APP, as well as communications with us customer service. When you use our services, some information about you is shared with the members of our community. We recommend that you do not include email addresses, URLs, instant messaging details, telephone numbers, full names or addresses, credit card details, and other sensitive information that is open to misuse when it is not required. If you upload information about yourself or use the chat function to communicate with other users, you do so at your own risk.

                        Purchases and Pay-out
                        When ordering services, it is necessary, among other things, to provide your name, e-mail address and postal address and, if applicable, your payment data. We process the Personal Information provided when you place an order solely for the purpose of providing you with the ordered service. Payment by credit card and debit card and Service Provider pay out are made via our payment service provider, to which we pass on your mandatory details provided during the checkout or pay out, for payment processing. Your data will only be passed on for the purpose of payment processing with the payment service provider and only insofar as it is necessary for this purpose.

                        Reviews
                        Within your review you may be able to display certain information, share certain details, engage with others, exchange knowledge and insights, post and view relevant content. Content and data are publicly viewable. You have choices about the information on your review. You don’t have to provide additional information on your review. It’s your choice whether to include sensitive information on your review and to make that sensitive information public. Please do not post or add Personal Information in your review that you would not want to be available.

                        Where we store your data
                        The Personal Information that we collect may be transferred to, and stored at, a destination outside Canada on the Servers of Amazon Web Services (AWS) of 410 Terry Avenue North Seattle, WA 98109 United States. It may also be processed by staff operating outside Canada who work for one of our suppliers. Such staff maybe engaged in, among other things, the fulfilment of your services ordered by you, the processing of your payment details and the provision of support services. By submitting any Personal Information to us, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your Personal Information is treated securely and in accordance with this Privacy Policy.

                        All information you provide to us is stored on our secure servers. Where we have given you (or where you have chosen) a password which enables you to access certain parts of our APP, you are responsible for keeping this password confidential. We ask you not to share the password with anyone.

                        Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Personal Information, we cannot guarantee the security of your Personal Information transmitted to our APP; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.

                        Uses made of the information
                        We use information held, including Personal Information, in the following manner:
                        •	to ensure that content from our APP is presented in the most effective manner for you and for your device;
                        •	to provide you with information or services that you request from us, and to otherwise carry out our obligations arising from any contracts entered into between you and us;
                        •	to provide you with information or services which we feel may interest you, where you have consented to be contacted for such purposes;
                        •	to allow you to participate in interactive features of our service, when you choose to do so;
                        •	to notify you about changes to our services;
                        •	to investigate any complaints relating to the use of our APP or any suspected unlawful activities;
                        •	complying with any applicable laws, regulations, codes of practice, guidelines, or rules, or to assist in law enforcement and investigations conducted by any governmental and/or regulatory authority;
                        •	any other purposes for which you have provided the information; and
                        •	carrying out whatever else is reasonable or related to or in connection with the above and our provision of services to you.




                        Disclosure of your information
                        We may disclose your Personal Information to third parties:
                        •	for the purposes of providing services that you request from us, fulfilling our obligations arising from any contracts entered into between you and us, processing payments in connection therewith or otherwise in connection with your use of our APP;
                        •	where a third-party claims that any content posted or uploaded by you to our APP constitutes a violation of their rights under applicable law, in which case we may disclose your identity to that third party;
                        •	in the event that we sell or buy any business or assets, in which case we may disclose your Personal Information to the prospective seller or buyer of such business or assets; or
                        •	if we or substantially all of our shares or assets are acquired by a third party, in which case Personal Information held by us about our customers will be one of the transferred assets.

                        We may also disclose your Personal Information to a governmental or regulatory body, law enforcement, or other authorities, in order to enforce our terms of use for the APP, to cooperate with any direction, request or order from such parties or to report any suspected unlawful activity.

                        Administration, financial accounting, office organization, contact management
                        We process data in the context of administrative tasks as well as organization of our operations, financial accounting and compliance with legal obligations, such as archiving. In this regard, we process the same data that we process in the course of providing our contractual services. The purpose and our interest in the processing lies in the administration, financial accounting, office organization, archiving of data, i.e., tasks that serve the maintenance of our business activities, performance of our tasks and provision of our services. The deletion of data with regard to contractual services and contractual communication corresponds to the data mentioned in these processing activities.

                        In this context, we disclose or transfer data to consultants, such as legal advisors or auditors, as well as other fee offices and payment service providers.

                        Furthermore, based on our business interests, we store information on suppliers, organizers and other business partners, e.g., for the purpose of contacting them at a later date. This data, most of which is company-related, is generally stored permanently.

                        Consent
                        By providing your Personal Information to us, you consent to the collection, use and disclosure of your Data by us for the purposes set out in this Privacy Policy (“Purposes”).

                        Where any Personal Information relates to a third party, you represent and warrant that the Personal Information is up-to-date, complete, and accurate and that you have obtained the third party’s prior consent for our collection, use and disclosure of their Personal Information for the Purposes. You agree that you shall promptly provide us with written evidence of such consent upon demand by us.

                        Each use of our services by you shall constitute a fresh agreement for us to collect, use and disclose the Personal Information in accordance with this Privacy Policy.

                        You may withdraw your consent and request us to stop using and/or disclosing your Personal Information for any or all of the Purposes by submitting your request to us in writing. Should you withdraw your consent to the collection, use or disclosure of your Personal Information, it may impact our ability to proceed with your transactions, agreements or interactions with us. Prior to you exercising your choice to withdraw your consent, we will inform you of the consequences of the withdrawal of your consent. Please note that your withdrawal of consent will not prevent us from exercising our legal rights (including any remedies) or undertaking any steps as we may be entitled to at law.


                        Your privacy rights
                        You have the ability to exercise the following rights:
                        Right to withdraw consent - You have the right to withdraw your consent at any time, subject to legal and contractual restrictions. Note that your withdrawal of such consent may limit your ability to obtain certain products and services.
                        Right of access, correction, deactivation or deletion of accounts - You have the right to request access to and obtain a copy of any of your personal information that we may hold, to request correction of any inaccurate information relating to you and to request the deactivation or deletion of your accounts under certain circumstances.
                        Right to submit a privacy complaint - You have the right to submit a complaint with the Privacy Commissioner in the jurisdiction of your residence if you consider that our management of your personal information infringes applicable laws (although we ask you to try resolve any complaint with us first).
                        How do I make a privacy right request?
                        If you have a question about our personal information practices, please contact us.

                        If you make a request, we will confirm that we have received your request and let you know if we need anything else from you. We typically fulfill your request within one month unless the request is particularly complex, or we receive multiple requests from you. In these cases, we may extend the time period, but we will always let you know.

                        For your protection, we only fulfill requests for the personal information associated with the email address and/or account that you identify in your request, and we may need to take other steps to verify your identity before taking any action. When permitted by law, we may charge an appropriate fee to cover the costs of responding to your request.

                        Accuracy
                        We endeavor to ensure that all decisions involving your Personal Information are based upon accurate and timely information. However, we rely on you to disclose all relevant information to us and to inform us of any changes in your Personal Information. As such, please disclose all relevant information necessary for us to provide services to you and ensure all information submitted to us is up-to-date, complete, and accurate. Kindly inform us promptly if there are any changes in your Personal Information.

                        Updating your information
                        If you believe that the information, we hold about you is inaccurate or that we are no longer entitled to use it and want to request its rectification, deletion, or object to its processing, please do so within your account or contact us. For your protection and the protection of all of our users, we may ask you to provide proof of identity before we can answer the above requests.

                        Keep in mind, we may reject requests for certain reasons, including if the request is unlawful or if it may infringe on trade secrets or intellectual property or the privacy of another user. Also, we may not be able to accommodate certain requests to object to the processing of personal information, notably where such requests would not allow us to provide our service to you anymore.

                        Retention
                        We may retain your Personal Information for at least five (5) years, or such other longer or shorter period as may be necessary to fulfil the purpose for which it was collected, or as required or permitted by applicable laws. We will cease to retain your Personal Information or remove the means by which the data can be associated with you, as soon as it is reasonable to assume that such retention no longer serves the purpose for which the Personal Information was collected and is no longer necessary for legal or business purposes.

                        Data Intermediary
                        Where we process your Personal Information as a data intermediary on behalf of a third party, we will process your Personal Information in accordance with the instructions of the third party and shall use it only for the purposes agreed between you and the third party. All such Personal Information will be protected and retained in accordance with this Privacy Policy.

                        We will take steps to inform the third party of any requests, complaints or questions that you may have regarding such Personal Information.

                        Security
                        State-of-the-art internet technologies are used to ensure the security of your data. During the online enquiry process, your details are secured with SSL encryption. For secure storage of your data, the systems are protected by firewalls that prevent unauthorized access from outside. In addition, technical and organizational security measures are used to protect the Personal Information you have provided against accidental or intentional manipulation, loss, destruction or access by unauthorized persons.

                        Data Breaches/Notification
                        Databases or data sets that include personal information may be breached inadvertently or through wrongful intrusion. Upon becoming aware of a data breach, Joblinxs will notify all affected individuals whose personal information data may have been compromised, and the notice will be accompanied by a description of action being taken to reconcile any damage as a result of the data breach. Notices will be provided as expeditiously as possible after the breach was discovered.

                        Confirmation of Confidentiality
                        All company employees must maintain the confidentiality of personal information as well as company proprietary data to which they may have access and understand that such personal information is to be restricted to only those with a business need to know. Employees with ongoing access to such data will sign acknowledgment reminders annually attesting to their understanding of this company requirement.

                        Existence of automated decision-making
                        As a responsible company, we do not use automated decision-making or profiling.

                        External Links
                        Our APP contains links to the online services of other providers. We hereby point out that we have no influence on the content of the linked online services and the compliance with data protection regulations by their providers.

                        Personal information and children
                        Our services are aimed at people aged 18 and over. We will not knowingly collect, use or disclose personal information from minors under the age of 18 without first obtaining consent from a legal guardian through direct offline contact.

                        Changes and updates to the Privacy Policy
                        We kindly ask you to regularly inform yourself about the content of our Privacy Policy. We will amend the Privacy Policy as soon as changes to the information processing activities we carry out make this necessary. We will inform you as soon as the changes require an act of cooperation on your part (e.g., consent) or other individual notification.

                        Concerns and Contact
                        If you have any concerns about a possible compromise of your privacy or misuse of your personal information on our part, or any other questions or comments, you can contact us.


                    </h5>
                </Row>
            </Container>

        </>
    );
};

export default PrivacyPolicy;
