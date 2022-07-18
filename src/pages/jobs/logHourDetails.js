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
import { deleteAddJob, getLogHours } from "../../Redux/addJob/actions";

const LogHourDetails = (item, props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useLocation();
    let jobId = params.pathname.split("/")[2];
    // const SingleId = useSelector((state) => state?.addJob?.jobById
    // );
    const logHours = useSelector(
        (state) => state?.addJob?.logHours);
    console.log("loghours", logHours)
    const [adminId, setAdminId] = useState(0);
    const [showDefault, setShowDefault] = useState(false);
    // useEffect(() => {
    //     dispatch(jobById({ id: jobId }))
    // }, []);
   
    const handlefalse = () => {
        setShowDefault(false)
    };
    return (
        <>
            <Navbar module={"Job Detail"} />
            <Container>
                <Row>
                    <Col lg={4} md={6} xs={12} className="pb-3 mb-3">
                        <Card border="light" className="card-box-shadow py-3 px-4 mb-3">
                            <div className="detailed">
                                <Image src={logHours?.image ? logHours.image : ""} className="navbar-brand-light detailImg" />
                                <h3 className="mb-1 mt-3">{logHours?.name ? logHours.name : ""}</h3>
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
                                <div className="pb-2 d-flex justify-content-between align-items-baseline">
                                    <Card.Title className="text-primary">
                                        User Information
                                    </Card.Title>
                                </div>
                                <DetailHeading heading={"JobRequirement"} value={logHours?.requirement ? logHours?.requirement : "-"} />
                                <DetailHeading heading={"ToolsNeeded"} value={logHours?.toolsNeeded ? logHours?.toolsNeeded : "-"} />
                                <DetailHeading heading={"Payment Type"} value={logHours?.paymentType ? logHours?.paymentType : "-"} />
                                <DetailHeading heading={"Rate"} value={logHours?.rate ? logHours?.rate : "-"} />
                                <DetailHeading heading={"TimeRequired"} value={logHours?.days ? logHours?.days : "-"} />
                                <DetailHeading heading={"Job Type"} value={logHours?.jobType ? logHours.jobType?.name : "-"} />
                                
                            </Card.Body>

                        </Card>
                        
                    </Col>
                </Row>
            </Container>
          
        </>
    );
};
export default LogHourDetails;
