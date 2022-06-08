import React from "react";
import {
  Container,
  Image,
  Col,
  Row,
  Card,
  Button,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronRight,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import Profile from "../assets/img/team/profile.png";
import ReactHero from "../assets/img/team/profile-picture-3.jpg";
import RecommendCard from "../components/RecommendCard";
import DetailHeading from "./DetailHeading";

const ProviderProfile = () => {
  return (
    <>
      <Navbar module={"Service Provider Profile"} />
      <Container>
        <Row>
          <Col lg={4} md={6} xs={12} className="pb-3 mb-3">
            <Card border="light" className="card-box-shadow py-3 px-4 mb-3">
              <div className="detailed">
                <Image src={Profile} className="navbar-brand-light detailImg" />
                <h3 className="mb-1 mt-3">Denila Thomas</h3>
                <h5 className="text-gray">Sr. Developer</h5>
                <span className="starIcon">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="text-gray d-block">(7Reviews)</span>
                <span className="text-gray d-block mt-2">
                  Overall Jobs: <span className="text-black">25</span>
                </span>
                <span className="text-gray d-block mt-2">
                  Plumber Jobs: <span className="text-black">22</span>
                </span>
              </div>
            </Card>

            <Card border="light" className="card-box-shadow py-3 px-4 mb-2">
              <h3 className="mb-3 mt-2 text-center">Services</h3>
              <Col xs={12} className="pb-3">
                <RecommendCard
                  img={ReactHero}
                  name={"Seni"}
                  type={"IT"}
                  rate={"30"}
                  completed={"10"}
                  star={"3.6"}
                />
              </Col>
              <Col xs={12} className="pb-3">
                <RecommendCard
                  img={ReactHero}
                  name={"Seni"}
                  type={"IT"}
                  rate={"30"}
                  completed={"10"}
                  star={"3.6"}
                />
              </Col>
              <Col xs={12} className="pb-3">
                <RecommendCard
                  img={ReactHero}
                  name={"Seni"}
                  type={"IT"}
                  rate={"30"}
                  completed={"10"}
                  star={"3.6"}
                />
              </Col>
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
                    >
                      <path
                        d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3822 22.0021 8.78829 21.6102 7.35601 20.858L3.06601 21.975C2.92267 22.0123 2.77205 22.0116 2.6291 21.9728C2.48615 21.934 2.35582 21.8585 2.25102 21.7538C2.14623 21.6491 2.07062 21.5188 2.03168 21.3759C1.99273 21.233 1.99181 21.0824 2.02901 20.939L3.14501 16.65C2.39081 15.2162 1.99778 13.6201 2.00001 12C2.00001 6.477 6.47701 2 12 2ZM13.252 13H8.75001L8.64801 13.007C8.4685 13.0317 8.304 13.1206 8.18492 13.2571C8.06584 13.3937 8.00024 13.5688 8.00024 13.75C8.00024 13.9312 8.06584 14.1063 8.18492 14.2429C8.304 14.3794 8.4685 14.4683 8.64801 14.493L8.75001 14.5H13.252L13.353 14.493C13.5325 14.4683 13.697 14.3794 13.8161 14.2429C13.9352 14.1063 14.0008 13.9312 14.0008 13.75C14.0008 13.5688 13.9352 13.3937 13.8161 13.2571C13.697 13.1206 13.5325 13.0317 13.353 13.007L13.252 13ZM15.25 9.5H8.75001L8.64801 9.507C8.4685 9.5317 8.304 9.62055 8.18492 9.75714C8.06584 9.89372 8.00024 10.0688 8.00024 10.25C8.00024 10.4312 8.06584 10.6063 8.18492 10.7429C8.304 10.8794 8.4685 10.9683 8.64801 10.993L8.75001 11H15.25L15.352 10.993C15.5315 10.9683 15.696 10.8794 15.8151 10.7429C15.9342 10.6063 15.9998 10.4312 15.9998 10.25C15.9998 10.0688 15.9342 9.89372 15.8151 9.75714C15.696 9.62055 15.5315 9.5317 15.352 9.507L15.25 9.5Z"
                        fill="#12499C"
                      />
                    </svg>

                    <Dropdown as={ButtonGroup} className="me-3 mt-1 ms-4">
                      <Dropdown.Toggle
                        as={Button}
                        split
                        variant="link"
                        className="text-dark m-0 p-0 ellipsisIcon"
                      >
                        <span className="icon icon-sm">
                          <FontAwesomeIcon
                            icon={faEllipsisV}
                            className="icon-dark"
                          />
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="custom_menu">
                        <Dropdown.Item>Block</Dropdown.Item>
                        <Dropdown.Item>Report</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                </div>

                <DetailHeading heading={"Email"} value={"abc@xyz.com"} />
                <DetailHeading heading={"Phone"} value={"000-1234-567"} />
                <DetailHeading heading={"Address"} value={"Address"} />
                <DetailHeading heading={"City"} value={"City"} />
                <DetailHeading heading={"Province"} value={"Province"} />
                <DetailHeading heading={"Postal Code"} value={"1234567"} />
                <DetailHeading
                  heading={" Date of Birth"}
                  value={"DD/MM/YYYY"}
                />
                <DetailHeading
                  heading={"Personal Attributes"}
                  value={"Lorem Ipsum"}
                />
                <DetailHeading
                  heading={"Career Overview"}
                  value={"Lorem Ipsum"}
                />
                <DetailHeading
                  heading={"Volenteering History"}
                  value={"Lorem Ipsum"}
                />
                <DetailHeading
                  heading={" Tools Available"}
                  value={"Lorem Ipsum"}
                />
                <DetailHeading
                  heading={"Transportation Available"}
                  value={"Lorem Ipsum"}
                />
                <DetailHeading heading={" Job Type"} value={"Lorem Ipsum"} />
              </Card.Body>

              <Card.Body className="pb-2 border_bottom mb-1 d-flex justify-content-between align-items-baseline">
                <Card.Text className="text-black mb-2">
                  Work Experience
                </Card.Text>
                <FontAwesomeIcon color="#12499C" icon={faChevronRight} />
              </Card.Body>

              <Card.Body className="mb-2 d-flex justify-content-between align-items-baseline">
                <Card.Text className="text-black mb-2">
                  Achievement/Certification
                </Card.Text>
                <FontAwesomeIcon color="#12499C" icon={faChevronRight} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProviderProfile;