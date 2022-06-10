import {
  Button, Card, Col, Container, Form, Row
} from "@themesberg/react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import ProfileCover from "../../assets/img/profile-cover.jpg";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";
export default () => {
  return (
    <>
      <Navbar module={"Edit Profile"} />
      <Container>
        <Row>
          <div className="mt-2 mb-3 d-flex justify-content-end">
            <Link className="text-white fw-bold" to={Routes.Profile.path}>
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
                  <div
                    style={{ backgroundImage: `url(${ProfileCover})` }}
                    className="profile-cover rounded-top"
                  />
                  <Card.Body className="pb-5">
                    <Card.Img
                      src={Profile1}
                      alt="Neil Portrait"
                      className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
                    />
                    <Card.Subtitle className="text-gray mb-2">
                      Change Profile Picture
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={12} xl={8}>
            <Card
              border="light"
              className="text-left p-0 mb-4 profileView info"
            >
              <Card.Body className="pb-3">
                <Row>
                  <Col xs={8}>
                    <Card.Title className="text-primary">
                      Basic Information
                    </Card.Title>
                    <Form.Group className="mb-3">
                      <Form.Label>Full name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your full name"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Card.Title className="text-primary">
                      Contact Information
                    </Card.Title>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your phone number"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your address"
                      />
                    </Form.Group>

                    <Card.Title className="text-primary">
                      Other Information
                    </Card.Title>

                    <Form.Group className="mb-3">
                      <Form.Label>Job Type</Form.Label>
                      <fieldset className="d-flex radioButton">
                        <Form.Check
                          defaultChecked
                          type="radio"
                          defaultValue="partTime"
                          label="Part-time"
                          name="jobType"
                          className="radio1"
                        />

                        <Form.Check
                          type="radio"
                          defaultValue="permanent"
                          label="Permanent"
                          name="jobType"
                        />
                      </fieldset>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Can Drive?</Form.Label>
                      <fieldset className="d-flex radioButton">
                        <Form.Check
                          defaultChecked
                          type="radio"
                          defaultValue="yes"
                          label="Yes"
                          name="drive"
                          className="radio1"
                        />

                        <Form.Check
                          type="radio"
                          defaultValue="No"
                          label="No"
                          name="drive"
                        />
                      </fieldset>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Have tools?</Form.Label>
                      <fieldset className="d-flex radioButton">
                        <Form.Check
                          defaultChecked
                          type="radio"
                          defaultValue="yes"
                          label="Yes"
                          name="tools"
                          className="radio1"
                        />

                        <Form.Check
                          type="radio"
                          defaultValue="No"
                          label="No"
                          name="tools"
                        />
                      </fieldset>
                    </Form.Group>

                    <Card.Title className="text-primary">Categories</Card.Title>

                    <Card.Text className="text-gray mb-0">Plumber</Card.Text>
                    <Card.Text className="text-gray mb-0">Teacher</Card.Text>
                    <Card.Text className="text-gray mb-0">Carpenter</Card.Text>

                    <Button variant="primary" className="my-3 ">
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
                      Add category
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
