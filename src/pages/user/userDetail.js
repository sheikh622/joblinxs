import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Card, Button, Container } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import { Routes } from "../../routes";

export default () => {
  return (
    <>
      <Navbar module={"User Detail"} />
      <Container>
        <Row>
          <div className="mt-2 mb-3 d-flex justify-content-end">
            <Link className="text-white fw-bold" to={Routes.UserManagement.path}>
              <Button variant="primary" type="submit">
                Back
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
                      <Card.Text className="text-gray mb-2">
                        Full Name: <span className="text-black">Swet LLC</span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        Member Since:{" "}
                        <span className="text-black">24/02/2022</span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        Work Status:{" "}
                        <span className="text-black">Full-time</span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        No. of Job Done: <span className="text-black">25</span>
                      </Card.Text>
                    </div>
                    <div className="border_bottom pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Contact Information
                      </Card.Title>
                      <Card.Text className="text-gray mb-2">
                        Email: <span className="text-black">abc@xyz.com</span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        Phone: <span className="text-black">000-1234-567</span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        Address:{" "}
                        <span className="text-black">
                          house 01, street 00, New York, USA
                        </span>
                      </Card.Text>
                    </div>
                    <div className="border_bottom pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Other Information
                      </Card.Title>
                      <Card.Text className="text-gray mb-2">
                        Can Drive: <span className="text-black">Yes</span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        Have Tools: <span className="text-black">Yes</span>
                      </Card.Text>
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