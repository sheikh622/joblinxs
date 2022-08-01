import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import {
  Container,
  Image,
  Col,
  Row,
  Card,
  Button,
  Dropdown,
  ButtonGroup,
  Modal,
  Form,
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
import { deleteAddJob } from "../../Redux/addJob/actions";
const MyJobDetails = (item, props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useLocation();
  let jobId = params.pathname.split("/")[2];
  const SingleId = useSelector((state) => state?.addJob?.jobById);
  const [showDefault, setShowDefault] = useState(false);
  useEffect(() => {
    dispatch(jobById({ id: jobId }));
  }, []);
  const handleDelete = (id) => {
    dispatch(
      deleteAddJob({
        jobId: jobId,
        setShowDefault: setShowDefault,
        history: history,
      })
    );}
    console.log(SingleId)
    const [adminId, setAdminId] = useState(0);
  
    useEffect(() => {
        dispatch(jobById({ id: jobId }))
    }, []);
    // const handleDelete = (id) => {
    //     dispatch(
    //         deleteAddJob({
    //             jobId: jobId,
    //             setShowDefault: setShowDefault,
    //             history: history
    //         })
    //     );
    // };
    const handlefalse = () => {
        setShowDefault(false)
    };
    const handleEdit = () => {
        history.push(`/updateJob/${jobId}`)
    }
    // const handleClick = () => {
        //     dispatch(
        //         getLogHours({
        //             jobId: jobId,
        //         })
        //     )
        // }

  // const handlefalse = () => {
  //   setShowDefault(false);
  // };
  // const handleEdit = () => {
  //   history.push(`/updateJob/${jobId}`);
  // };
  const profileCard = () => {
    return (
      <div className="detailed">
        <Image
          src={SingleId?.image ? SingleId.image : ""}
          className="navbar-brand-light detailImg"
        />
        <h3 className="mb-1 mt-3">{SingleId?.name ? SingleId.name : ""}</h3>
        <h5 className="text-gray">
          {SingleId?.profileType ? SingleId.profileType : ""}
        </h5>
        <span className="starIcon">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>
    );
  };
  return (
    <>
      <Navbar module={"Job Detail"} />
      <Container>
        <Row>
          {SingleId.createdBy === "seeker" && (
            <Col lg={4} md={6} xs={12} className="pb-3 mb-3">
              <Card border="light" className="card-box-shadow py-3 px-4 mb-3">
               { profileCard()}
              </Card>
            </Col>
          )}

          <Col
            lg={SingleId.createdBy === "provider" ? 12 : 8}
            md={SingleId.createdBy === "provider" ? 12 : 6}
            xs={12}
            className="pb-3 mb-3"
          >
            <Card
              border="light"
              className="text-left p-0 mb-4 profileView info p-3"
            >
              {SingleId.createdBy === "provider" && profileCard()}
              <Card.Body className="pb-2 border_bottom mb-1">
                <div className="pb-2 d-flex justify-content-between align-items-baseline">
                  <Card.Title className="text-primary">
                    User Information
                  </Card.Title>
                </div>
                {SingleId.createdBy === "seeker" && (
                  <>
                    <DetailHeading
                      heading={"JobRequirement"}
                      value={
                        SingleId?.requirement ? SingleId?.requirement : "-"
                      }
                    />
                    <DetailHeading
                      heading={"ToolsNeeded"}
                      value={
                        SingleId?.toolsNeeded ? SingleId?.toolsNeeded : "-"
                      }
                    />
                  </>
                )}

                <DetailHeading
                  heading={"Payment Type"}
                  value={SingleId?.paymentType ? SingleId?.paymentType : "-"}
                />
                <DetailHeading
                  heading={"Rate"}
                  value={SingleId?.rate ? SingleId?.rate : "-"}
                />
                <DetailHeading
                  heading={"TimeRequired"}
                  value={SingleId?.days ? SingleId?.days : "-"}
                />
                <DetailHeading
                  heading={"Job Type"}
                  value={SingleId?.jobType ? SingleId.jobType?.name : "-"}
                />
                <DetailHeading
                  heading={"Job Nature"}
                  value={SingleId?.jobNature ? SingleId?.jobNature?.name : "-"}
                />
                <DetailHeading
                  heading={"Location"}
                  value={SingleId?.location ? SingleId?.location?.[0] : "-"}
                />
                {SingleId.createdBy === "seeker" && (
                  <>
                    <DetailHeading
                      heading={"Providers Required"}
                      value={
                        SingleId?.noOfProviders ? SingleId.noOfProviders : "-"
                      }
                    />
                    <DetailHeading
                      heading={"Experience Required"}
                      value={
                        SingleId?.experienceRequired
                          ? SingleId.experienceRequired
                          : "-"
                      }
                    />
                  </>
                )}
              </Card.Body>
              {SingleId.createdBy === "seeker" ? (
                <>
                  <Link
                    className="text-white fw-bold"
                    to={`/Applicants/${jobId}`}
                  >
                    <Card.Body className="pb-2 border_bottom mb-1 d-flex justify-content-between align-items-baseline">
                      <Card.Text className="text-black mb-2">
                        Job Applicants
                      </Card.Text>
                    </Card.Body>
                  </Link>
                  <Link
                    className="text-white fw-bold"
                    to={`/LogHours/${jobId}`}
                  >
                    <Card.Body className="pb-2 border_bottom mb-1 d-flex justify-content-between align-items-baseline">
                      <Card.Text className="text-black mb-2">
                        Log Hours
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </>
              ):(
                <>
                <div>
                  <div class="d-grid gap-2 col-3 mx-auto my-2">
                    <Button
                      variant="primary"
                      color="dark"
                      size="lg"
                      className="mt-2 me-1"
                      onClick={handleEdit}
                    >
                      Hire Now
                    </Button>
                  </div>
                </div>
                <div class="col-12 mx-auto text-center my-2">
                  <a href={`/detailProvider/${SingleId?.user?.id}`}>
                    View Profile
                  </a>
                </div>
              </>
              )}
            </Card>
            {SingleId.createdBy === "seeker" && (
              <>
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
                <div class="d-grid gap-2 col-3 mx-auto">
                  <Button
                    variant="primary"
                    color="dark"
                    size="lg"
                    className="mt-2 me-1"
                    onClick={() => {
                      // setAdminId(item.id)
                      setShowDefault(true);
                    }}
                  >
                    Delete Job
                  </Button>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handlefalse}>
        <Modal.Header>
          <Modal.Title className="h5">Delete Job</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handlefalse} />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>Are you sure you want to remove this job ?</Form.Group>
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
