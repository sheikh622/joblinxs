import { Card, Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";


const PrivacyPolicy = (props, row) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <>
            <Navbar module={"Privacy Policy"} />
            <Col xs={12} xl={12} className={'d-flex justify-content-start mb-2'}>
                <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => history.goBack()}>
                    <path d="M9.79591 14.8435L9.79557 14.8439C9.56284 15.0818 9.2503 15.2 8.93911 15.2C8.65838 15.2 8.37589 15.1036 8.15012 14.9076L8.14971 14.9073L1.18041 8.82491C0.939515 8.61471 0.799112 8.31587 0.799112 7.99906C0.799112 7.68333 0.93963 7.38454 1.18041 7.17445L8.14971 1.09206L8.15005 1.09176C8.62347 0.6805 9.35494 0.706129 9.79539 1.15531L9.79539 1.15531L9.79591 1.15584C10.2386 1.6107 10.2057 2.32402 9.72866 2.74114L9.72851 2.74128L3.7035 7.99908L9.72853 13.2581L9.72866 13.2582C10.2057 13.6753 10.2386 14.3887 9.79591 14.8435Z" fill="#12499C" stroke="#12499C" stroke-width="0.4" />
                </svg>

            </Col>
            <Container>

                <Row>
                    <Col xs={12} xl={12}
                    >
                        <span>
                            <p>
                                Joblinxs Inc of 318 Mclevin Ave, Toronto, ON, M1B 6C4 (hereinafter “Joblinxs”, “we” or “us”) is committed to protecting and respecting your privacy. This policy sets out the basis on which any Personal Information as defined in Canada`s Personal Information Protection and Electronic Documents Act (the “Personal Information”) we collect from account holders or individual users or visitors to our iOS and Android mobile application (hereinafter “APP”), or that is uploaded to our APP, will be processed by us. If you are using the Joblinxs through our website, please refer to our Privacy Policy posted on the website.
                            </p>
                        </span>
                        <span>
                            <p>
                                Account holders, users and visitors of our APP or owners of Personal Information collected by us (each, “you”) should read the following carefully to understand our views and practices regarding your Personal Information and how we will treat it.
                            </p>
                        </span>
                        <span>
                            <p>
                                By providing any Personal Information to us, you consent to the collection, use, disclosure and transfer of such Personal Information in the manner and for the purposes set out below.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Principles of data processing
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <Card.Title>
                                <p>
                                    We process users' Personal Information only in compliance with the relevant data protection regulations. User data is only processed if the following legal permissions exist:
                                </p>
                            </Card.Title>
                            <p>
                                •	in order to provide our contractual services and online services
                            </p>
                            <p>
                                •	processing is required by law;
                            </p>
                            <p>
                                •	with your consent; and
                            </p>
                            <p>
                                •	on the basis of our legitimate interests (i.e., interest in the analysis, optimisation and economic operation and security of our APP).
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <p>
                                    The above legal bases are set out as follows:
                                </p>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                •	consent;
                            </p>
                            <p>
                                •	processing for the fulfilment of our services and implementation of contractual measures;
                            </p>
                            <p>
                                •	processing for the fulfilment of our legal obligations; and
                            </p>
                            <p>
                                •	processing to protect our legitimate interests.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Installation of our APP
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                Our APP can be downloaded from the APP stores "Google Playstore" and "Apple APP Store". Downloading our APP may require prior registration with the respective APP store and installation of the APP store software.
                            </p>
                        </span>
                        <span>
                            <p>
                                APP installation via the Google Playstore
                            </p>
                        </span>
                        <span>
                            <p>
                                You can use the Google service "Google Play" of Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, US, to install our APP.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <p>
                                    As far as we are aware, Google collects and processes the following data;
                                </p>
                            </Card.Title>
                            <p>
                                •	License check,
                            </p>
                            <p>
                                •	network access,
                            </p>
                            <p>
                                •	network connection,
                            </p>
                            <p>
                                •	WLAN connections,
                            </p>
                            <p>
                                •	location information,
                            </p>
                        </span>
                        <span>
                            <p>
                                It cannot be ruled out that Google also transmits the information to a server in a third country. We cannot influence which personal data Google processes with your registration and the provision of downloads in the respective app store and app store software. The responsible party in this respect is solely Google as the operator of the Google Play Store. You can find more detailed information in Google's Privacy Policy, which you can access here: <Link to='/https://policies.google.com/privacy'>https://policies.google.com/privacy</Link>

                            </p>


                        </span>
                        <span>
                            <p>
                                APP installation via the Apple APP Store
                            </p>
                        </span>
                        <span>
                            <p>
                                You can use the Apple service "App Store" a service of Apple Inc., 1 Infinite Loop, Cupertino, CA 95014, US, to install our APP.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <p>
                                    As far as we are aware, Apple collects and processes the following data;
                                </p>
                            </Card.Title>
                            <p>
                                •	device identifiers,
                            </p>
                            <p>
                                •	IP addresses,
                            </p>
                            <p>
                                •	location information,
                            </p>
                        </span>
                        <span>
                            <p>
                                It cannot be excluded that Apple also transmits the information to a server in a third country. We cannot influence which personal data Apple processes with your registration and the provision of downloads in the respective app store and app store software. The responsible party in this respect is solely Apple as the operator of the Apple APP Store. You can find more detailed information in Apple's Privacy Policy, which you can access here: .<Link to='/https://www.apple.com/legal/privacy/'>https://www.apple.com/legal/privacy/</Link>
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Device information
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                We collect information from and about the device(s) you use to access our APP, including hardware and software information such as IP address, device ID and type, device-specific and APP settings and properties, APP crashes, information about your wireless and mobile network connection such as your service provider and signal strength; information about device sensors such as accelerometer, gyroscope and compass.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Authorisations and Access
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                We may request access or permission to your Location, Phone Storage (read and write) and Notifications from your mobile device. The legal basis for data processing is our legitimate interest and the provision of contractual or pre-contractual measures. You can change your permissions at any time via Settings (iOS) or Settings Menu (Android).
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Google Services
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <Card.Title>
                                <p>
                                    The APP uses some Google and Google Firebase tools of Google Inc, 1600 Amphitheatre Parkway Mountain View, CA 94043, USA, in particular we are using
                                </p>
                            </Card.Title>
                            <p>
                                •	Firebase Cloud Storage is a web hosting service;
                            </p>
                            <p>
                                •	Firebase Realtime Database is a web hosting and backend service;
                            </p>
                            <p>
                                •	Firebase Authentication is a login and authentication service to facilitate the sign-in and authentication process, Firebase Authentication may use third party identity services and store the information on their platform;
                            </p>
                            <p>
                                •	Firebase Cloud Messaging is a cross-platform cloud solution for messages and notifications for Android, iOS, and web applications; and
                            </p>
                            <p>
                                •	Google Maps to track locations of your service provider (Subject to the service provider`s consent).
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Push messages
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                When using the APP, you will receive so-called push messages from us, even if you are not currently using the APP. These are messages that we send you as part of the performance of the contract, but also promotional information. You can adjust or stop receiving push messages at any time via the device settings of your device.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Registration
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                If you register on our website, we will request mandatory and, where applicable, non-mandatory data in accordance with our registration form for the purposes stated below. This may include the following:
                            </p>
                        </span>
                        <Row>
                            <Col xs={3} xl={3}>
                                <span>
                                    <Card.Title>
                                        <p>
                                            <h3>
                                                Personal Service Seekers:
                                            </h3>
                                        </p>
                                    </Card.Title>
                                    <p>
                                        •	Name
                                    </p>
                                    <p>
                                        •	Address
                                    </p>
                                    <p>
                                        •	Telephone Number
                                    </p>
                                    <p>
                                        •	Email Address
                                    </p>
                                    <p>
                                        •	Date of Birth
                                    </p>
                                    <p>
                                        •	Profile Picture
                                    </p>
                                </span>
                            </Col>
                            <Col xs={3} xl={3}>
                                <span>
                                    <Card.Title>
                                        <p>
                                            <h3>
                                                Business Service Seekers:
                                            </h3>
                                        </p>
                                    </Card.Title>
                                    <p>
                                        •	Name
                                    </p>
                                    <p>
                                        •	Address
                                    </p>
                                    <p>
                                        •	Telephone Number
                                    </p>
                                    <p>
                                        •	Email Address
                                    </p>
                                    <p>
                                        •	Business Registration
                                    </p>
                                    <p>
                                        •	Business Logo
                                    </p>
                                </span>
                            </Col>
                            <Col xs={3} xl={3}>
                                <span>
                                    <Card.Title>
                                        <p>
                                            <h3>
                                                Service Provider :
                                            </h3>
                                        </p>
                                    </Card.Title>
                                    <p>
                                        •	Name
                                    </p>
                                    <p>
                                        •	Address
                                    </p>
                                    <p>
                                        •	Telephone Number
                                    </p>
                                    <p>
                                        •	Email Address
                                    </p>
                                    <p>
                                        •	Date of Birth
                                    </p>
                                    <p>
                                        •	Profile Picture
                                    </p>
                                    <p>
                                        •	List of Skills
                                    </p>
                                    <p>
                                        •	List of Technical/ Software Skills
                                    </p>
                                    <p>
                                        •	Personal Attributes
                                    </p>
                                    <p>
                                        •	Career Overview
                                    </p>
                                    <p>
                                        •	Educational Qualifications
                                    </p>
                                    <p>
                                        •	Employment History
                                    </p>
                                    <p>
                                        •	Volunteering History
                                    </p>
                                    <p>
                                        •	Work Placements
                                    </p>
                                    <p>
                                        •	Tools Available
                                    </p>
                                    <p>
                                        •	Transportation Available
                                    </p>
                                    <p>
                                        •	Upload Banking Information
                                    </p>
                                    <p>
                                        •	Social Insurance information (for employees only)
                                    </p>
                                </span>

                            </Col>
                        </Row>
                        <span>
                            <p>
                                The entry of your data is encrypted so that third parties cannot read your data when it is entered. Your data will remain stored for as long as the registration lasts, in particular the storage is still necessary for the fulfilment/execution of the contract, for legal prosecution by us or for our other legitimate interests or we are required by law to retain your data (e.g., within the framework of tax retention periods).
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Profile
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                As a registered user, you have the opportunity to create a user profile with just a few clicks and details. If you make use of the option, the relevant profile data you provide will be transferred to your profile. Of course, you can change the information at any time via the settings in your profile. When creating a profile, you can submit Personal Information. You have choices about the information on your profile. You don’t have to provide additional information on your profile; however, profile information helps you to get more from our Services. It’s your choice whether to include sensitive information on your profile and to make that sensitive information public. Please do not post or add Personal Information to your profile that you would not want to be available. The legal basis for the processing of your Personal Information is the establishment and implementation of the user contract for the use of the service. We store the data until you delete your user account. Insofar as legal retention periods are to be observed, storage also takes place beyond the time of deletion of a user account.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    When you contact us
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                If you contact us, we will receive your email address and may store your IP address and the information you give us so that we can process your request.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Communication with other users
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                We store our users' communications that take place via the APP, as well as communications with us customer service. When you use our services, some information about you is shared with the members of our community. We recommend that you do not include email addresses, URLs, instant messaging details, telephone numbers, full names or addresses, credit card details, and other sensitive information that is open to misuse when it is not required. If you upload information about yourself or use the chat function to communicate with other users, you do so at your own risk.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Purchases and Pay-out
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                When ordering services, it is necessary, among other things, to provide your name, e-mail address and postal address and, if applicable, your payment data. We process the Personal Information provided
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Reviews
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                Within your review you may be able to display certain information, share certain details, engage with others, exchange knowledge and insights, post and view relevant content. Content and data are publicly viewable. You have choices about the information on your review. You don’t have to provide additional information on your review. It’s your choice whether to include sensitive information on your review and to make that sensitive information public. Please do not post or add Personal Information in your review that you would not want to be available.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Where we store your data
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                The Personal Information that we collect may be transferred to, and stored at, a destination outside Canada on the Servers of Amazon Web Services (AWS) of 410 Terry Avenue North Seattle, WA 98109 United States. It may also be processed by staff operating outside Canada who work for one of our suppliers. Such staff maybe engaged in, among other things, the fulfilment of your services ordered by you, the processing of your payment details and the provision of support services. By submitting any Personal Information to us, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your Personal Information is treated securely and in accordance with this Privacy Policy.
                            </p>
                        </span>
                        <span>
                            <p>
                                All information you provide to us is stored on our secure servers. Where we have given you (or where you have chosen) a password which enables you to access certain parts of our APP, you are responsible for keeping this password confidential. We ask you not to share the password with anyone.
                            </p>
                        </span>
                        <span>
                            <p>
                                Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Personal Information, we cannot guarantee the security of your Personal Information transmitted to our APP; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Uses made of the information
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <Card.Title>
                                <p>
                                    We use information held, including Personal Information, in the following manner:
                                </p>
                            </Card.Title>
                            <p>
                                •	to ensure that content from our APP is presented in the most effective manner for you and for your device;
                            </p>
                            <p>
                                •	to provide you with information or services that you request from us, and to otherwise carry out our obligations arising from any contracts entered into between you and us;
                            </p>
                            <p>
                                •	to allow you to participate in interactive features of our service, when you choose to do so;

                            </p>
                            <p>
                                •	to notify you about changes to our services;
                            </p>
                            <p>
                                •	to investigate any complaints relating to the use of our APP or any suspected unlawful activities;
                            </p>
                            <p>
                                •	complying with any applicable laws, regulations, codes of practice, guidelines, or rules, or to assist in law enforcement and investigations conducted by any governmental and/or regulatory authority;
                            </p>
                            <p>
                                •	any other purposes for which you have provided the information; and
                            </p>
                            <p>
                                •	carrying out whatever else is reasonable or related to or in connection with the above and our provision of services to you.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Disclosure of your information
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <Card.Title>
                                <p>
                                    We may disclose your Personal Information to third parties:
                                </p>
                            </Card.Title>
                            <p>
                                •	for the purposes of providing services that you request from us, fulfilling our obligations arising from any contracts entered into between you and us, processing payments in connection therewith or otherwise in connection with your use of our APP;
                            </p>
                            <p>
                                •	where a third-party claims that any content posted or uploaded by you to our APP constitutes a violation of their rights under applicable law, in which case we may disclose your identity to that third party;
                            </p>
                            <p>
                                •	in the event that we sell or buy any business or assets, in which case we may disclose your Personal Information to the prospective seller or buyer of such business or assets; or

                            </p>
                            <p>
                                •	if we or substantially all of our shares or assets are acquired by a third party, in which case Personal Information held by us about our customers will be one of the transferred assets.
                            </p>
                        </span>
                        <span>
                            <p>
                                We may also disclose your Personal Information to a governmental or regulatory body, law enforcement, or other authorities, in order to enforce our terms of use for the APP, to cooperate with any direction, request or order from such parties or to report any suspected unlawful activity.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    <p>
                                        Administration, financial accounting, office organization, contact management
                                    </p>
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                Where any Personal Information relates to a third party, you represent and warrant that the Personal Information is up-to-date, complete, and accurate and that you have obtained the third party’s prior consent for our collection, use and disclosure of their Personal Information for the Purposes. You agree that you shall promptly provide us with written evidence of such consent upon demand by us.
                            </p>
                        </span>
                        <span>
                            <p>
                                Each use of our services by you shall constitute a fresh agreement for us to collect, use and disclose the Personal Information in accordance with this Privacy Policy.
                            </p>
                        </span>
                        <span>
                            <p>
                                You may withdraw your consent and request us to stop using and/or disclosing your Personal Information for any or all of the Purposes by submitting your request to us in writing. Should you withdraw your consent to the collection, use or disclosure of your Personal Information, it may impact our ability to proceed with your transactions, agreements or interactions with us. Prior to you exercising your choice to withdraw your consent, we will inform you of the consequences of the withdrawal of your consent. Please note that your withdrawal of consent will not prevent us from exercising our legal rights (including any remedies) or undertaking any steps as we may be entitled to at law.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Your privacy rights
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <Card.Title>
                                <p>
                                    You have the ability to exercise the following rights:
                                </p>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                Right to withdraw consent - You have the right to withdraw your consent at any time, subject to legal and contractual restrictions. Note that your withdrawal of such consent may limit your ability to obtain certain products and services.
                            </p>
                        </span>
                        <span>
                            <p>
                                Right of access, correction, deactivation or deletion of accounts - You have the right to request access to and obtain a copy of any of your personal information that we may hold, to request correction of any inaccurate information relating to you and to request the deactivation or deletion of your accounts under certain circumstances.
                            </p>
                        </span>
                        <span>
                            <p>
                                Right to submit a privacy complaint - You have the right to submit a complaint with the Privacy Commissioner in the jurisdiction of your residence if you consider that our management of your personal information infringes applicable laws (although we ask you to try resolve any complaint with us first).
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    How do I make a privacy right request?
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                If you have a question about our personal information practices, please contact us.
                            </p>
                        </span>
                        <span>
                            <p>
                                If you make a request, we will confirm that we have received your request and let you know if we need anything else from you. We typically fulfill your request within one month unless the request is particularly complex, or we receive multiple requests from you. In these cases, we may extend the time period, but we will always let you know.
                            </p>
                        </span>
                        <span>
                            <p>
                                For your protection, we only fulfill requests for the personal information associated with the email address and/or account that you identify in your request, and we may need to take other steps to verify your identity before taking any action. When permitted by law, we may charge an appropriate fee to cover the costs of responding to your request.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Accuracy
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                We endeavor to ensure that all decisions involving your Personal Information are based upon accurate and timely information. However, we rely on you to disclose all relevant information to us and to inform us of any changes in your Personal Information. As such, please disclose all relevant information necessary for us to provide services to you and ensure all information submitted to us is up-to-date, complete, and accurate. Kindly inform us promptly if there are any changes in your Personal Information.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Updating your information
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                If you believe that the information, we hold about you is inaccurate or that we are no longer entitled to use it and want to request its rectification, deletion, or object to its processing, please do so within your account or contact us. For your protection and the protection of all of our users, we may ask you to provide proof of identity before we can answer the above requests.
                            </p>
                        </span>
                        <span>
                            <p>
                                Keep in mind, we may reject requests for certain reasons, including if the request is unlawful or if it may infringe on trade secrets or intellectual property or the privacy of another user. Also, we may not be able to accommodate certain requests to object to the processing of personal information, notably where such requests would not allow us to provide our service to you anymore.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Retention
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                We may retain your Personal Information for at least five (5) years, or such other longer or shorter period as may be necessary to fulfil the purpose for which it was collected, or as required or permitted by applicable laws. We will cease to retain your Personal Information or remove the means by which the data can be associated with you, as soon as it is reasonable to assume that such retention no longer serves the purpose for which the Personal Information was collected and is no longer necessary for legal or business purposes.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Security
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                State-of-the-art internet technologies are used to ensure the security of your data. During the online enquiry process, your details are secured with SSL encryption. For secure storage of your data, the systems are protected by firewalls that prevent unauthorized access from outside. In addition, technical and organizational security measures are used to protect the Personal Information you have provided against accidental or intentional manipulation, loss, destruction or access by unauthorized persons.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Data Breaches/Notification
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                Databases or data sets that include personal information may be breached inadvertently or through wrongful intrusion. Upon becoming aware of a data breach, Joblinxs will notify all affected individuals whose personal information data may have been compromised, and the notice will be accompanied by a description of action being taken to reconcile any damage as a result of the data breach. Notices will be provided as expeditiously as possible after the breach was discovered.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Confirmation of Confidentiality
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                All company employees must maintain the confidentiality of personal information as well as company proprietary data to which they may have access and understand that such personal information is to be restricted to only those with a business need to know. Employees with ongoing access to such data will sign acknowledgment reminders annually attesting to their understanding of this company requirement.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Existence of automated decision-making
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                As a responsible company, we do not use automated decision-making or profiling.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    External Links
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                Our APP contains links to the online services of other providers. We hereby point out that we have no influence on the content of the linked online services and the compliance with data protection regulations by their providers.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Personal information and children
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                Our services are aimed at people aged 18 and over. We will not knowingly collect, use or disclose personal information from minors under the age of 18 without first obtaining consent from a legal guardian through direct offline contact.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Changes and updates to the Privacy Policy
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                We kindly ask you to regularly inform yourself about the content of our Privacy Policy. We will amend the Privacy Policy as soon as changes to the information processing activities we carry out make this necessary. We will inform you as soon as the changes require an act of cooperation on your part (e.g., consent) or other individual notification.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    Concerns and Contact
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                If you have any concerns about a possible compromise of your privacy or misuse of your personal information on our part, or any other questions or comments, you can contact us.
                            </p>
                        </span>


                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default PrivacyPolicy;
