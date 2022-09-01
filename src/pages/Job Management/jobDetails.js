import { Card, Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import DetailHeading from "../../components/DetailHeading";
import Navbar from "../../components/Navbar";

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
            <Col xs={12} xl={12} className={'d-flex justify-content-start mb-2'}>
                <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => history.goBack()}>
                    <path d="M9.79591 14.8435L9.79557 14.8439C9.56284 15.0818 9.2503 15.2 8.93911 15.2C8.65838 15.2 8.37589 15.1036 8.15012 14.9076L8.14971 14.9073L1.18041 8.82491C0.939515 8.61471 0.799112 8.31587 0.799112 7.99906C0.799112 7.68333 0.93963 7.38454 1.18041 7.17445L8.14971 1.09206L8.15005 1.09176C8.62347 0.6805 9.35494 0.706129 9.79539 1.15531L9.79539 1.15531L9.79591 1.15584C10.2386 1.6107 10.2057 2.32402 9.72866 2.74114L9.72851 2.74128L3.7035 7.99908L9.72853 13.2581L9.72866 13.2582C10.2057 13.6753 10.2386 14.3887 9.79591 14.8435Z" fill="#12499C" stroke="#12499C" stroke-width="0.4" />
                </svg>

            </Col>

            <Container>
                <Row>
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
