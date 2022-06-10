import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import DetailHeading from "../../components/DetailHeading";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";
export default () => {
  return (
    <>
      <Navbar module={"Profile"} />
      <Container>
        <Row>
          <div className="mt-2 mb-3 d-flex justify-content-end">
            <Link className="text-white fw-bold" to={Routes.EditProfile.path}>
              <Button variant="primary" type="submit">
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
            </Link>
          </div>
          <Col xs={12} xl={4}>
            <Row>
              <Col xs={12}>
                <Card
                  border="light"
                  className="text-center p-0 mb-4 profileView"
                >
                  <Card.Body className="pb-2">
                    <Card.Img
                      src={Profile1}
                      alt="Neil Portrait"
                      className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                    />
                    <div className="border_bottom pb-3 mb-4">
                      <Card.Title>Neil Sims</Card.Title>
                      <Card.Subtitle className="fw-normal">
                        Senior Software Engineer
                      </Card.Subtitle>
                      <Card.Text className="text-gray mb-2">
                        Overall Rating
                      </Card.Text>
                      <Card.Text className="text-gray mb-0 starIcon">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />{" "}
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />{" "}
                        <FontAwesomeIcon icon={faStar} />
                      </Card.Text>
                      <Card.Text className="text-gray mb-2 reviews">
                        (7 Reviews)
                      </Card.Text>

                      <Card.Text className="text-gray mb-0">
                        {" "}
                        No. of Jobs Completed: <b> 25</b>
                      </Card.Text>
                    </div>

                    <div className="">
                      <Card.Title>Description</Card.Title>
                      <Card.Text className="text-gray mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse eu interdum felis, sit amet sagittis diam.
                        In suscipit tortor eget nunc bibendum, ac ullamcorper
                        mauris vehicula. Donec vehicula mi ligula, id dictum
                        ante malesuada ac. Aliquam porttitor placerat lorem id
                        vestibulum. Nullam vitae est id felis vehicula
                        ullamcorper eu vel lacus. Sed sagittis tincidunt rutrum.
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
                      <DetailHeading heading={"Full Name"} value={"Swet LLC"} />
                      <DetailHeading
                        heading={"Member Since"}
                        value={"24/02/2022"}
                      />
                      <DetailHeading
                        heading={"Work Status"}
                        value={"Full-time"}
                      />
                      <DetailHeading heading={"No. of Job Done"} value={"25"} />
                    </div>
                    <div className="border_bottom pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Contact Information
                      </Card.Title>
                      <DetailHeading heading={"Email"} value={"abc@xyz.com"} />
                      <DetailHeading heading={"Phone"} value={"000-1234-567"} />
                      <DetailHeading heading={"Address"} value={"Address"} />
                    </div>
                    <div className="border_bottom pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Other Information
                      </Card.Title>
                      <DetailHeading heading={"Can Drive"} value={"Yes"} />
                      <DetailHeading heading={"Have Tools"} value={"Yes"} />
                    </div>
                    <div className="pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Categories
                      </Card.Title>
                      <Card.Text className="text-gray mb-2">
                        <span className="text-black">Plumber</span>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
