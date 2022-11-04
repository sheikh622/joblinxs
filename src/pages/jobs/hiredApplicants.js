import { faStar, faEllipsisV, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Pagination,
  Nav,
  ButtonGroup,
  Dropdown,
  Modal,
  Form
} from "@themesberg/react-bootstrap";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { getHiredApplicants, completeJob, confirmJob } from "../../Redux/addJob/actions";
import { useHistory, useLocation } from "react-router-dom";
import NoRecordFound from "../../components/NoRecordFound";
import RateModal from "../../components/modal";
import { Rating } from "react-simple-star-rating";
import Dispute from "../../components/Dispute";
import MapSection from '../../components/map/Map' // import the map here

const location123 = {
  address: '',
  lat: 31.4854897,
  lng: 74.3470055,
 
} // our location object from earlier

const Applicants = ({ id }) => {
  const [show, setShow] = useState(false);
  const [dispute, setDispute] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const params = useLocation();

  let jobId = params.pathname.split("/")[2];
  const login = useSelector((state) => state?.auth.Auther);
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => {
    setShowDefault(false);
    setShowLocation(false);
  };
  const [page, setPage] = useState(1);
  const [limit] = useState("5");
  const [loader, setLoader] = useState(true);
  const [selectedProfileId, setSelectedProfileId] = useState();

  const applicantsData = useSelector(
    (state) => state?.addJob?.hiredApplicants?.data?.applicants
  );
  const auth = useSelector((state) => state?.auth?.Auther);
  const Pageination = useSelector((state) => state?.addJob?.hiredApplicants?.data);
  const [rating, setRating] = useState(0); // initial rating value
  const [showLocation, setShowLocation] = useState(false);
  useEffect(() => {
    if (id === "Hired") {
      dispatch(
        getHiredApplicants({
          id: jobId,
          page: page,
          limit: limit,
          setLoader: setLoader,
        })
      );
    }
  }, [page, limit, id]);
  const nextPage = () => {
    if (page < Pageination?.pages) {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (1 < page) {
      setPage(page - 1);
    }
  };
  const paginationItems = () => {
    let items = [];
    for (let number = 1; number <= Pageination?.pages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === page}
          onClick={() => {
            setPage(number);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };
  const handleConfirm = (data) => {
    dispatch(
      confirmJob({
        jobId: jobId,
        userId: data.id,
        isCompleted: data.isCompleted,
        setLoader: setLoader,
      })
    );
  };
  const handleComplete = (data) => {
    dispatch(
      completeJob({
        jobId: jobId,
        userId: data.id,
        jobStatus: data.jobStatus,
        setLoader: setLoader,
      })
    );
  };
  const handleMove = (item) => {
    history.push(`/LogHours/${item?.jobs?.id}?${item?.users?.id}`);
  };
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <>
      <div className="mx-5">
        <Row className="py-2 justify-content-between">
          {loader ? (
            <Spinner />
          ) : (
            <>
              {applicantsData?.length > 0 ? (
                <>
                  <Col lg={6} md={12} sm={12} xs={12} className="pb-3">
                    {applicantsData?.map((item, value) => {
                      return (
                        <>
                          <Card
                            border="light"
                            className="shadow-sm cardShadow"
                            style={{ marginTop: "15px" }}
                          >
                            <div className="applicantCard"> <Image
                              src={item?.users ? item?.users?.profileImg : ""}
                              className="navbar-brand-light"
                            />

                              <div className="detailSection">
                                <span className="">
                                  <h3 className="mb-1 mt-2">
                                    {item?.users ? item?.users?.fullName : ""}{" "}
                                  </h3>
                                  <Rating
                                    readonly={true}
                                    allowHover={false}
                                    size={25}
                                    onClick={handleRating}
                                    ratingValue={item?.users?.profile_rating ? item?.users?.profile_rating * 20 : ""} /* Available Props */
                                  />
                                  <h4>
                                    {item?.completedByProvider && !item?.completedBySeeker && "Job is Completed By Provider"}
                                  </h4>
                                  <div className="mt-3">
                                    <a
                                      href={`/detailProvider/${item?.users?.id}`}
                                    >
                                      view profile
                                    </a>
                                  </div>
                                </span>

                              </div>
                              <span className="right">
                                <Dropdown as={ButtonGroup} className="me-3 mt-1">
                                  <Dropdown.Toggle
                                    as={Button}
                                    split
                                    variant="link"
                                    className="text-dark m-0 p-0"
                                  >
                                    <span className="icon icon-sm">
                                      <FontAwesomeIcon
                                        icon={faEllipsisV}
                                        className="icon-dark"
                                      />
                                    </span>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="custom_menu">
                                    <Dropdown.Item 
                                     >
                                      {item?.completedBySeeker ? (
                                        <div  onClick={() => {
                                          setShow(true);
                                        }}>
                                          {/* <Button
                                            variant="primary"
                                            color="dark"
                                            size="sm"
                                            style={{ width: "100px", height: "40px", display: "inline-block", marginRight: "10px" }}
                                            onClick={() => {
                                              setShow(true);
                                            }}
                                          > */}
                                            Rate Provider
                                          {/* </Button> */}
                                        </div>
                                      ) : (
                                        <div onClick={() => {
                                          item.completedByProvider == true ? (handleConfirm({
                                            id: item?.users?.id,
                                            isCompleted: true,
                                          })) : handleComplete(
                                            ({
                                              id: item?.users?.id,
                                              jobStatus: true,
                                            })
                                          )
                                        }}>
                                          {/* <Button
                                            variant="primary"
                                            color="dark"
                                            size="sm"
                                            style={{ width: "100px", height: "40px", display: "inline-block", marginRight: "10px" }}
                                            onClick={() => {
                                              item.completedByProvider == true ? (handleConfirm({
                                                id: item?.users?.id,
                                                isCompleted: true,
                                              })) : handleComplete(
                                                ({
                                                  id: item?.users?.id,
                                                  jobStatus: true,
                                                })
                                              )
                                            }}
                                          > */}
                                            Complete Job
                                          {/* </Button> */}
                                        </div>
                                      )}
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                    >
                                      {item?.jobs?.paymentType === "fixed" || item?.jobs?.paymentType === "Fixed" ? (
                                        <>
                                          {item?.jobs?.isDispute ? (
                                            <div >
                                              {/* <Button
                                                variant="primary"
                                                color="dark"
                                                size="sm"
                                                style={{ width: "100px", height: "40px", display: "inline-block", marginRight: "10px" }}
                                              > */}
                                                Disputed
                                              {/* </Button> */}
                                            </div>
                                          ) : (
                                            <div  onClick={() => {
                                              setDispute(true);
                                            }}>
                                              {/* <Button
                                                variant="primary"
                                                color="dark"
                                                size="sm"
                                                style={{ width: "100px", height: "40px", display: "inline-block", marginRight: "10px" }}
                                                onClick={() => {
                                                  setDispute(true);
                                                }}
                                              > */}
                                                Dispute
                                              {/* </Button> */}
                                            </div>
                                          )}
                                        </>
                                      ) : (
                                        <div  onClick={() => {
                                          handleMove(item);
                                        }}>
                                          {/* <Button
                                            variant="primary"
                                            color="dark"
                                            size="sm"
                                            style={{ width: "100px", height: "40px", display: "inline-block", marginRight: "10px" }}
                                            onClick={() => {
                                              handleMove(item);
                                            }}
                                          > */}
                                            Log Hours
                                          {/* </Button> */}
                                        </div>
                                      )}
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                      setShowLocation(true);
                                      setSelectedProfileId(item?.users?.id);
                                    }}>
                                      Live Location
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </span>
                            </div>

                            {/* {handleClick(item)} */}
                            <div style={{ display: "flex", marginLeft: "auto" }}>


                            </div>
                          </Card>
                          {show && (
                            <RateModal
                              show={show}
                              setShow={setShow}
                              img={
                                item?.users?.profileImg
                                  ? item?.users?.profileImg
                                  : ""
                              }
                              jobId={item?.jobs?.id}
                              ratedTo={item?.users?.id}
                              ratedBy={auth?.id}
                            />
                          )}
                          {dispute && (
                            <Dispute
                              dispute={dispute}
                              setDispute={setDispute}
                              item={item}

                            />
                          )}
                        </>
                      );
                    })}
                  </Col>
                </>
              ) : (
                <NoRecordFound />
              )}
            </>
          )}

          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Nav>
              <Pagination size={"sm"} className="mb-2 mb-lg-0">
                <Pagination.Prev onClick={() => previousPage()}>
                  <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </Pagination.Prev>
                {paginationItems()}
                <Pagination.Next onClick={() => nextPage()}>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Pagination.Next>
              </Pagination>
            </Nav>
            <small className="fw-bold">
              Showing <b>{applicantsData?.length}</b> out of{" "}
              <b>{Pageination?.total_applicants}</b> entries
            </small>
          </Card.Footer>
        </Row>
      </div>
      <Modal as={Modal.Dialog} centered show={showLocation} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="h5">Live Location</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <MapSection location={location123} zoomLevel={17} profileId={selectedProfileId}/>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>

    </>

  );
};

export default Applicants;
