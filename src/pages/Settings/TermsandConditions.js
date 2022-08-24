import { Container, Col, Card, Row, Form, Button } from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";


const TermsandConditions = (props, row) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const dispatch = useDispatch();
    const history = useHistory();



    return (
        <>
            <Navbar module={"Terms and Conditions"} />
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
                    <Col xs={9} xl={9}>

                        <span>
                            <p>
                                The following Terms and Conditions (“Terms”) shall apply to all business relations between Joblinxs Inc of 318 Mclevin Ave, Toronto, ON, M1B 6C4 (hereinafter “Joblinxs”, “we” or “us”) and you the User of our iOS and Android mobile application (hereinafter “APP”), and our services. Please read these Terms carefully before using our APP. These Terms constitute a legal agreement between you and Joblinxs governing the use of our APP and our services. We license use of our APP and our services to you on the basis of these Terms.
                            </p>
                        </span>
                        <span>
                            <Card.Title>
                                1.	General Terms
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
                                2.	Your relationship with Joblinxs
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
                                3.	Apple and Android Devices
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
                                4.	Prices and Payment
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
                                5.	Service Provider Renumeration and Payout
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
                                6.	User Representations
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
                    </Col>


                </Row>
            </Container>

        </>
    );
};

export default TermsandConditions;
