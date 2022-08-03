import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
    Button, Card, Col, Container,
    Image, Row
} from "@themesberg/react-bootstrap";
import { useHistory } from "react-router-dom";
import moment from "moment";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import DetailHeading from "../../components/DetailHeading";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";

const JobDetails = (item) => {
    const history = useHistory();
    const location = useLocation();
    // const [jobdata] = useState(location.state.item);
    const {
        location: { state },
    } = history;


    return (
        <>
            <Navbar module={"Job Detail"} />
            <Container>
                <Row>
                    <div className="mt-2 mb-3 d-flex justify-content-end">
                        {/* <Link
              className="text-white fw-bold"
              to={Routes.UserManagement.path}
            > */}
                        <Button variant="primary" onClick={() => history.goBack()}>
                            Back
                        </Button>
                        {/* </Link> */}
                    </div>
                    <Col xs={12} xl={4}>
                        <Row>
                            <Col xs={12}>
                                <Card
                                    border="light"
                                    className="text-center p-0 mb-4 profileView"
                                >
                                    <Card.Body className="pb-2">
                                        <Card.Img
                                            // src={Profile1}
                                            src={
                                                item?.location?.state?.item?.image ? item?.location?.state?.item?.image : Profile1
                                            }
                                            alt="Neil Portrait"
                                            className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                                        />
                                        <div className="border_bottom pb-3 mb-4">
                                            <Card.Title>{item?.location?.state?.item?.name ? item?.location?.state?.item?.name : " --"}</Card.Title>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} xl={8}>
                        <Row>
                            <Col xs={12}>
                                <Card
                                    border="light"
                                    className="text-left p-0 mb-4 profileView info"
                                >
                                    <Card.Body className="pb-3">
                                        <div className="border_bottom pb-2 mb-4">
                                            <Card.Title className="text-primary">
                                                Job Information
                                            </Card.Title>
                                            <DetailHeading
                                                heading={"Full Name"}
                                                value={item?.location?.state?.item?.name ? item?.location?.state?.item?.name : " --"}
                                            />

                                            <DetailHeading
                                                heading={"description"}
                                                value={
                                                    item?.location?.state?.item?.description
                                                        ? item?.location?.state?.item?.description
                                                        : " --"
                                                }
                                            />



                                            <DetailHeading
                                                heading={"rate"}
                                                value={item?.location?.state?.item?.rate ? item?.location?.state?.item?.rate : " --"}
                                            />

                                            <DetailHeading
                                                heading={"experienceRequired"}
                                                value={item?.location?.state?.item?.experienceRequired ? item?.location?.state?.item?.experienceRequired : " --"}
                                            />

                                            <DetailHeading
                                                heading={"toolsNeeded"}
                                                value={
                                                    item?.location?.state?.item?.toolsNeeded ? item?.location?.state?.item?.toolsNeeded : " --"
                                                }
                                            />

                                            <DetailHeading
                                                heading={"Days"}
                                                value={
                                                    item?.location?.state?.item?.days
                                                        ? item?.location?.state?.item?.days
                                                        : " --"
                                                }
                                            />
                                            <DetailHeading
                                                heading={"Hours"}
                                                value={
                                                    item?.location?.state?.item?.hours
                                                        ? item?.location?.state?.item?.hours
                                                        : " --"
                                                }
                                            />
                                            <DetailHeading
                                                heading={"NO of Providers"}
                                                value={
                                                    item?.location?.state?.item?.noOfProviders
                                                        ? item?.location?.state?.item?.noOfProviders
                                                        : " --"
                                                }
                                            />
                                            <DetailHeading
                                                heading={"Job Nature"}
                                                value={
                                                    item?.location?.state?.item?.jobNature
                                                        ? item?.location?.state?.item?.jobNature?.name
                                                        : " --"
                                                }
                                            />
                                            <DetailHeading
                                                heading={"Job Type"}
                                                value={
                                                    item?.location?.state?.item?.jobType
                                                        ? item?.location?.state?.item?.jobType?.name
                                                        : " --"
                                                }
                                            />
                                            <DetailHeading
                                                heading={"Location"}
                                                value={
                                                    item?.location?.state?.item?.location
                                                        ? item?.location?.state?.item?.location[0]
                                                        : " --"
                                                }
                                            />


                                        </div>






                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </>
    );
};
export default JobDetails;
