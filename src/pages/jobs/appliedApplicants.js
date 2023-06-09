import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Container, Image, Nav, Pagination, Row
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";
import { getApplicants, getConfirmApplicants } from "../../Redux/addJob/actions";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
const Applicants = ({ id }) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const params = useLocation();

  let jobId = params.pathname.split("/")[2];
  const login = useSelector((state) => state?.auth.Auther);
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [limit] = useState("5");
  const Applicants = useSelector(
    (state) => state?.addJob?.Applicants?.data?.jobs
  );
  const Pageination = useSelector((state) => state?.addJob?.Applicants?.data);
  const [rating, setRating] = useState(0); // initial rating value
  useEffect(() => {
    if (id === "Applied") {
      dispatch(
        getApplicants({
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
  const handleConfirm = (data, action) => {
    dispatch(
      getConfirmApplicants({
        userId: data.id.id,
        id: jobId,
        isAccepted: data.isAccepted,
        page: page,
        limit: limit,
        setLoader: setLoader,
      })
    );
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
              {Applicants?.length > 0 ? (
                <>
                  <Col lg={6} md={12} sm={12} xs={12} className="pb-3">
                    {Applicants?.map((item, value) => {
                      return (
                        <>
                          <Card
                            border="light"
                            className="shadow-sm cardShadow"
                            style={{ marginTop: "15px" }}
                          >
                            <div className="applicantCard">
                              <Image
                                src={item?.user ? item?.user?.profileImg : ""}
                                className="navbar-brand-light"
                              />
                              <div className="detailSection">
                                <span className="left">
                                  <h3 className="mb-1 mt-2">
                                    {item?.user ? item?.user?.fullName : ""}{" "}
                                  </h3>
                                  <Rating
                                   readonly={true}
                                   allowHover={false}
                                   size={25}
                                    onClick={handleRating}
                                    ratingValue={item?.rating ? item?.rating * 20 : ""} /* Available Props */
                                  />
                                  <span>
                                    {item?.rating ? item?.rating : ""}
                                  </span>
                                  <p className="mt-2">
                                    Jobs Completed: <span>25</span>{" "}
                                  </p>
                                  <p>
                                    Jobs Completed as Plumber: <span>14 </span>
                                  </p>
                                </span>
                              </div>
                            </div>

                            <div style={{ display: "flex", marginLeft: "auto" }}>
                              {item?.acceptedBySeeker === null ? (
                                <>
                              <div class="">
                                <Button
                                  variant="primary"
                                  color="dark"
                                  size="sm"
                                  style={{ width: "100px", height: "40px", display: "inline-block", marginRight: "10px" }}
                                  onClick={() => handleConfirm({ id: item, isAccepted: true })}
                                >
                                  Accept
                                </Button>
                              </div>
                              <div class="">
                                <Button
                                  variant="danger"
                                  color="dark"
                                  size="sm"
                                  style={{ width: "100px", height: "40px", display: "inline-block", marginRight: "10px" }}
                                  onClick={() => handleConfirm({ id: item, isAccepted: false })}
                                >
                                  Decline
                                </Button>
                              </div>
                              </>
                              ):(
                                <div class="">
                                <Button
                                  variant="primary"
                                  color="dark"
                                  size="sm"
                                  style={{ width: "100px", height: "40px", display: "inline-block", marginRight: "10px" }}
                                >
                                  Rejected
                                </Button>
                              </div>
                              )}
                              {/* <div class="">
                                <Button
                                  variant="danger"
                                  color="dark"
                                  size="sm"
                                  style={{ width: "100px", height: "40px", display: "inline-block", marginRight: "10px" }}
                                  onClick={() => {
                                    setOpen(!open)
                                  }}
                                >
                                  Interview
                                </Button>
                              </div> */}
                            </div>
                          </Card>
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
              Showing <b>{Pageination?.jobs?.length}</b> out of{" "}
              <b>{Pageination?.total_applicants}</b> entries
            </small>
          </Card.Footer>
        </Row>
      </div>
      {/* {open && (
        <InlineWidget url="https://calendly.com/arslansaleem622/30min"

        />
      )} */}
    </>
  );
};

export default Applicants;
