import React from "react";
import { Col, Row, Container, Button } from "@themesberg/react-bootstrap";
import Navbar from "../../components/Navbar";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
import Profile from "../../assets/img/team/profile.png";
import RecommendCard from "../../components/RecommendCard";
import CommonCard from "../../components/CommonCard";

const Job = () => {
  return (
    <>
      <Navbar module={"My Jobs"} />
      <Container>
        {/* Created Job */}
        <Row className="pt-2 pb-4">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>Created Job</h4>
            <span className="d-flex align-items-baseline">
              <p>view all</p>
              <Link className="text-white fw-bold" to={Routes.CreateJob.path}>
                <Button variant="primary" className="mx-2">
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
                  </svg>{'  '}
                  Add Job
                </Button>
              </Link>
            </span>
          </div>
          <Col lg={4} md={12} xs={12} sm={12} className="pb-3">
            <RecommendCard
              img={ReactHero}
              name={"Seni"}
              type={"IT"}
              rate={"30"}
              completed={"10"}
              star={"3.6"}
            />
          </Col>
          <Col lg={4} md={12} xs={12} sm={12} className="pb-3">
            <RecommendCard
              img={ReactHero}
              name={"Seni"}
              type={"IT"}
              rate={"30"}
              completed={"10"}
              star={"3.6"}
            />
          </Col>
          <Col lg={4} md={12} xs={12} sm={12} className="pb-3">
            <RecommendCard
              img={ReactHero}
              name={"Seni"}
              type={"IT"}
              rate={"30"}
              completed={"10"}
              star={"3.6"}
            />
          </Col>
        </Row>

        {/* Upcoming */}
        <Row className="py-2 justify-content-between">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>Upcoming</h4>
            <p>view all</p>
          </div>
          <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
            <CommonCard
              img={Profile}
              name={"Jeni"}
              type={"Chemical"}
              rate={"70"}
              completed={"90"}
              star={"4.7"}
            />
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
            <CommonCard
              img={Profile}
              name={"Jeni"}
              type={"Chemical"}
              rate={"70"}
              completed={"90"}
              star={"4.7"}
            />
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
            <CommonCard
              img={Profile}
              name={"Jeni"}
              type={"Chemical"}
              rate={"70"}
              completed={"90"}
              star={"4.7"}
            />
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
            <CommonCard
              img={Profile}
              name={"Jeni"}
              type={"Chemical"}
              rate={"70"}
              completed={"90"}
              star={"4.7"}
            />
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
            <CommonCard
              img={Profile}
              name={"Jeni"}
              type={"Chemical"}
              rate={"70"}
              completed={"90"}
              star={"4.7"}
            />
          </Col>
        </Row>

        {/* Pending */}
        <Row className="py-2">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>Pending</h4>
            <p>view all</p>
          </div>

          <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
            <CommonCard
              img={Profile}
              name={"Jeni"}
              type={"Chemical"}
              rate={"70"}
              completed={"90"}
              star={"4.7"}
            />
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
            <CommonCard
              img={Profile}
              name={"Jeni"}
              type={"Chemical"}
              rate={"70"}
              completed={"90"}
              star={"4.7"}
            />
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
            <CommonCard
              img={Profile}
              name={"Jeni"}
              type={"Chemical"}
              rate={"70"}
              completed={"90"}
              star={"4.7"}
            />
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
            <CommonCard
              img={Profile}
              name={"Jeni"}
              type={"Chemical"}
              rate={"70"}
              completed={"90"}
              star={"4.7"}
            />
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
            <CommonCard
              img={Profile}
              name={"Jeni"}
              type={"Chemical"}
              rate={"70"}
              completed={"90"}
              star={"4.7"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Job;
