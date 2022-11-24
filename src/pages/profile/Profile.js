import {
  Button,
  Card,
  Col,
  Image,
  Container, Row,
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import DetailHeading from "../../components/DetailHeading";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";
// saga actions here
import moment from "moment";
import { Rating } from "react-simple-star-rating";
import { getProfile, getReviews } from "../../Redux/profile/actions";
import NoRecordFound from "../../components/NoRecordFound";



export default () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const login = useSelector((state) => state.auth.Auther);
  const getById = useSelector((state) => state.ProfileReducer.profile);
  const Reviews = useSelector((state) => state.ProfileReducer.Reviews);
  const getByIdCategory = useSelector((state) => state.ProfileReducer.profile.user_categories);
  const history = useHistory();
  useEffect(() => {
    if (getByIdCategory !== undefined) {
      setChecked(getByIdCategory)
    }
  }, [getByIdCategory])
  const [loader, setLoader] = useState(true);

  // const {
  //   location: { state },
  // } = history;
  const [showDefault, setShowDefault] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [rating, setRating] = useState(0); // initial rating value
  const handleClose = async () => {
    setShowDefault(false);
  };
  const OpenJobModal = () => {
    setShowDefault(true);
  };
  useEffect(() => {
    dispatch(
      getProfile({
        profileId: login?.id,
        // setLoader: setLoader,

      })
    );
  }, []);
  useEffect(() => {
    dispatch(
      getReviews({
        userId: login?.id,
      })
    );
  }, []);
  const editProfile = () => {
    history.push(Routes.EditProfile.path);
  };
  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleSubmit = () => {
    setDisabled(true);
  }
  return (
    <>
      <Navbar module={"Profile"} />
      <div className="mx-5">
        <Row>
          <div className="mt-2 mb-3 d-flex justify-content-end">
            <Button variant="primary" type="submit" onClick={editProfile}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17.0129L11.413 16.9979L21.045 7.4579C21.423 7.0799 21.631 6.5779 21.631 6.0439C21.631 5.5099 21.423 5.0079 21.045 4.6299L19.459 3.0439C18.703 2.2879 17.384 2.2919 16.634 3.0409L7 12.5829V17.0129ZM18.045 4.4579L19.634 6.0409L18.037 7.6229L16.451 6.0379L18.045 4.4579ZM9 13.4169L15.03 7.4439L16.616 9.0299L10.587 15.0009L9 15.0059V13.4169Z"
                  fill="white"
                />
                <path
                  d="M5 21H19C20.103 21 21 20.103 21 19V10.332L19 12.332V19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21Z"
                  fill="white"
                />
              </svg>
              {"  "}
              Edit Profile
            </Button>
          </div>
          <Col xs={12} xl={4}>
            <Row>
              <Col xs={12}>
                <Card
                  border="light"
                  className="text-center p-0 mb-4 profileView"
                >
                  <Card.Body className="pb-2">
                    {login?.profileImg ? (
                      <Card.Img
                        src={getById?.profileImg}
                        alt="Neil Portrait"
                        className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                      />
                    ) : (
                      <Card.Img
                        src={Profile1}
                        alt="Neil Portrait"
                        className="user-avatar large-avatar rounded-circle mx-auto mt-5"
                      />
                    )}

                    <div className="border_bottom pb-3 mb-4">
                      <Card.Title>{getById?.fullName}</Card.Title>
                      <Card.Subtitle className="fw-normal">
                        Senior Software Engineer
                      </Card.Subtitle>
                      <Card.Text className="text-gray mb-2">
                        Overall Rating
                      </Card.Text>
                      <Rating
                        onClick={handleRating}
                        readonly={true}
                        allowHover={false}
                        ratingValue={getById?.profile_rating ? getById?.profile_rating * 20 : "0"} /* Available Props */
                      />
                      <Card.Text className="text-gray mb-0">
                        {" "}
                        Jobs Completed: <b>{getById?.completeJobs}</b>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              {login?.userRole == "Admin"
                ? ""
                :
                <Card
                  border="light"
                  className="card-box-shadow py-1 px-4 mb-2 job-list"
                >
                  <h3 className="mb-3 mt-2 text-start">  <Card.Title className="text-primary">
                    Categories
                  </Card.Title></h3>
                  {checked?.map((value, index, row) => {
                    return (
                      <>
                        <Col
                          lg={12}
                          md={12}
                          xs={12}
                          sm={12}
                          className="pb-3 "
                        >
                          <Card.Text className="text-gray mb-2">
                            <Card border="light" className="shadow-sm introCard">
                              <Image
                                src={value?.category?.categoryImg}
                                className="navbar-brand-light"
                              />
                              <div className="detailSection">
                                <span className="left">
                                  <h3>{value?.category?.title}</h3>
                                  <p>{value?.category?.details}</p>
                                </span>
                              </div>
                            </Card>
                          </Card.Text>
                        </Col>
                      </>
                    );
                  })}
                </Card>
              }
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
                        Basic Information
                      </Card.Title>
                      <DetailHeading
                        heading={"Business Name"}
                        value={getById?.fullName}
                      />
                      <DetailHeading
                        heading={"Member Since"}
                        value={getById?.memberSince ? moment(getById?.memberSince).format("DD-MM-YYYY") : " "}
                      />
                    </div>
                    <div className="border_bottom pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Contact Information
                      </Card.Title>
                      <DetailHeading
                        heading={"Email"}
                        value={getById?.email}
                      />
                      <DetailHeading
                        heading={"Phone"}
                        value={getById?.phoneNumber}
                      />
                      {/* <DetailHeading
                        heading={"Date of Birth"}
                        value={getById?.dateOfBirth ? moment(getById?.dateOfBirth).format("DD-MM-YYYY") : " "
                        }
                      /> */}
                      <DetailHeading
                        heading={"Address"}
                        value={getById?.address}
                      />
                      <DetailHeading
                        heading={"IndustryType"}
                        value={getById?.industryType ? getById?.industryType : "N/A"}
                      />
                      <DetailHeading
                        heading={"Postal Code"}
                        value={getById?.postalCode}
                      />
                    </div>
                    <div className="pb-2 mb-4">

                      <Row>

                      </Row>
                    </div>
                    <Card
                      border="light"
                      className="card-box-shadow py-1 px-4 mb-2 job-list"
                    >
                      <h3 className="mb-3 mt-2 text-start">  <Card.Title className="text-primary">
                        Reviews
                      </Card.Title></h3>
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
                                      </span>
                                      </h3>
                                      <Rating
                                        style={{ marginTop: "-7%" }}
                                        size={20}
                                        onClick={handleRating}
                                        readonly={true}
                                        allowHover={false}
                                        ratingValue={item?.rating ? item?.rating * 20 : "0"} /* Available Props */
                                      />
                                      <h5>{item?.description}</h5>
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
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
