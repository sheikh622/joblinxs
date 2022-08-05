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
    // const logHours = item?.location?.state;
    const Details = item?.location?.state?.item?.user;
    const params = useLocation();
    let jobId = params.pathname.split("/")[2];
    // const logHours = useSelector(
    //     (state) => state?.addJob?.logHours[0]?.log_hours);

    // const [adminId, setAdminId] = useState(0);
    // const [showDefault, setShowDefault] = useState(false);
    // useEffect(() => {
    //     dispatch(jobById({ id: jobId }))
    // }, []);
    // useEffect((id) => {
    //     dispatch(
    //         getLogHours({
    //             id: jobId,
    //         })
    //     );
    // }, []);
    // const handlefalse = () => {
    //     setShowDefault(false)
    // };
    // const handleClick = (item) => {

    //     dispatch(
    //         getApprovedHours({
    //             id: item.id,
    //             status: item.status,
    //         })
    //     )
    // }

    return (
        <>
            <Navbar module={"User Detail"} />
            <Container>
                {/* <Row>
                 
                                    <Col lg={4} md={6} xs={12} className="pb-3 mb-3">
                                        <Card border="light" className="card-box-shadow py-3 px-4 mb-3">


                                            <div className="detailed">
                                                <Image src={Details?.profileImg ? Details?.profileImg : ""} className="navbar-brand-light detailImg" />
                                                <h3 className="mb-1 mt-3">{Details?.fullName ? Details?.fullName : ""}</h3>
                                                <h5 className="text-gray">{item?.profileType ? item.profileType : ""}</h5>
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
                                                <DetailHeading heading={"city"} value={Details?.city ? Details?.city : "-"} />
                                                <DetailHeading heading={"province"} value={Details?.province ? Details?.province : "-"} />
                                                <DetailHeading heading={"volunteeringHistory"} value={Details?.volunteeringHistory ? Details?.volunteeringHistory : "-"} />
                                                <DetailHeading heading={"toolsAvailable"} value={Details?.toolsAvailable ? Details?.toolsAvailable : "-"} />
                                                <DetailHeading heading={"transportationAvailable"} value={Details?.transportationAvailable ? Details?.transportationAvailable : "-"} />
                                                <DetailHeading heading={"transportationAvailable"} value={Details?.transportationAvailable ? Details?.transportationAvailable : "-"} />
                                                <DetailHeading heading={"transportationAvailable"} value={Details?.transportationAvailable ? Details?.transportationAvailable : "-"} />


                                            </Card.Body>
                                            <Card.Body className="pb-2 border_bottom mb-1">
                                                <DetailHeading heading={"Total Amount"} value={Details?.total_Amount ? Details?.total_Amount : "-"} />
                                            </Card.Body>
                                        </Card>

                                    </Col>
                                    
                                
                </Row> */}
            </Container>

        </>
    );
};
export default LogHourDetails;
