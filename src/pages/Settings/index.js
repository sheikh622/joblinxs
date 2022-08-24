import { Container, Col, Card, Row, Form } from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";


const Settings = (props, row) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const dispatch = useDispatch();
    const history = useHistory();
    const [blockUser, setBlockUser] = useState();
    // useEffect(() => {
    //     setBlockUser(row.isActive);
    // }, [row.isActive]);

    return (
        <>
            <Navbar module={"Settings"} />
            <Container>
                <Row>
                    <Col xs={12} xl={12}>
                        <Card.Body className="">
                            <div className="border_bottom pb-2 mb-4">
                                <Card.Title className="text-primary d-flex justify-content-between">
                                    Push Notification
                                    <Form.Switch
                                        type="switch"
                                        defaultValue="fixed"
                                        label=""
                                        className="text-center cursorPointer display-inline-block"
                                        name="paymentType"
                                        {...label}
                                        // checked={item.isActive}
                                        onChange={(e) => { }}
                                    />
                                </Card.Title>
                            </div>
                            <div className="border_bottom pb-2 mb-4">
                                <Link className="fw-bold" to={`/changePassword`}>
                                    <Card.Title className="text-primary">
                                        Change Password
                                    </Card.Title>
                                </Link>
                            </div>
                            <div className="border_bottom pb-2 mb-4">
                                <Link className="fw-bold" target="blank" to={`/TermsandConditions`}>
                                    <Card.Title className="text-primary">
                                        Terms and Conditions
                                    </Card.Title>
                                </Link>
                            </div>
                            <div className="border_bottom pb-2 mb-4">
                            <Link className="fw-bold" target="blank" to={`/PrivacyPolicy`}>
                                <Card.Title className="text-primary">
                                    Privacy Policy
                                </Card.Title>
                                </Link>
                            </div>

                        </Card.Body>

                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Settings;
