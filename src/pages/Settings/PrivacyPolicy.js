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
                    <Col xs={9} xl={9}>

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
                                Principles of data processing
                            </Card.Title>
                        </span>
                        <span>
                            <p>
                                We process users' Personal Information only in compliance with the relevant data protection regulations. User data is only processed if the following legal permissions exist:
                            </p>
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
                            <p>
                                The above legal bases are set out as follows:
                            </p>
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
                                Installation of our APP
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
                            <p>
                                As far as we are aware, Google collects and processes the following data;
                            </p>
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
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default PrivacyPolicy;
