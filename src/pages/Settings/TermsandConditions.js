import { Card, Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";


const TermsandConditions = (props, row) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const dispatch = useDispatch();
    const history = useHistory();



    return (
        <>
            <Navbar module={"Terms and Conditions"} />
            <Col xs={12} xl={12} className={'d-flex justify-content-start mb-2'}>
                <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => history.goBack()}>
                    <path d="M9.79591 14.8435L9.79557 14.8439C9.56284 15.0818 9.2503 15.2 8.93911 15.2C8.65838 15.2 8.37589 15.1036 8.15012 14.9076L8.14971 14.9073L1.18041 8.82491C0.939515 8.61471 0.799112 8.31587 0.799112 7.99906C0.799112 7.68333 0.93963 7.38454 1.18041 7.17445L8.14971 1.09206L8.15005 1.09176C8.62347 0.6805 9.35494 0.706129 9.79539 1.15531L9.79539 1.15531L9.79591 1.15584C10.2386 1.6107 10.2057 2.32402 9.72866 2.74114L9.72851 2.74128L3.7035 7.99908L9.72853 13.2581L9.72866 13.2582C10.2057 13.6753 10.2386 14.3887 9.79591 14.8435Z" fill="#12499C" stroke="#12499C" stroke-width="0.4" />
                </svg>

            </Col>
            <Container>
                <Row>
                    <Col xs={9} xl={9}>

                        <span>
                            <p>
                                The following Terms and Conditions (“Terms”) shall apply to all business relations between Joblinxs Inc of 318 Mclevin Ave, Toronto, ON, M1B 6C4 (hereinafter “Joblinxs”, “we” or “us”) and you the User of our iOS and Android mobile application (hereinafter “APP”), and our services. Please read these Terms carefully before using our APP. These Terms constitute a legal agreement between you and Joblinxs governing the use of our APP and our services. We license use of our APP and our services to you on the basis of these Terms.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    1.	General Terms
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                1.1.	Users within the meaning of these Terms are both Service Seekers (hereinafter “Service User(s)”) and professional service providers (hereinafter “Service Provider(s)”) and both collectively “User(s)”.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.2.	Service Seekers within the meaning of these Terms are natural (Personal Service Seekers) or legal (Business Service Seekers) persons with whom Service Provider enter into business relations without them acting in the exercise of or for the purpose of a commercial or independent professional activity.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.3.	Service Provider within the meaning of these Terms are natural or legal persons or persons and companies with legal capacity with whom Service Seekers enter into business relations and who are acting in the exercise of their commercial or self-employed professional activity.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.4.	The provisions set out in these Terms govern your access to and your use of our APP and shall constitute a legally binding agreement between you and us.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.5.	Subject to you agreeing to abide by these Terms, we hereby grant to you a revocable, non-exclusive and non-transferable license to use our APP on these Terms.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.6.	By registering for an Account, which involves providing us with certain mandatory and voluntary information as required for a successful registration and using our APP, you agree and acknowledge that:
                            </p>
                            <p>
                                1.6.1.	you have read the terms set out in these Terms and agree to be bound by and comply with them; and
                            </p>
                            <p>
                                1.6.2.	you shall ensure that all Users of your Account abide by these Terms.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.7.	You are responsible for maintaining the confidentiality of your Account and you are responsible for all activities that occur under your Account. You agree that all actions carried out by any person through your Account shall be deemed to be an act carried out by you, and you shall ensure that all persons who have access to and use your Account are authorised to do so. We are not responsible for any loss, damage or liabilities arising as a result of or in connection with the wrongful, fraudulent or illegal use of your Account.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.8.	We reserve the right to, without any notice, explanation or liability and in our sole discretion, refuse to allow you or suspend your access to our APP or your Account at any time, or remove or edit content on our APP.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.9.	We reserve the right to change, modify, suspend or discontinue any portion of the Services, our APP or any services provided by us in connection with any of the foregoing at any time. You agree that access to or operation of any of the foregoing may from time to time be interrupted or encounter technical difficulties.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.10.	Supplemental Terms of Service or documents that may be posted on the APP from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.11.	It is your responsibility to periodically review these Terms to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the APP after the date such revised Terms and Conditions are posted.
                            </p>
                        </span>
                        <span>
                            <p>
                                1.12.	The information provided on the APP is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    2.	Your relationship with Joblinxs
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                2.1.	Joblinxs does not offer the services and merely provides the technical and organisational infrastructure to ensure the proper conduct of transactions on the APP.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.2.	Joblinxs does not itself become a contracting party to the contracts concluded exclusively between the Users.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.3.	Users themselves are responsible for compliance with legal requirements and the assertion of claims arising from the contracts they have concluded. In particular, Joblinxs does not guarantee:
                            </p>
                            <p>
                                2.3.1.	the accuracy and completeness of the statements and declarations made in relation to the Services offered,
                            </p>
                            <p>
                                2.3.2.	the Services offered as such; and
                            </p>
                            <p>
                                2.3.3.	the conduct and performance of the relevant Service User/Service Provider, respectively.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.4.	Users are required to comply with applicable laws when using the APP and Service.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.5.	It is each Service Provider own responsibility to ensure that their offers are lawful and do not infringe the rights of third parties.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.6.	Users may not use addresses, contact details and e-mail addresses obtained through the use of Joblinxs for any purpose other than contractual and pre-contractual communication. In particular, it is forbidden to resell this data or use it to send advertising, unless the respective Users have expressly consented to this in advance.
                            </p>

                        </span>
                        <span>
                            <p>
                                2.7.	The content published on Joblinxs by the respective Users is generally not reviewed by Joblinxs and does not represent the opinion of Joblinxs.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.8.	Joblinxs is entitled to check the personal details of the Service Provider by means of suitable official documents in order to confirm the correctness of the data entered.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.9.	Although Joblinxs is reviewing and selecting the Service Provider upon sign-up, Joblinxs can only perform a limited review of the Documentation and Qualifications provided by Service Provider. Therefore, no guarantee can be given for the accuracy of the Services provided by the respective Service Provider.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.10.	The offer of Joblinxs contains services which are provided in connection with an internet-based online APP. At Joblinxs, the respective service offers can be accessed at will.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.11.	Joblinxs is not a mediator or arbitrator but offers limited dispute resolution services if service was not as described or Service Provider is not responding whether trough electronic means or customer support. Any such decision made shall be binding on both parties.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.12.	Subject to the forgoing, the service for Service Seekers is limited to giving them the opportunity to get to know Service Provider and the service for Service Provider, is limited to giving them the opportunity to create a profile, through which other Users are encouraged to contact them, at their own initiative. Joblinxs does not guarantee that Users will find suitable Service Provider or that Service Provider will find suitable Users.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.13.	Joblinxs assumes no liability for the content that Service Provider provide, nor the ability to fulfil the requirements for a by the Service Provider advertised service or also any information provided by the Service Provider.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.14.	Joblinxs has no influence on the offers made by Service Provider.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.15.	Joblinxs reserves the right to delete the Service Provider’ profile in the case of false information and gross violations of these Terms without prior notification or naming of reasons. In the case of gross deception, falsification of documents or other wilful misrepresentation, Joblinxs will take appropriate action, including legal action.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.16.	Third-party services offered via Joblinxs are clearly marked as such. Joblinxs assumes no liability for such when using such services.
                            </p>
                        </span>
                        <span>
                            <p>
                                2.17.	You agree that by accessing the APP, you have read, understood, and agree to be bound by all of these Terms. If you do not agree with all of these Terms, then you are expressly prohibited from using the APP, and you must discontinue use immediately.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    3.	Apple and Android Devices
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                3.1.	The following terms apply when you use our mobile application obtained from either the Apple’s, or Android’s store (each an “App Distributor”) to access the Platform:
                            </p>
                            <p>
                                3.1.1.	the License granted to you for our mobile application is limited to a non-transferable License to use the application on a device that utilises the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service;
                            </p>
                            <p>
                                3.1.2.	we are responsible for providing any maintenance and support services with respect to the mobile application as specified in the terms and conditions of this mobile application License contained in these Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the mobile application;
                            </p>
                            <p>
                                3.1.3.	in the event of any failure of the mobile application to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the mobile application, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the mobile application;
                            </p>
                            <p>
                                3.1.4.	you must comply with applicable third-party terms of agreement when using the mobile application,
                            </p>
                            <p>
                                3.1.5.	you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application License contained in these Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application License contained in these Terms against you as a third-party beneficiary thereof.
                            </p>

                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    4.	Prices and Payment
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                4.1.	The prices stated for the respective services by Service Provider shall apply at the time the order is placed.
                            </p>
                        </span>
                        <span>
                            <p>
                                4.2.	The prices shown on the APP are final and include the statutory value added tax, insofar as this is applicable to the respective service and a Service Charge (25% for Sub-contract/ Freelance labour & 35% for Business Hires on payroll).
                            </p>
                        </span>
                        <span>
                            <p>
                                4.3.	The applicable prices are shown in the respective service description. The Service Seekers undertakes to pay this price. Payment is due upon ordering the service or product.
                            </p>
                        </span>
                        <span>
                            <p>
                                4.4.	Prices and methods of payments are published on the APP, the content of which is included in these Terms by reference.
                            </p>
                        </span>
                        <span>
                            <p>
                                4.5.	Payment is considered to be completed when the money is credited to Joblinxs’ account or a third party, collecting fees on behalf of Service Provider.
                            </p>
                        </span>
                        <span>
                            <p>
                                4.6.	The Service User is solely responsible for ensuring that the payment made is correct and abiding by any taxes applicable in their own country of residence.
                            </p>

                        </span>
                        <span>
                            <p>
                                4.7.	The Service User is solely responsible for paying for third-party services (such as services communications, Internet, etc.) required to receive services.
                            </p>
                        </span>
                        <span>
                            <p>
                                4.8.	Payments services of Joblinxs are processed by a payment service provider acting on the basis of an agreement with Joblinxs. All rights and obligations arising in relation to the payment process are directly between the payment service provider and the Service User.
                            </p>
                        </span>
                        <span>
                            <p>
                                4.9.	Joblinxs does not process or have access to any of the Service User’s personal payment or bank details provided in connection with the settlement of payments.
                            </p>
                        </span>
                        <span>
                            <p>
                                4.10.	Joblinxs does not store the details of bank cards on their resources, including servers, cloud storage, etc.
                            </p>
                        </span>
                        <span>
                            <p>
                                4.11.	In the event of default in payment, Joblinxs may suspend the continuation of all current orders, irrespective of the exercise of other rights.
                            </p>
                        </span>

                        <span>
                            <Card.Title>
                                <h3>
                                    5.	Service Provider Renumeration and Payout
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                5.1.	When providing services available for purchase on Joblinxs, the Service Provider will be required to select a price for the Service.
                            </p>
                        </span>
                        <span>
                            <p>
                                5.2.	When a Service User purchases services, Joblinxs calculates the gross amount of the sale as the amount actually received by Joblinxs from the Service User. From this, Joblinxs will subtract any Transaction Taxes and service and processing fees, and any amounts paid to third parties in connection with the content to calculate the net amount of the sale.
                            </p>
                        </span>
                        <span>
                            <p>
                                5.3.	Joblinxs reserves the right to change the in subsection 2 described service and processing fee at any time.
                            </p>
                        </span>
                        <span>
                            <p>
                                5.4.	Joblinxs is not responsible for currency conversion fees, wiring fees, or any other processing fees that you may incur. Your revenue report will show the sales price and your converted revenue amount.
                            </p>
                        </span>
                        <span>
                            <p>
                                5.5.1.	Joblinxs and the Service Provider each expressly agree and understand that they are creating an Agency Employment relationship, and that the Service Provider shall be considered an employee of Joblinxs for those purpose. The Service Provider is as such entitled to receive or participate in any medical, retirement, vacation, paid or unpaid leave, or other benefits provided by Joblinxs to its employees.
                            </p>
                            <p>
                                5.5.2.	Joblinxs is exclusively responsible for all Social Insurance/Security any other statutory benefits otherwise required to be provided to employees, and all fees and licenses, if any, required for the performance of the services hereunder.
                            </p>
                            <p>
                                5.5.	For Service Providers hired by Business Service Seekers the following applies:
                            </p>
                        </span>
                        <span>
                            <p>
                                5.6.	For Service Providers hired by Personal Service Seekers the following applies:
                            </p>
                            <p>
                                5.6.1.	Joblinxs and the Service Provider each expressly agree and understand that they are creating an independent contractor relationship, and that the Service Provider shall not be considered an employee of Joblinxs for any purpose. The Service Provider is not entitled to receive or participate in any medical, retirement, vacation, paid or unpaid leave, or other benefits provided by Joblinxs to its employees.
                            </p>
                            <p>
                                5.6.2.	The Service Provider is exclusively responsible for all Social Insurance/Security, self-employment, and income taxes, disability insurance, workers’ compensation insurance, any other statutory benefits otherwise required to be provided to employees, and all fees and licenses, if any, required for the performance of the services hereunder.
                            </p>

                        </span>
                        <span>
                            <p>
                                5.7.	To withdraw revenue, the Service Provider must have an account with at least one of Joblinxs's Payment Service Providers for the withdrawal methods listed below. All funds eligible for Withdrawal will be held on your behalf at an account with Joblinxs’s Payment Services Provider. All payment services, including withdrawal services, will be provided by Joblinxs’s Payment Services Provider.
                            </p>
                        </span>
                        <span>
                            <p>
                                5.8.	The Service Provider`s Joblinxs profile can be associated with only one account from each Joblinxs withdrawal method. A Payment Service Provider withdrawal account can be associated with only one Joblinxs profile.
                            </p>
                        </span>
                        <span>
                            <p>
                                5.9.	Revenues are only made available for withdrawal from the Revenue page after the order is marked as complete.
                            </p>
                        </span>
                        <span>
                            <p>
                                5.10.	For security concerns, Joblinxs may temporarily disable a Service Provider’s ability to withdraw revenue to prevent fraudulent or illicit activity. This may come as a result of security issues, improper behaviour reported by other Users, or associating multiple Joblinxs accounts to a single withdrawal provider.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    6.	User Representations
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                6.1.	By using the APP, you represent and warrant that:
                            </p>
                            <p>
                                6.1.1.	all registration information you submit will be true, accurate, current, and complete;
                            </p>
                            <p>
                                6.1.2.	you will maintain the accuracy of such information and promptly update such registration information as necessary;
                            </p>
                            <p>
                                6.1.3.	you have the legal capacity, and you agree to comply with these Terms;
                            </p>
                            <p>
                                6.1.4.	you are not under the age of 18;
                            </p>
                            <p>
                                6.1.5.	you will not access the APP through automated or non-human means, whether through a bot, script, or otherwise;
                            </p>
                            <p>
                                6.1.6.	you will not use the APP for any illegal or unauthorised purpose;
                            </p>
                            <p>
                                6.1.7.	your use of the APP will not violate any applicable law or regulation.
                            </p>
                            <p>
                                6.1.8.	If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the APP (or any portion thereof).
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    7.	No reliance on information and limitation of liability
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                7.1.	Commentary and other materials posted on our APP are not intended to amount to advice on which reliance should be placed; they are there for guidance purposes only.
                            </p>
                        </span>
                        <span>
                            <p>
                                7.2.	Joblinxs makes no representations, warranties or guarantees, whether express or implied, that the content on the APP is accurate, complete or up to date.
                            </p>
                        </span>
                        <span>
                            <p>
                                7.3.	Joblinxs will not be liable for any loss or damage including, without limitation, loss of profit, indirect, incidental or consequential loss, or any damages whatsoever arising from the use of, or in connection with such use or loss of use of, the APP, whether in contract or tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable.
                            </p>
                        </span>
                        <span>
                            <p>
                                7.4.	We will not be liable for any loss or damage caused by a virus, distributed denial-of-service attack, or other technologically harmful material that may infect your device equipment, device programs, data or other proprietary material due to your use of the APP or to your downloading of any content on it, or on any APP linked to it.
                            </p>
                        </span>
                        <span>
                            <p>
                                7.5.	This does not affect our liability for death or personal injury arising from our negligence, nor our liability for fraudulent misrepresentation, nor any other liability which cannot be excluded or limited under applicable law.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    8.	General Principles
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                8.1.	We reserve the right to change, modify, suspend, or discontinue any portion of the Services, our APP or any other products, services, affiliated websites (including social media pages) provided by us in connection with any of the foregoing at any time. You agree that access to or operation of any of the foregoing may from time to time be interrupted or encounter technical difficulties.
                            </p>
                        </span>
                        <span>
                            <p>
                                8.2.	Save to the extent permitted by us in writing, you are not permitted to use, or submit any content to, our APP or any of our affiliated websites to advertise, promote or market any products or services of any third party or yourself.
                            </p>
                        </span>
                        <span>
                            <p>
                                8.3.	Our Privacy Policy sets out our policy concerning the collection, use and disclosure of your Personal Data in compliance with the PIPEDA. By using our APP, you consent to our collection, use, and disclosure of your Data in the manner set out in our Privacy Policy and you warrant that all Data provided by you is accurate. Should you wish to update your Data and/or withdraw your consent to our collection, use, and disclosure of your Data, or should you have any feedback or enquiries relating to your Data, please contact us.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    9.	Technical requirements and responsibility
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                9.1.	Users are responsible for ensuring that the technical requirements for access to and use of the respective services are met.
                            </p>
                        </span>
                        <span>
                            <p>
                                9.2.	This applies in particular to the hardware and operating system software used, the connection to the Internet, the firewall settings (if any) and the current browser software. The User shall carry out necessary and reasonable adjustment measures himself/herself and shall bear the costs for the Internet connection in order to be able to access the services.
                            </p>
                        </span>
                        <span>
                            <p>
                                9.3.	Joblinxs does not guarantee that the services offered can actually be used with the User's device.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    10.	Uploading content to our APP
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                10.1.	You irrevocably and unconditionally represent and warrant that any of your content uploaded to our APP complies with our Privacy Policy and the PIPEDA and any other applicable laws.
                            </p>
                        </span>
                        <span>
                            <p>
                                10.2.	You are fully responsible for your content uploaded to our APP. We will not be responsible, or liable to any third party, for:
                            </p>
                            <p>
                                10.2.1.	the content or accuracy of any content or data uploaded by you, by us on your behalf, or any other User of our APP; or
                            </p>
                            <p>
                                10.2.2.	the loss of any content or data (whether in physical or digital form) provided to us by you. You should keep a record of all such content and data.
                            </p>
                            <p>
                                10.3.	We will only use the content uploaded by you for the purposes of providing the Services, carrying out our obligations in this Agreement and any other purpose expressly set out in this Agreement or otherwise agreed between us. We will not otherwise disclose or distribute the content uploaded by you, save for when required by law, a court of competent jurisdiction or any governmental or regulatory authority.
                            </p>
                        </span>
                        <span>
                            <p>
                                10.1.	You irrevocably and unconditionally represent and warrant that any of your content uploaded to our APP complies with our Privacy Policy and the PIPEDA and any other applicable laws.
                            </p>
                        </span>
                        <span>
                            <p>
                                10.3.	We will only use the content uploaded by you for the purposes of providing the Services, carrying out our obligations in this Agreement and any other purpose expressly set out in this Agreement or otherwise agreed between us. We will not otherwise disclose or distribute the content uploaded by you, save for when required by law, a court of competent jurisdiction or any governmental or regulatory authority.
                            </p>
                        </span>
                        <span>
                            <p>
                                10.4.	We may use the content uploaded by you for the purpose of data analytics or to implement artificial intelligence or machine learning. Any such content shall be anonymised and used only for the purposes of improving the Services and our response to Users of the APP.
                            </p>
                        </span>
                        <span>
                            <p>
                                10.5.	We have the right to disclose your identity to any third party claiming that any content posted or uploaded by you to our APP constitutes a violation of their rights under applicable law.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    11.	Contribution License
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                12.	By posting your Contributions to any part of the APP, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image, and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorise sub-licenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.
                            </p>
                        </span>
                        <span>
                            <p>
                                13.	This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.
                            </p>
                        </span>
                        <span>
                            <p>
                                14.	We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the APP.
                            </p>
                        </span>
                        <span>
                            <p>
                                15.	You are solely responsible for your Contributions to the APP, and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
                            </p>
                        </span>
                        <span>
                            <p>
                                16.	We have the right, in our sole and absolute discretion,
                            </p>
                            <p>
                                16.1.	to edit, redact, or otherwise change any Contributions;
                            </p>
                            <p>
                                16.2.	to re-categorize any Contributions to place them in more appropriate locations on the APP; and
                            </p>
                            <p>
                                16.3.	to pre-screen or delete any Contributions at any time and for any reason, without notice.
                            </p>
                        </span>
                        <span>
                            <p>
                                17.	We have no obligation to monitor your Contributions.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    18.	Restrictions
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                18.1.	Except as expressly set out in this Agreement or as permitted by any applicable law, you undertake:
                            </p>
                            <p>
                                18.1.1.	not to reproduce, copy, modify, adapt, translate, publish, display, communicate, transmit, sell, exploit or use the whole or any part of any Service, our APP or any of the contents therein for any commercial or other purposes;
                            </p>
                            <p>
                                18.1.2.	not to disassemble, decompile, reverse-engineer or create derivative works based on the whole or any part of the source code of our APP nor attempt to do any such thing, or to reproduce, display or otherwise provide access to the Services, our APP or any of the contents therein, including but not limited to framing, mirroring, linking, spidering, scraping or any other technological means;
                            </p>
                            <p>
                                18.1.3.	not to provide or otherwise make available our APP in whole or in part (including but not limited to program listings, object and source program listings, object code and source code), in any form to any person without prior written consent from us;
                            </p>
                            <p>
                                18.1.4.	to include our copyright notice on all entire and partial copies you make of our APP on any medium;
                            </p>
                            <p>
                                18.1.5.	to comply with all applicable technology control or export laws and regulations; and
                            </p>
                            <p>
                                18.1.6.	not to disrupt, disable, or otherwise impair the proper working of the Services, our APP, or servers, such as through hacking, cyber-attacks (including but not limited to denial-of-service attacks), tampering or reprogramming.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    19.	Intellectual Property Rights
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                19.1.	You acknowledge that all intellectual property rights in our APP anywhere in the world belong to us, that rights in our APP are licensed (not sold) to you, and that you have no rights in, or to, our APP other than the right to use them in accordance with these Terms.
                            </p>
                        </span>
                        <span>
                            <p>
                                19.2.	Any intellectual property rights in content uploaded by you to our APP shall continue to belong to you or their respective owners. You agree that you grant us a royalty-free and non-exclusive license to use, reproduce, publish, and display such intellectual property rights for the purposes of performing the Services, promotional purposes, internal administrative purposes and any other purposes set out in these Terms, including for the purpose of improving the Services and our responses to Users of the APP.
                            </p>
                        </span>
                        <span>
                            <p>
                                19.3.	You acknowledge that you have no right to have access to our APP in source code form.
                            </p>
                        </span>
                        <span>
                            <p>
                                19.4.	You must not modify the paper or digital copies of any materials you have printed off or downloaded from our APP in any way, and you must not use any illustrations, photographs, sequences, or any graphics separately from any accompanying text.
                            </p>
                        </span>
                        <span>
                            <p>
                                19.5.	You must not use any part of the content on our APP for commercial purposes not specified on our APP without obtaining a license to do so from us or our licensors.
                            </p>
                        </span>
                        <span>
                            <p>
                                19.6.	As a User of the APP, you agree not to:
                            </p>
                            <p>
                                19.6.1.	systematically retrieve data or other content from the APP to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
                            </p>
                            <p>
                                19.6.2.	make any unauthorised use of the APP, including collecting Usernames and/or email addresses of Users by electronic or other means for the purpose of sending unsolicited email, or creating User accounts by automated means or under false pretences.
                            </p>
                            <p>
                                19.6.3.	use the APP to advertise or offer to sell goods and services.
                            </p>
                            <p>
                                19.6.4.	circumvent, disable, or otherwise interfere with security-related features of the APP, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the APP and/or the Content contained therein
                            </p>
                            <p>
                                19.6.5.	engage in unauthorised framing of or linking to the APP.
                            </p>
                            <p>
                                19.6.6.	trick, defraud, or mislead us and other Users, especially in any attempt to learn sensitive account information such as User passwords;
                            </p>
                            <p>
                                19.6.7.	make improper use of our support services or submit false reports of abuse or misconduct.
                            </p>
                            <p>
                                19.6.8.	engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
                            </p>
                            <p>
                                19.6.9.	interfere with, disrupt, or create an undue burden on the APP or the networks or services connected to the APP.
                            </p>
                            <p>
                                19.6.10.	attempt to impersonate another User or person or use the Username of another User.
                            </p>
                            <p>
                                19.6.11.	sell or otherwise transfer your profile.
                            </p>
                            <p>
                                19.6.12.	use any information obtained from the APP in order to harass, abuse, or harm another person.
                            </p>
                            <p>
                                19.6.13.	decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the APP.
                            </p>
                            <p>
                                19.6.14.	attempt to bypass any measures of the APP designed to prevent or restrict access to the APP, or any portion of the APP.
                            </p>
                            <p>
                                19.6.15.	harass, annoy, intimidate, or threaten any of our employees or User engaged in providing any portion of the APP or Services to you.
                            </p>
                            <p>
                                19.6.16.	delete the copyright or other proprietary rights notice from any Content.
                            </p>
                            <p>
                                19.6.17.	copy or adapt the APP’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code. upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the APP or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the APP.
                            </p>
                            <p>
                                19.6.18.	upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “PCMS”).
                            </p>
                            <p>
                                19.6.19.	except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the APP, or using or launching any unauthorised script or other software.
                            </p>
                            <p>
                                19.6.20.	disparage, tarnish, or otherwise harm, in our opinion, us and/or the APP.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    20.	Acceptable Use Policy
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                20.1.	You may use our APP only for lawful purposes.
                            </p>
                        </span>
                        <span>
                            <p>
                                20.2.	You may not use our APP:
                            </p>
                            <p>
                                20.2.1.	in any way that breaches any applicable local or international laws or regulations;
                            </p>
                            <p>
                                20.2.2.	in any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect;
                            </p>
                            <p>
                                20.2.3.	to send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards as set out in our prevailing Terms of Service as amended from time to time; and
                            </p>
                            <p>
                                20.2.4.	to knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar device code designed to adversely affect the operation of any device software or hardware.
                            </p>
                            <p>
                                20.2.5.	You also agree:
                            </p>
                            <p>
                                20.2.6.	not to reproduce, duplicate, copy or re-sell any part of our APP in contravention of the provisions of our Terms; and
                            </p>
                            <p>
                                20.2.6.	not to reproduce, duplicate, copy or re-sell any part of our APP in contravention of the provisions of our Terms; and
                            </p>
                            <p>
                                20.2.7.	not to access without authority, interfere with, damage or disrupt:
                            </p>
                            <p>
                                20.2.8.	any part of our APP;
                            </p>
                            <p>
                                20.2.9.	any equipment or network on which our APP is stored;
                            </p>
                            <p>
                                20.2.10.	any software used in the provision of our APP; or
                            </p>
                            <p>
                                20.2.11.	any equipment or network or software owned or used by any third party.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    21.	Suspension
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                21.1.	We will determine, in our discretion, whether there has been a breach of our Acceptable Use Policy through your use of our APP.
                            </p>
                        </span>
                        <span>
                            <p>
                                21.2.	When a breach of this policy has occurred, we may take such action as we deem appropriate.
                            </p>
                        </span>
                        <span>
                            <p>
                                21.3.	Failure to comply with our Acceptable Use Policy constitutes a material breach of the Terms and Conditions upon which you are permitted to use our APP, and may result in our taking all or any of the following actions:
                            </p>
                            <p>
                                21.3.1.	immediate temporary or permanent cancellation of your right to use our APP;
                            </p>
                            <p>
                                21.3.2.	immediate temporary or permanent removal of any Contribution;
                            </p>
                            <p>
                                21.3.3.	issuance of a warning to you;
                            </p>
                            <p>
                                21.3.4.	legal proceedings against you for reimbursement of all costs on an indemnity basis (including but not limited to reasonable administrative and legal costs) resulting from the breach;
                            </p>
                            <p>
                                21.3.5.	further legal action against you; and/or
                            </p>
                            <p>
                                21.3.6.	disclosure of such information to law enforcement authorities as we reasonably feel is necessary.
                            </p>
                        </span>
                        <span>
                            <p>
                                21.4.	We exclude liability for actions taken in response to breaches of this Acceptable Use Policy . The responses described in this policy are not limited, and we may take any other action we reasonably deem appropriate.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    22.	Submissions
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                22.1.	You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the APP ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                            </p>
                        </span>
                        <span>
                            <p>
                                22.2.	You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    23.	APP Management
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                23.1.	We reserve the right, but not the obligation to:
                            </p>
                            <p>
                                23.1.1.	monitor the APP for violations of these Terms;
                            </p>
                            <p>
                                23.1.2.	take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms, including without limitation, reporting such User to law enforcement authorities;
                            </p>
                            <p>
                                23.1.3.	in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof;
                            </p>
                            <p>
                                23.1.4.	in our sole discretion and without limitation, notice, or liability, to remove from the APP or otherwise disable all files and content that are excessive or are in any way burdensome to our systems;
                            </p>
                            <p>
                                23.1.5.	otherwise manage the APP in a manner designed to protect our rights and property and to facilitate the proper functioning of the APP.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    24.	Modifications And Interruptions
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                24.1.	We reserve the right to change, modify, or remove the contents of the APP at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our APP. We also reserve the right to modify or discontinue all or part of the APP without notice at any time.
                            </p>
                        </span>
                        <span>
                            <p>
                                24.2.	We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the APP.
                            </p>
                        </span>
                        <span>
                            <p>
                                24.3.	We cannot guarantee the APP will be available at all times.
                            </p>
                        </span>
                        <span>
                            <p>
                                24.4.	We may experience hardware, software, or other problems or need to perform maintenance related to the APP, resulting in interruptions, delays, or errors.
                            </p>
                        </span>
                        <span>
                            <p>
                                24.5.	We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the APP at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the APP during any downtime or discontinuance of the APP.
                            </p>
                        </span>
                        <span>
                            <p>
                                24.6.	Nothing in these Terms will be construed to obligate us to maintain and support the APP or to supply any corrections, updates, or releases in connection therewith.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    25.	Availability of the APP
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                25.1.	Our APP is provided “as is” and on an “as available” basis. We give no warranty that our APP will be free of defects and / or faults. To the maximum extent permitted by the law we provide no warranties (express or implied) of fitness for a particular purpose, accuracy of information, compatibility and satisfactory quality.
                            </p>
                        </span>
                        <span>
                            <p>
                                25.2.	Joblinxs accepts no liability for any disruption or non-availability of the APP resulting from external causes including, but not limited to, ISP equipment failure, host equipment failure, communications network failure, power failure, natural events, acts of war or legal restrictions and censorship.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    26.	Corrections
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                There may be information on the APP that contains typographical errors, inaccuracies, or omissions that may relate to the APP, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the APP at any time, without prior notice.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    27.	Privacy
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                27.1.	For the purposes of applicable data protection legislation, Joblinxs will process any personal data you have provided to us in accordance with our Privacy Policy available on the Joblinxs APP or on request from Joblinxs.
                            </p>
                        </span>
                        <span>
                            <p>
                                27.2.	You agree that if you have provided Joblinxs with personal data relating to a third party:
                            </p>
                            <p>
                                27.2.1.	you have in place all necessary appropriate consents and notices to enable lawful transfer such personal data to Joblinxs and
                            </p>
                            <p>
                                27.2.2.	that you have brought to the attention of any such third party the Privacy Notice available on the Joblinxs’s APP or otherwise provided a copy of it to the third party.
                            </p>
                        </span>
                        <span>
                            <p>
                                27.3.	You agree to indemnify Joblinxs in relation to all and any liabilities, penalties, fines, awards, or costs arising from your non-compliance with these requirements.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    28.	Term and Termination
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                28.1.	These Terms and Conditions shall remain in full force and effect while you use the APP. Without limiting any other provision of these Terms, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the APP (including blocking certain IP addresses), to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these Terms or of any applicable law or regulation. We may terminate your use or participation in the APP or delete your account and any content or information that you posted at any time, without warning, in our sole discretion.
                            </p>
                        </span>
                        <span>
                            <p>
                                28.2.	If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party.
                            </p>
                        </span>
                        <span>
                            <p>
                                28.3.	In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    29.	Limitation of Liability
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                29.1.	We are not liable for the completeness, accuracy or correctness of any information uploaded on our APP and any Related Content. You expressly agree that your use of the Services and our APP, including reliance on any Advice, is at your sole risk.
                            </p>
                        </span>
                        <span>
                            <p>
                                29.2.	You agree not to use the Services, our APP and the Related Content for any re-sale purposes, and we have no liability to you, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, arising under or in connection with these Terms (including but not limited to the use of, or inability to use, the Services, our APP or any other website or software) for:
                            </p>
                            <p>
                                29.2.1.	loss of profits, sales, business, or revenue;
                            </p>
                            <p>
                                29.2.3.	loss of anticipated savings;
                            </p>
                            <p>
                                29.2.4.	loss or corruption of data or information;
                            </p>
                            <p>
                                29.2.5.	loss of business opportunity, goodwill or reputation; or
                            </p>
                            <p>
                                29.2.6.	any other indirect or consequential loss or damage
                            </p>

                        </span>
                        <span>
                            <p>
                                29.3.	Nothing in these Terms shall limit or exclude our liability for:
                            </p>
                            <p>
                                29.3.1.	death or personal injury resulting from our negligence;
                            </p>
                            <p>
                                29.3.2.	fraud; and/or
                            </p>
                            <p>
                                29.3.3.	any other matter in respect of which we are prohibited under applicable law from limiting or excluding our liability.
                            </p>
                        </span>
                        <span>
                            <p>
                                29.4.	Our APP is not intended to serve a record-keeping function and we shall not be liable for any loss of data or content.
                            </p>
                        </span>
                        <span>
                            <p>
                                29.5.	These Terms set out the full extent of our obligations and liabilities in respect of the supply of the Services and our APP. Except as expressly stated in these Terms, there are no conditions, warranties, representations or other terms, express or implied, that are binding on us. Any condition, warranty, representation or other term concerning the supply of the Services and our APP which might otherwise be implied into, or incorporated in, these Terms whether by statute or otherwise, is excluded to the fullest extent permitted by law.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    30.	No Waiver
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                In the event that any party to these Terms fails to exercise any right or remedy contained herein, this shall not be construed as a waiver of that right or remedy.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    31.	Previous Terms and Conditions
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                In the event of any conflict between these Terms and any prior versions thereof, the provisions of these Terms shall prevail unless it is expressly stated otherwise.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                <h3>
                                    32.	Law and Jurisdiction
                                </h3>
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                These Terms of Service and the relationship between you and Joblinxs shall be governed by and construed in accordance with the Law of Canada and Joblinxs and you agree to submit to the exclusive jurisdiction of the Courts of Toronto.
                            </p>
                        </span>
                    </Col>


                </Row>
            </Container>

        </>
    );
};

export default TermsandConditions;
