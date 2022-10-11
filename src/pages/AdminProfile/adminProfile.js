import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import ChangePassword from "../../components/changePassword";
import DetailHeading from "../../components/DetailHeading";
import Navbar from "../../components/Navbar";
import { getAdminProfile } from "../../Redux/AdminProfile/actions";
import { Routes } from "../../routes";
import { Rating } from "react-simple-star-rating";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const login = useSelector((state) => state.auth.Auther);
  const getProfileData = useSelector(
    (state) => state.AdminProfile?.Adminprofile
  );
  const [rating, setRating] = useState(0); // initial rating value
  const {
    location: { state },
  } = history;
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = async () => {
    setShowDefault(false);
  };
  const OpenJobModal = () => {
    setShowDefault(true);
  };
  useEffect(() => {
    dispatch(
      getAdminProfile({
        id: login?.id,
      })
    );
  }, []);
  const editProfile = () => {
    history.push(Routes.EditAdminProfile.path);
  };
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <>
      <Navbar module={"Admin Profile"} />
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
                    {getProfileData?.profileImg ? (
                      <Card.Img
                        src={getProfileData?.profileImg}
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
                      <Card.Title>{getProfileData?.fullName}</Card.Title>
                      <Card.Subtitle className="fw-normal">
                        Senior Software Engineer
                      </Card.Subtitle>
                      <Card.Text className="text-gray mb-2">
                        Overall Rating
                      </Card.Text>
                      <Rating
                        readonly={true}
                        allowHover={false}
                        size={25}
                        onClick={handleRating}
                        ratingValue={
                          getProfileData?.rating
                            ? getProfileData?.rating * 20
                            : ""
                        } /* Available Props */
                      />
                      <Card.Text className="text-gray mb-0">
                        {" "}
                        No. of Jobs Completed: <b> 25</b>
                      </Card.Text>
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
                        Basic Information
                      </Card.Title>
                      <DetailHeading
                        heading={"Full Name"}
                        value={getProfileData?.fullName}
                      />
                      <DetailHeading
                        heading={"Email"}
                        value={getProfileData?.email}
                      />
                    </div>
                  </Card.Body>
                </Card>
                <Button
                  variant="primary"
                  className="my-3 "
                  onClick={() => OpenJobModal()}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 17.5C10 17.1685 10.1317 16.8505 10.3661 16.6161C10.6005 16.3817 10.9185 16.25 11.25 16.25H16.25V11.25C16.25 10.9185 16.3817 10.6005 16.6161 10.3661C16.8505 10.1317 17.1685 10 17.5 10C17.8315 10 18.1495 10.1317 18.3839 10.3661C18.6183 10.6005 18.75 10.9185 18.75 11.25V16.25H23.75C24.0815 16.25 24.3995 16.3817 24.6339 16.6161C24.8683 16.8505 25 17.1685 25 17.5C25 17.8315 24.8683 18.1495 24.6339 18.3839C24.3995 18.6183 24.0815 18.75 23.75 18.75H18.75V23.75C18.75 24.0815 18.6183 24.3995 18.3839 24.6339C18.1495 24.8683 17.8315 25 17.5 25C17.1685 25 16.8505 24.8683 16.6161 24.6339C16.3817 24.3995 16.25 24.0815 16.25 23.75V18.75H11.25C10.9185 18.75 10.6005 18.6183 10.3661 18.3839C10.1317 18.1495 10 17.8315 10 17.5ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10V25C5 26.3261 5.52678 27.5979 6.46447 28.5355C7.40215 29.4732 8.67392 30 10 30H25C26.3261 30 27.5979 29.4732 28.5355 28.5355C29.4732 27.5979 30 26.3261 30 25V10C30 8.67392 29.4732 7.40215 28.5355 6.46447C27.5979 5.52678 26.3261 5 25 5H10ZM7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5H25C25.663 7.5 26.2989 7.76339 26.7678 8.23223C27.2366 8.70107 27.5 9.33696 27.5 10V25C27.5 25.663 27.2366 26.2989 26.7678 26.7678C26.2989 27.2366 25.663 27.5 25 27.5H10C9.33696 27.5 8.70107 27.2366 8.23223 26.7678C7.76339 26.2989 7.5 25.663 7.5 25V10ZM26.25 32.5C27.9076 32.5 29.4973 31.8415 30.6694 30.6694C31.8415 29.4973 32.5 27.9076 32.5 26.25V8.17C33.2601 8.60883 33.8913 9.24 34.3301 10.0001C34.7689 10.7601 35 11.6223 35 12.5V26.25C35 28.5706 34.0781 30.7962 32.4372 32.4372C30.7962 34.0781 28.5706 35 26.25 35H12.5C11.6223 35 10.7601 34.7689 10.0001 34.3301C9.24 33.8913 8.60883 33.2601 8.17 32.5H26.25Z"
                      fill="#fff"
                    />
                  </svg>
                  Change Password
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Modal as={Modal.Dialog} centered show={showDefault}>
        <Modal.Header>
          <Modal.Title className="h5">Change Password</Modal.Title>
          <Button
            variant="close"
            aria-label="Close"
            onClick={() => {
              handleClose();
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <ChangePassword
            setShowDefault={setShowDefault}
            showDefault={showDefault}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
