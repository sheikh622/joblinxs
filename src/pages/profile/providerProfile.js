import {
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card, Col, Container,
  Image, Row
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import DetailHeading from "../../components/DetailHeading";
import Navbar from "../../components/Navbar";
import RecommendCard from "../../components/RecommendCard";
// saga actions here
import moment from "moment";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import NoRecordFound from "../../components/NoRecordFound";
import { getProfile, getReviews } from "../../Redux/profile/actions";


const ProviderProfile = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const login = useSelector((state) => state.auth.Auther);
  const getById = useSelector((state) => state.ProfileReducer.profile);
  const Reviews = useSelector((state) => state.ProfileReducer.Reviews);
  const [show, setShow] = useState();
  const [BlockUserSaga, setBlockUserSaga] = useState(false)
  const [showDefault, setShowDefault] = useState(false);
  const [adminId, setAdminId] = useState(0);
  const [rating, setRating] = useState(0); // initial rating value

  const params = useLocation();
  let profileId = params.pathname.split("/")[2];
  console.log("Review", Reviews)

  useEffect(() => {
    dispatch(
      getProfile({
        id: profileId,
      })
    );
  }, []);
  useEffect(() => {
    dispatch(
      getReviews({
        userId: profileId,
      })
    );
  }, []);
  const handleMove = () => {
    history.push(`/chat?${profileId}?${getById?.firebaseId}`)
  }
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <>
      <Navbar module={"Detail Profile"} />
      <Col xs={12} xl={12} className={'d-flex justify-content-start mb-2'}>
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => history.goBack()}>
          <path d="M9.79591 14.8435L9.79557 14.8439C9.56284 15.0818 9.2503 15.2 8.93911 15.2C8.65838 15.2 8.37589 15.1036 8.15012 14.9076L8.14971 14.9073L1.18041 8.82491C0.939515 8.61471 0.799112 8.31587 0.799112 7.99906C0.799112 7.68333 0.93963 7.38454 1.18041 7.17445L8.14971 1.09206L8.15005 1.09176C8.62347 0.6805 9.35494 0.706129 9.79539 1.15531L9.79539 1.15531L9.79591 1.15584C10.2386 1.6107 10.2057 2.32402 9.72866 2.74114L9.72851 2.74128L3.7035 7.99908L9.72853 13.2581L9.72866 13.2582C10.2057 13.6753 10.2386 14.3887 9.79591 14.8435Z" fill="#12499C" stroke="#12499C" stroke-width="0.4" />
        </svg>
      </Col>
      <div className="mx-5">
        <Row>
          <Col lg={4} md={6} xs={12} className="pb-3 mb-3">
            <Card border="light" className="card-box-shadow py-3 px-4 mb-3">
              <div className="detailed">
                <Image
                  src={getById?.profileImg}
                  className="navbar-brand-light detailImg"
                />
                <h3 className="mb-1 mt-3">{getById?.fullName}</h3>
                <h5 className="text-gray">{getById?.profileType}</h5>
                <Rating
                  onClick={handleRating}
                  readonly={true}
                  allowHover={false}
                  ratingValue={getById?.profile_rating ? getById?.profile_rating * 20 : "0"} /* Available Props */
                />
                <span className="text-gray d-block mt-2">
                  Overall Jobs: <span className="text-black">25</span>
                </span>
                <span className="text-gray d-block mt-2">
                  Plumber Jobs: <span className="text-black">22</span>
                </span>
              </div>
            </Card>
            <Card
              border="light"
              className="card-box-shadow py-1 px-4 mb-2 job-list"
            >
              <h3 className="mb-3 mt-2 text-center">Services</h3>
              {getById?.jobs?.length > 0 ? (
                <>
                  {getById?.jobs?.map((item) => {
                    return (
                      <Col xs={12} className="pb-3">
                        <RecommendCard
                          img={item.image}
                          name={item.name}
                          type={item.name}
                          rate={item.rate}
                          id={item.id}
                          completed={"10"}
                          star={item.rating}
                        />
                      </Col>
                    );
                  })}
                </>
              ) : (
                <NoRecordFound />
              )}
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
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleMove}
                    >
                      <path
                        d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3822 22.0021 8.78829 21.6102 7.35601 20.858L3.06601 21.975C2.92267 22.0123 2.77205 22.0116 2.6291 21.9728C2.48615 21.934 2.35582 21.8585 2.25102 21.7538C2.14623 21.6491 2.07062 21.5188 2.03168 21.3759C1.99273 21.233 1.99181 21.0824 2.02901 20.939L3.14501 16.65C2.39081 15.2162 1.99778 13.6201 2.00001 12C2.00001 6.477 6.47701 2 12 2ZM13.252 13H8.75001L8.64801 13.007C8.4685 13.0317 8.304 13.1206 8.18492 13.2571C8.06584 13.3937 8.00024 13.5688 8.00024 13.75C8.00024 13.9312 8.06584 14.1063 8.18492 14.2429C8.304 14.3794 8.4685 14.4683 8.64801 14.493L8.75001 14.5H13.252L13.353 14.493C13.5325 14.4683 13.697 14.3794 13.8161 14.2429C13.9352 14.1063 14.0008 13.9312 14.0008 13.75C14.0008 13.5688 13.9352 13.3937 13.8161 13.2571C13.697 13.1206 13.5325 13.0317 13.353 13.007L13.252 13ZM15.25 9.5H8.75001L8.64801 9.507C8.4685 9.5317 8.304 9.62055 8.18492 9.75714C8.06584 9.89372 8.00024 10.0688 8.00024 10.25C8.00024 10.4312 8.06584 10.6063 8.18492 10.7429C8.304 10.8794 8.4685 10.9683 8.64801 10.993L8.75001 11H15.25L15.352 10.993C15.5315 10.9683 15.696 10.8794 15.8151 10.7429C15.9342 10.6063 15.9998 10.4312 15.9998 10.25C15.9998 10.0688 15.9342 9.89372 15.8151 9.75714C15.696 9.62055 15.5315 9.5317 15.352 9.507L15.25 9.5Z"
                        fill="#12499C"
                      />
                    </svg>

                  </span>
                </div>
                <DetailHeading
                  heading={"City"}
                  value={getById?.city ? getById?.city : "-"}
                />
                <DetailHeading
                  heading={"Province"}
                  value={getById?.province ? getById?.province : "-"}
                />
                <DetailHeading
                  heading={"Postal Code"}
                  value={getById?.postalCode ? getById?.postalCode : "-"}
                />
                <DetailHeading
                  heading={" Date of Birth"}
                  value={getById?.dateOfBirth ? getById?.dateOfBirth : "-"}
                />
                <DetailHeading
                  heading={"Personal Attributes"}
                  value={
                    getById?.personalAttributes
                      ? getById?.personalAttributes
                      : "-"
                  }
                />
                <DetailHeading
                  heading={"Career Overview"}
                  value={
                    getById?.carrierOverview ? getById?.carrierOverview : "-"
                  }
                />
                <DetailHeading
                  heading={"Volenteering History"}
                  value={
                    getById?.volunteeringHistory
                      ? getById?.volunteeringHistory
                      : "-"
                  }
                />
                <DetailHeading
                  heading={" Tools Available"}
                  value={
                    getById?.toolsAvailable ? getById?.toolsAvailable : "-"
                  }
                />
                <DetailHeading
                  heading={"Transportation Available"}
                  value={
                    getById?.transportationAvailable
                      ? getById?.transportationAvailable
                      : "-"
                  }
                />
                <DetailHeading
                  heading={" Job Type"}
                  value={getById?.account_type ? getById?.account_type : "-"}
                />
              </Card.Body>

              <Card.Body className="pb-2 border_bottom mb-1 d-flex justify-content-between align-items-baseline">
                <Link className="fw-bold" to={{ pathname: `/workexperience`, state: profileId }}>
                  <Card.Text className="text-black mb-2">
                    Work Experience
                  </Card.Text>
                </Link>
                <FontAwesomeIcon color="#12499C" icon={faChevronRight} />
              </Card.Body>

              <Card.Body className="mb-2 d-flex justify-content-between align-items-baseline">
                <Link className="fw-bold" to={{ pathname: `/achievement`, state: profileId }}>
                  <Card.Text className="text-black mb-2">
                    Achievement/Certification
                  </Card.Text>
                </Link>
                <FontAwesomeIcon color="#12499C" icon={faChevronRight} />
              </Card.Body>
            </Card>
            <Card
              border="light"
              className="card-box-shadow py-1 px-4 mb-2 job-list"
            >
              <h3 className="mb-3 mt-2 text-center">Reviews</h3>
              {Reviews?.length > 0 ? (
                <>
                  {Reviews?.map((item) => {
                    return (
                      <Col xs={12} className="pb-3">
                        <Card border="light" className="shadow-sm introCard">
                          <div className="detailSection">
                            <span className="left">
                              {/* <Link className="fw-bold" to={`/detailJob/${props.id}`}> */}
                              <h3><span>{item.jobs.name}
                                -
                                <Rating
                                  style={{ marginTop: "-7%" }}
                                  size={20}
                                  onClick={handleRating}
                                  readonly={true}
                                  allowHover={false}
                                  ratingValue={item?.rating ? item?.rating * 20 : "0"} /* Available Props */
                                />
                              </span>
                              </h3>
                              {/* <h5>{item.description}</h5> */}
                            </span>
                            <span className="right p-2">
                              <h6>{item.jobs.paymentType}</h6>
                              <h6>{item?.insertedDate ? moment(item?.insertedDate).format("DD-MM-YYYY") : " --"}</h6>
                              <h6>
                                Rate: <span>${item.jobs.rate}hr</span>{" "}
                              </h6>
                            </span>
                          </div>
                        </Card>
                      </Col>
                    );
                  })}
                </>
              ) : (
                <NoRecordFound />
              )}
            </Card>
          </Col>
        </Row>
      </div>

    </>
  );
};
export default ProviderProfile;
