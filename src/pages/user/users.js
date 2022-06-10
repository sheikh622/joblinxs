import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button, Card, Col, Container, Form, Image, Modal, Row
} from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import Profile from "../../assets/img/team/profile.png";
import Navbar from "../../components/Navbar";

const Users = () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);

  return (
    <>
      <Navbar module={"My Users"} />
      <Container>
        <Row className="py-2 ">
          <Col lg={12} md={12} className="justify-content-end d-flex">
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => setShowDefault(true)}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H8M12 8V12V8ZM12 12V16V12ZM12 12H16H12Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              {"  "}
              Add User
            </Button>
          </Col>
        </Row>
        <Row className="py-2 justify-content-between">
          <Col lg={6} md={12} sm={12} xs={12} className="pb-3">
            <Card border="light" className="shadow-sm userCard">
              <Image src={ReactHero} className="navbar-brand-light" />
              <div className="detailSection">
                <span className="left">
                  <h3 className="mb-1 mt-2">Denila Thomas</h3>
                  <h4>Teacher</h4>
                  <span className="starSpan">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <span>5</span>
                  </span>
                  <p className="mt-2">
                    Jobs Completed: <span>25</span>{" "}
                  </p>
                  <p>
                    Job Completed as Plumber: <span>14 </span>
                  </p>
                </span>
              </div>
            </Card>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} className="pb-3">
            <Card border="light" className="shadow-sm userCard">
              <Image src={Profile} className="navbar-brand-light" />
              <div className="detailSection">
                <span className="left">
                  <h3 className="mb-1 mt-2">Denila Thomas</h3>
                  <h4>Teacher</h4>
                  <span className="starSpan">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> <span>4.8</span>
                  </span>
                  <p className="mt-2">
                    Jobs Completed: <span>25</span>{" "}
                  </p>
                  <p>
                    Job Completed as Plumber: <span>18 </span>
                  </p>
                </span>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="h5">Add User</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter first Name" />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter last Name" />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>

          <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
            <Button
              variant="primary"
              color="dark"
              onClick={handleClose}
              size="sm"
            >
              Save
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Users;
