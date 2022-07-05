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
// import Profile from "../../assets/img/team/profile.png";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import RecommendCard from "../../components/RecommendCard";
import DetailHeading from "../../components/DetailHeading";
import { useDispatch, useSelector } from "react-redux";
// saga actions here
// import { getProfile } from "../../Redux/ /actions";
import { deleteAddJob } from "../../Redux/addJob/actions";
const MyJobDetails = (item, props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const login = useSelector((state) => state.auth.Auther);
    // const getById = useSelector((state) => state.ProfileReducer.profile);
    // const JobList = useSelector(
    //     (state) => state?.addJob?.getJob?.jobs
    // );
    const params = useLocation();
    let jobId = params.pathname.split("/")[2];
    const SingleId = useSelector((state) => state?.addJob?.jobById
    );
    console.log("SingleId",SingleId)
    const [adminId, setAdminId] = useState(0);
    const [showDefault, setShowDefault] = useState(false);
    useEffect(() => {
      console.log(jobId)
      dispatch(jobById({id:jobId}))
    }, []);
    const handleDelete = (id) => {
        dispatch(
            deleteAddJob({
                jobId: adminId,
            })
        );
    };
    const handlefalse = () => {
        setShowDefault(false)
    };
    //       const handleSingleId = (id) => {
    //     dispatch(
    //       jobById({
    //         id: item.id
    //       })
    //     )
    //   }
    const handleEdit =()=>{
        history.push(`/updateJob/${jobId}`)
    }

    return (
        <>
            <Navbar module={"Job Detail"} />
            <Container>
                <Row>
                    <Col lg={4} md={6} xs={12} className="pb-3 mb-3">
                        <Card border="light" className="card-box-shadow py-3 px-4 mb-3">
                            <div className="detailed">
                                <Image src={SingleId?.image ? SingleId.image:""} className="navbar-brand-light detailImg" />
                                <h3 className="mb-1 mt-3">{SingleId?.name ? SingleId.name :""}</h3>
                                <h5 className="text-gray">{SingleId?.profileType ? SingleId.profileType:""}</h5>
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
                                <DetailHeading heading={"JobRequirement"} value={SingleId?.requirement ? SingleId.requirement : "-"} />
                                <DetailHeading heading={"ToolsNeeded"} value={SingleId?.toolsNeeded ? SingleId.toolsNeeded : "-"} />
                                <DetailHeading heading={"Payment Type"} value={SingleId?.paymentType ? SingleId.paymentType : "-"} />
                                <DetailHeading heading={"Rate"} value={SingleId?.Rate ? SingleId.Rate : "-"} />
                                <DetailHeading heading={"TimeRequired"} value={SingleId?.days ? SingleId.days : "-"} />
                                <DetailHeading heading={"Job Type"} value={SingleId?.jobType ? SingleId.jobType?.name :"-"} />
                                <DetailHeading heading={"Job Nature"} value={SingleId?.jobNature ? SingleId.jobNature : "-"} />
                                <DetailHeading heading={"Providers Required"} value={SingleId?.noOfProviders ? SingleId.noOfProviders : "-"} />
                                <DetailHeading heading={"Experience Required"} value={SingleId?.experienceRequired ? SingleId.experienceRequired : "-"} />
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
                        {/* <Link className="fw-bold" to={Routes.CreateJob.path}> */}
                        <div>
                            <div class="d-grid gap-2 col-3 mx-auto">
                                <Button
                                    variant="primary"
                                    color="dark"
                                    size="lg"
                                    className="mt-2 me-1"
                                    onClick={handleEdit}
                                >
                                    Edit Job
                                </Button>
                            </div>
                        </div>
                        {/* </Link> */}
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
