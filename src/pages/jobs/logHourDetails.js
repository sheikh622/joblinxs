import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    useLocation
} from "react-router-dom";
import {
    Container,
    Image,
    Col,
    Row,
    Card,
    Button,
    Dropdown,
    ButtonGroup,
    Modal, Form
} from "@themesberg/react-bootstrap";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faChevronRight,
    faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
import { jobById } from "../../Redux/addJob/actions";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import RecommendCard from "../../components/RecommendCard";
import DetailHeading from "../../components/DetailHeading";
import { useDispatch, useSelector } from "react-redux";
import { getLogHours, getApprovedHours } from "../../Redux/addJob/actions";

const LogHourDetails = (item, props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        location: { state },
    } = history;
 
    const logHours = item?.location?.state;

    const params = useLocation();

    let jobId = params.pathname.split("/")[2];
    const [adminId, setAdminId] = useState(0);
    const [showDefault, setShowDefault] = useState(false);
    
    useEffect((id) => {
        dispatch(
            getLogHours({
                id: jobId,
            })
        );
    }, []);
    const handleClick = (item) => {
        dispatch(
            getApprovedHours({
                id: item.id,
                status: item.status,
            })
        )
    }
    return (
        <>
            <Navbar module={"Log Hours Detail"} />
            <Container>
                <Row>

                    <Col lg={4} md={6} xs={12} className="pb-3 mb-3">
                        <Card border="light" className="card-box-shadow py-3 px-4 mb-3">


                            <div className="detailed">
                                <Image src={logHours?.users?.profileImg ? logHours?.users?.profileImg : ""} className="navbar-brand-light detailImg" />
                                <h3 className="mb-1 mt-3">{logHours?.users?.fullName ? logHours.users?.fullName : ""}</h3>
                                <h5 className="text-gray">{logHours?.profileType ? logHours.profileType : ""}</h5>
                                <span className="starIcon">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={8} md={6} xs={12} className="pb-3 mb-3">
                        <Card
                            border="light"
                            className="text-left p-0 mb-4 profileView info"
                        >
                            <Card.Body className="pb-2 border_bottom mb-1">
                                <div className="pb-2 d-flex justify-content-between align-logHourss-baseline">
                                    <Card.Title className="text-primary">
                                        Logged Hours
                                    </Card.Title>
                                </div>
                                <DetailHeading heading={"Hours Logged"} value={logHours?.requirement ? logHours?.requirement : "-"} />
                                <DetailHeading heading={"Job Rate"} value={logHours?.rate ? logHours?.rate : "-"} />
                                <DetailHeading heading={"Status"} value={logHours?.status ? logHours?.status : "-"} />
                                <DetailHeading heading={"TimeRequired"} value={logHours?.days ? logHours?.days : "-"} />
                            </Card.Body>
                            <Card.Body className="pb-2 border_bottom mb-1">
                                <DetailHeading heading={"Total Amount"} value={logHours?.total_Amount ? logHours?.total_Amount : "-"} />
                            </Card.Body>
                        </Card>

                    </Col>

                    {logHours?.status == "pending" && (
                        <>
                            <div>
                                <div class="d-grid gap-2 col-3 mx-auto">
                                    <Button
                                        variant="primary"
                                        color="dark"
                                        size="lg"
                                        className="mt-2 me-1"
                                        onClick={() => handleClick({ id: logHours.id, status: "Accepted" })}
                                    >
                                        Accept
                                    </Button>
                                </div>
                                <div class="d-grid gap-2 col-3 mx-auto">
                                    <Button
                                        variant="primary"
                                        color="dark"
                                        size="lg"
                                        className="mt-2 me-1"
                                        onClick={() => handleClick({ id: logHours.id, status: "Rejected" })}
                                    >
                                        Decline
                                    </Button>
                                </div>
                            </div>

                        </>
                    )}

                </Row>
            </Container>

        </>
    );
};
export default LogHourDetails;
