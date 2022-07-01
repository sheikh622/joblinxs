import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
// import Profile from "../../assets/img/team/profile.png";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import RecommendCard from "../../components/RecommendCard";
import DetailHeading from "../../components/DetailHeading";
import { useDispatch, useSelector } from "react-redux";
// saga actions here
// import { getProfile } from "../../Redux/ /actions";
import { deleteAddJob } from "../../Redux/addJob/actions";
const MyJobDetails = (item) => {
    const dispatch = useDispatch();
    const login = useSelector((state) => state.auth.Auther);
    // const getById = useSelector((state) => state.ProfileReducer.profile);
    const JobList = useSelector(
        (state) => state?.addJob?.getJob?.jobs
    );
    const [adminId, setAdminId] = useState(0);
    const [showDefault, setShowDefault] = useState(false);
    // useEffect(() => {
    //   dispatch(
    //   //   getProfile({
    //   //     id: login?.id,
    //   //   })
    //   );
    // }, []);
    const handleDelete = () => {
        dispatch(
            deleteAddJob({
                jobId: adminId,
            })
        );
    };
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
                                <Image src={JobList?.image} className="navbar-brand-light detailImg" />
                                <h3 className="mb-1 mt-3">{JobList?.fullName}</h3>
                                <h5 className="text-gray">{JobList?.profileType}</h5>
                                <span className="starIcon">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className="text-gray d-block">(7Reviews)</span>
                                <span className="text-gray d-block mt-2">
                                    Overall Jobs: <span className="text-black">25</span>
                                </span>
                                <span className="text-gray d-block mt-2">
                                    Plumber Jobs: <span className="text-black">22</span>
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
                                <DetailHeading heading={"JobRequirement"} value={JobList?.requirement ? JobList?.requirement : "-"} />
                                <DetailHeading heading={"ToolsNeeded"} value={JobList?.toolsNeeded ? JobList?.toolsNeeded : "-"} />
                                <DetailHeading heading={"Payment Type"} value={JobList?.address ? JobList?.address : "-"} />
                                <DetailHeading heading={"Rate"} value={JobList?.city ? JobList?.city : "-"} />
                                <DetailHeading heading={"TimeRequired"} value={JobList?.province ? JobList?.province : "-"} />
                                <DetailHeading heading={"Job Type"} value={JobList?.postalCode ? JobList?.postalCode : "-"} />
                                <DetailHeading heading={"Job Nature"} value={JobList?.postalCode ? JobList?.postalCode : "-"} />
                                <DetailHeading heading={"Providers Required"} value={JobList?.postalCode ? JobList?.postalCode : "-"} />
                                <DetailHeading heading={"Experience Required"} value={JobList?.postalCode ? JobList?.postalCode : "-"} />
                            </Card.Body>

                            <Card.Body className="pb-2 border_bottom mb-1 d-flex justify-content-between align-items-baseline">
                                <Card.Text className="text-black mb-2">
                                    Job Applicants
                                </Card.Text>
                                <FontAwesomeIcon color="#12499C" icon={faChevronRight} />
                            </Card.Body>

                            <Card.Body className="mb-2 d-flex justify-content-between align-items-baseline">
                                <Card.Text className="text-black mb-2">
                                    Primary and Secondary Applicants
                                </Card.Text>
                                <FontAwesomeIcon color="#12499C" icon={faChevronRight} />
                            </Card.Body>
                        </Card>
                        <Link className="fw-bold" to={Routes.CreateJob.path}>
                            <div class="d-grid gap-2 col-3 mx-auto">
                                <Button
                                    variant="primary"
                                    color="dark"
                                    size="lg"
                                    className="mt-2 me-1"
                                >
                                    Edit Job
                                </Button>
                            </div>
                        </Link>
                        <div class="d-grid gap-2 col-3 mx-auto">
                            <Button
                                variant="primary"
                                color="dark"
                                size="lg"
                                className="mt-2 me-1"
                                onClick={() => {
                                    setAdminId(item.id)
                                    setShowDefault(true);
                                }
                                }
                            >
                                Delete Job
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal as={Modal.Dialog} centered show={showDefault} onHide={handlefalse} >
                <Modal.Header>
                    <Modal.Title className="h5">
                        Delete User
                    </Modal.Title>
                    <Button variant="close" aria-label="Close" onClick={handlefalse} />
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group>
                            Are you sure you want to delete this Job?
                        </Form.Group>
                        <Form.Group>
                            <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                                <Button
                                    variant="primary"
                                    onHide={handlefalse}
                                    color="dark"
                                    size="sm"
                                    // type="submit"
                                    onClick={() => {
                                        handleDelete();
                                        handlefalse();
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    );
};
export default MyJobDetails;
