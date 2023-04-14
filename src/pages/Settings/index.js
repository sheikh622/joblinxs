import { Card, Col, Container, Form, Row } from "@themesberg/react-bootstrap";
import { set } from "date-fns";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getONNotification, getUserNotification, getUpgradeBusiness } from "../../Redux/settings/actions";
import Spinner from "../../components/spinner";
const Settings = (props, row) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        location: { state },
    } = history;
    const login = useSelector((state) => state.auth.Auther);
    const NotificationData = useSelector((state) => state?.PushNotification?.Notification);
    const [data, setData] = useState();
    const [loader, setLoader] = useState(true);
    const [blockUser, setBlockUser] = useState();
    const [upgrade, setUpgrade] = useState(false);
    useEffect(() => {
        if (NotificationData !== undefined) {
            setData(NotificationData)
            setBlockUser(NotificationData.NotificationKey)
        }
    }, [NotificationData])
    const handleJobAction = (blockUser) => {
        setBlockUser(!blockUser)
        dispatch(
            getONNotification({
                userId: login.id,
                isShowNotification: !blockUser,
                setLoader: setLoader,

            })
        );
    }
    useEffect(() => {
        dispatch(
            getUserNotification({
                userId: login.id,
                setLoader: setLoader,

            })
        );
    }, []);
    const handleUpgradeBusiness = (upgrade) => {
        setUpgrade(!upgrade)
        dispatch(
            getUpgradeBusiness({
                userId: login.id,
                role: login?.role?.name,
                setLoader: setLoader,
            })
        );
    };
    return (
        <>
            <Navbar module={"Settings"} />
            <div className="mx-5">
                {loader ? (
                    <Spinner />
                ) : (
                    <>
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
                                                checked={blockUser}
                                                onClick={(e) => {
                                                    handleJobAction(blockUser);
                                                }}
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
                                        <Link className="fw-bold" target="blank" to={`/terms`}>
                                            <Card.Title className="text-primary">
                                                Terms and Conditions
                                            </Card.Title>
                                        </Link>
                                    </div>
                                    <div className="border_bottom pb-2 mb-4">
                                        <Link className="fw-bold" target="blank" to={`/privacy`}>
                                            <Card.Title className="text-primary">
                                                Privacy Policy
                                            </Card.Title>
                                        </Link>
                                    </div>
                                    {login?.role?.name == "seeker"
                                        ? <div className="border_bottom pb-2 mb-4">
                                            <Card.Title className="text-primary d-flex justify-content-between">
                                                Upgrade to Business
                                                <Form.Switch
                                                    type="switch"
                                                    defaultValue="fixed"
                                                    label=""
                                                    className="text-center cursorPointer display-inline-block"
                                                    name="upgradeToBusiness"
                                                    {...label}
                                                    checked={upgrade}
                                                    onClick={(e) => {
                                                        handleUpgradeBusiness(upgrade);
                                                    }}
                                                />
                                            </Card.Title>
                                        </div>
                                        : ""}
                                </Card.Body>

                            </Col>

                        </Row>
                    </>
                )}
            </div>
        </>
    );
};

export default Settings;
