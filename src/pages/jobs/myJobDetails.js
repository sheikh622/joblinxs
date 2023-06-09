import {
  Button, Card, Col, Form, Image, Modal, Row
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { jobById } from "../../Redux/addJob/actions";
// import Profile from "../../assets/img/team/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import DetailHeading from "../../components/DetailHeading";
import Dispute from "../../components/Dispute";
import RateModal from "../../components/modal";
import { deleteAddJob, emergencyJob } from "../../Redux/addJob/actions";
import { hiredApplicant } from "../../Redux/profile/actions";
import Spinner from "../../components/spinner";
import { getProfile } from "../../Redux/profile/actions";


const MyJobDetails = (item, props, data) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useLocation();
  let DisputeId = params?.search.split("?")[1];
  const [hiredId, sethiredId] = useState();
  let id = params.pathname.split("/")[2];
  let jobId = params.pathname.split("/")[2];
  const newArrivalData = useSelector(
    (state) => state?.Seeker?.newArrival?.data
  );
  let profileId = params.pathname.split("/")[2];
  const [newArrivalProvider, setNewArrivalProvider] = useState()
  useEffect(() => {
    if (newArrivalData !== undefined) {
      setNewArrivalProvider(newArrivalData)
    }
  }, [newArrivalData])
  const [checked, setChecked] = useState([]);
  const SingleId = useSelector((state) => state?.addJob?.jobById);
  const Login = useSelector((state) => state?.auth?.Auther);
  // const HiredID = useSelector((state) => state?.addJob?.jobById?.user_job[0]?.hiredby);
  useEffect(() => {
    if (SingleId !== undefined) {
      let datas = SingleId?.user_job?.find(data => data.hiredBy.id === Login?.id)
      sethiredId(datas)
    }
  }, [SingleId])
  const getById = useSelector((state) => state.ProfileReducer.profile);
  const [loader, setLoader] = useState(true);
  const [showDefault, setShowDefault] = useState(false);
  const [rating, setRating] = useState(0); // initial rating value
  const [rate, setRate] = useState();
  const [show, setShow] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDisputed, setIsDisputed] = useState(false);
  const [emergency, setEmergency] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [userId, setUserId] = useState(DisputeId);
  const [reason, setReason] = useState(false);
  const [showDefaultEmergency, setShowDefaultEmergency] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  useEffect(() => {
    dispatch(jobById({ id: jobId, setLoader: setLoader, }));
  }, [jobId]);
  const handleDelete = (id) => {
    dispatch(
      deleteAddJob({
        jobId: jobId,
        setShowDefault: setShowDefault,
        history: history,

      })
    );
  };
  const [adminId, setAdminId] = useState(0);

  useEffect(() => {
    dispatch(jobById({ id: jobId }));
  }, []);
  const handleClose = () => {
    setConfirmModal(false);
  }
  const handlefalse = () => {
    setShowDefault(false);
  };
  const handleEdit = () => {
    history.push({ pathname: `/updateJob/${jobId}`, state: "edit" });
  };
  const handleRepost = () => {
    history.push({ pathname: `/updateJob/${jobId}`, state: "repost" });
  };
  const handleSendOffer = () => {
    history.push({ pathname: `/updateJob/${jobId}`, state: "Send Offer" });
  };
  const handleRating = (rating) => {
    setRating(rating);
  };
  const handleRate = (rate) => {
    setRate(rate);
  };
  const handleChange = (item) => {
    dispatch(
      emergencyJob({
        id: jobId,
        userId: Login?.id,
        setShowDefaultEmergency: setShowDefaultEmergency,
        history: history,

      })
    );
  };
  const handleClick = (item) => {
    let data = {
      job: jobId,
      providerId: SingleId?.user?.id,
      seekerId: Login?.id,
      setConfirmModal: setConfirmModal,
    }
    dispatch(
      hiredApplicant(data)
    );
  };
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
        <Rating
          size={25}
          onClick={handleRating}
          readonly={true}
          allowHover={false}
          ratingValue={SingleId?.rating ? SingleId?.rating * 20 : "0"} /* Available Props */
        />
      </div>
    );
  };
  // let profileId = params.pathname.split("/")[2];
  // useEffect(() => {
  //   dispatch(
  //     getProfile({
  //       profileId: SingleId?.user?.id,
  //     })
  //   );
  // }, [getById]);
  const handleMove = () => {
    history.push(`/chat?${SingleId?.user?.id}?${SingleId?.user?.firebaseId}`)
  }

  return (
    <>
      <Navbar module={"Job Detail"} />
      <Col xs={12} xl={12} className={'d-flex justify-content-start mb-2'}>
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => history.goBack()}>
          <path d="M9.79591 14.8435L9.79557 14.8439C9.56284 15.0818 9.2503 15.2 8.93911 15.2C8.65838 15.2 8.37589 15.1036 8.15012 14.9076L8.14971 14.9073L1.18041 8.82491C0.939515 8.61471 0.799112 8.31587 0.799112 7.99906C0.799112 7.68333 0.93963 7.38454 1.18041 7.17445L8.14971 1.09206L8.15005 1.09176C8.62347 0.6805 9.35494 0.706129 9.79539 1.15531L9.79539 1.15531L9.79591 1.15584C10.2386 1.6107 10.2057 2.32402 9.72866 2.74114L9.72851 2.74128L3.7035 7.99908L9.72853 13.2581L9.72866 13.2582C10.2057 13.6753 10.2386 14.3887 9.79591 14.8435Z" fill="#12499C" stroke="#12499C" stroke-width="0.4" />
        </svg>
      </Col>
      <div className="mx-5">
        <Row>

          <>
            {SingleId?.createdBy === "seeker" ? (

              <Col lg={4} md={6} xs={12} className="pb-3 mb-3 mt-2">

                <Card border="light" className="card-box-shadow py-3 px-4 mb-3">
                  {profileCard()}
                </Card>

              </Col>
            ) : hiredId !== undefined && (
              <Col lg={4} md={6} xs={12} className="pb-3 mb-3 mt-2">
                <Card border="light" className="card-box-shadow py-3 px-4 mb-3">
                  {profileCard()}
                </Card>
              </Col>
            )}

            <Col
              lg={SingleId?.createdBy === "seeker" ? 8 : hiredId !== undefined ? 8 : 12}
              md={SingleId?.createdBy === "seeker" ? 8 : hiredId !== undefined ? 8 : 12}
              xs={12}
              className="pb-3 mb-3"
            >


              <Card
                border="light"
                className="text-left p-0 mb-4 profileView info p-3 mt-2 mt-2"
              >

                {SingleId?.createdBy === "seeker" ? "" : hiredId !== undefined ? "" : (profileCard())}

                <Card.Body className="pb-2 border_bottom mb-1">
                  {/* {loader ? (
                  <Spinner />
                ) : (
                  <> */}
                  <div className="pb-2 d-flex justify-content-between align-items-baseline">

                    <Card.Title className="text-primary">
                      User Information
                    </Card.Title>
                  </div>
                  {SingleId?.createdBy === "seeker" ? (
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
                  ) : hiredId !== undefined && (
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
                    value={`$ ${SingleId?.rate ? SingleId?.rate : SingleId?.rate}`}
                  />
                  <DetailHeading
                    heading={"TimeRequired"}
                    value={`${SingleId?.days} Days and ${SingleId?.hours} hours`}
                  />
                  <DetailHeading
                    heading={"Job Type"}
                    value={SingleId?.jobType ? SingleId?.jobType?.name === "Permanent" ? "Full-Time" : SingleId?.jobType?.name : "-"}
                  />
                  <DetailHeading
                    heading={"Service Location"}
                    value={SingleId?.jobPlace ? SingleId?.jobPlace : "-"}
                  />
                  <DetailHeading
                    heading={"Job Nature"}
                    value={SingleId?.jobNature ? SingleId?.jobNature?.name : "-"}
                  />
                  <DetailHeading
                    heading={"Location"}
                    value={SingleId?.location ? SingleId?.location?.[0] : "-"}
                  />
                  {SingleId?.unit && <DetailHeading
                    heading={"Unit No "}
                    value={SingleId?.unit ? SingleId?.unit : "-"}
                  />}



                  {SingleId?.createdBy === "seeker" ? (<>
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
                  </>) : hiredId !== undefined && (
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
                  {/* </>
                )} */}
                </Card.Body>
                {SingleId?.createdBy === "seeker" ? (
                  <>
                    {/* <Card.Body className="pb-2 border_bottom mb-1 d-flex justify-content-between align-items-baseline">
                    <Dropdown.Item onClick={() => setReason(true)}>Dispute</Dropdown.Item>
                  </Card.Body> */}
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
                          Logged Hours
                        </Card.Text>
                      </Card.Body>
                    </Link>
                    <Link
                      className="text-white fw-bold"
                      to={`/extendTime/${jobId}`}
                    >
                      <Card.Body className="pb-2 border_bottom mb-1 d-flex justify-content-between align-items-baseline">
                        <Card.Text className="text-black mb-2">
                          Extend Time Request
                        </Card.Text>
                      </Card.Body>
                    </Link>
                  </>
                ) : hiredId !== undefined ? <>

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
                        Logged Hours
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </> : (
                  <>
                    {/* {loader ? (
                    <Spinner />
                  ) : (
                    <> */}
                    <div>
                      <div class="d-grid gap-2 col-3 mx-auto my-2">
                        <Button
                          variant="primary"
                          color="dark"
                          size="lg"
                          className="mt-2 me-1"
                          onClick={() => {
                            setConfirmModal(true);
                          }}
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
                    {/* </>
                  )} */}
                  </>
                )}
              </Card>
              {SingleId?.createdBy === "seeker" && (
                <>
                  {SingleId?.status === "completed" || SingleId?.status === "inprogress" || SingleId?.status === "upcoming" ? (
                    <>
                      <div class="float-end">
                        <Button
                          variant="primary"
                          color="dark"
                          size="lg"
                          className="mt-2 me-1"
                          onClick={handleRepost}
                        >
                          Repost Job
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div>
                      <div class="float-end">
                        {SingleId?.status === "Accepted" || SingleId?.status === "canceled" ? (
                          <>
                            <Button
                              variant="primary"
                              color="dark"
                              size="lg"
                              className="mt-2 me-1"
                              onClick={handleEdit}
                            >
                              Repost
                            </Button>
                            {SingleId?.isEmergency === true ? (<>
                              <Button
                                variant="primary"
                                color="dark"
                                size="lg"
                                className="mt-2 me-1"
                              >
                                Emergency Post
                              </Button>
                            </>
                            ) : (
                              <>
                                <Button
                                  variant="primary"
                                  color="dark"
                                  size="lg"
                                  className="mt-2 me-1"
                                  onClick={() => {
                                    // setShowDefaultEmergency(true);
                                    setEmergency(true)
                                    setIsPost(false)
                                    handleChange();
                                  }}
                                >
                                  Emergency Post
                                </Button>
                              </>
                            )}

                          </>
                        ) : (
                          <Button
                            variant="primary"
                            color="dark"
                            size="lg"
                            className="mt-2 me-1"
                            onClick={handleEdit}
                          >
                            Edit Job
                          </Button>
                        )}
                      </div>
                      {SingleId?.status !== "Accepted" && (
                        <div class="float-end">
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
                      )}
                    </div>
                  )}
                </>
              )}

            </Col>
          </>

        </Row>
      </div>
      <Dispute setReason={setReason} reason={reason} id={userId} />
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
      {show && (
        <RateModal
          show={show}
          setShow={setShow}
          img={SingleId?.image ? SingleId.image : ""}
          jobId={jobId}
          userId={SingleId?.user?.id}
          setIsCompleted={setIsCompleted}
          setIsDisputed={setIsDisputed}
          isCompleted={isCompleted}
          isDisputed={isDisputed}
        />
      )}
      <Modal as={Modal.Dialog} centered show={confirmModal} onHide={handlefalse}>
        <Modal.Header>
          <Modal.Title className="h5 text-align-center">Confirmation</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <h4 style={{ marginLeft: "30%" }}>
                You will be charged
              </h4>
              <h4 style={{ color: "blue", marginLeft: "38%", marginTop: "20px" }}>
                {`$${SingleId?.rate} ${SingleId?.paymentType == 'fixed' ? 'for Complete Job' : 'per Hour'
                  } `}
              </h4>
            </Form.Group>
            <Form.Group>
              <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                <Button
                  variant="primary"
                  onHide={handleClose}
                  color="dark"
                  size="sm"
                  onClick={() => {
                    handleClick();
                    handleClose();
                  }}
                >
                  Confirm
                </Button>
              </div>
              <div class="d-grid gap-2 col-4 text-center mt-2 mx-auto">
                <Button
                  variant="primary"
                  onHide={handleClose}
                  color="dark"
                  size="sm"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Cancel
                </Button>
              </div>
              <div class="d-grid gap-2 col-4 text-center mt-2 mx-auto">
                <Button
                  variant="primary"
                  onHide={handleClose}
                  color="dark"
                  size="sm"
                  onClick={() => {
                    handleClose()
                    handleSendOffer();
                  }}
                >
                  Edit Details
                </Button>
              </div>
              <h6 style={{ marginTop: "20px", marginLeft: "20px" }} onClick={handleMove} >
                If you want any change in days or amount don't hesitate to <a style={{ color: "blue", cursor: "pointer", }}> contact me.
                </a>
              </h6>

            </Form.Group>
          </Form>

        </Modal.Body>
      </Modal>

    </>
  );
};
export default MyJobDetails;
