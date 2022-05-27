import React from "react";
import {
  Container,
  Image,
  Col,
  Row,
  Card,
  Button,
} from "@themesberg/react-bootstrap";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Profile from "../assets/img/team/profile.png";
import ReactHero from "../assets/img/team/profile-picture-3.jpg";
import RecommendCard from "../components/RecommendCard";

const ProviderProfile = () => {
  return (
    <>
      <Navbar module={"Service Provider Profile"} />
      <Container>
        <Card border="light" className="card-box-shadow py-3 px-4 pb-1 mb-3">
          <Row>
            <Col lg={12} xs={12} className="pb-3 mb-3">
              <div className="detail">
                <span className="left">
                  <Image
                    src={Profile}
                    className="navbar-brand-light detailImg"
                  />
                </span>
                <span className="right">
                  <h3 className="mb-1">Denila Thomas</h3>
                  <h5 className="text-gray">Sr. Developer</h5>
                  <span className="d-flex align-items-center">
                    <span className="starIcon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    ( 15 )
                  </span>
                </span>
              </div>
            </Col>
            <Col lg={11} xs={12} className="pb-3">
              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio eu
                ornare sed ornare pretium, faucibus. Morbi diam hendrerit dui
                tortor id consequat. Nisl et ridiculus scelerisque at. Eleifend
                morbi nulla ut quam dui sed. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Odio eu ornare sed ornare pretium,
                faucibus.
              </p>
            </Col>
            <Col lg={12} xs={12} className="pb-3 detailSec">
              <h4>Number of jobs</h4>
              <span className="d-flex align-items-baseline">
                <div>
                  <h5>Teacher:</h5>
                  <h5>Plumber:</h5>
                  <h5>Job Completed:</h5>
                </div>
                <div className="ms-3">
                  <p className="p-0 m-0">19</p>
                  <p className="p-0 m-0">2</p>
                  <p className="p-0 m-0">21</p>
                </div>
              </span>
            </Col>
          </Row>
          {/* </Card>

        <Card border="light" className="card-box-shadow py-3 px-4 pb-1 mb-3"> */}
          <Row className="border-top">
            <h4 className="my-3">My Jobs</h4>
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
        </Card>
      </Container>
    </>
  );
};
export default ProviderProfile;
