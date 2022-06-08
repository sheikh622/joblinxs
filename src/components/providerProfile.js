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
              <Card.Body className="pb-2 border_bottom mb-4">
                <div className="pb-2">
                  <Card.Title className="text-primary">
                    User Information
                  </Card.Title>
                </div>
                <DetailHeading heading={'Email'} value={'abc@xyz.com'} />
                <DetailHeading heading={'Phone'} value={'000-1234-567'} />
                <DetailHeading heading={'Address'} value={'Address'} />
                <DetailHeading heading={'City'} value={'City'} />
                <DetailHeading heading={'Province'} value={'Province'} />
                <DetailHeading heading={'Postal Code'} value={'1234567'} />
                <DetailHeading heading={' Date of Birth'} value={'DD/MM/YYYY'} />
                <DetailHeading heading={'Personal Attributes'} value={'Lorem Ipsum'} />
                <DetailHeading heading={'Career Overview'} value={'Lorem Ipsum'} />
                <DetailHeading heading={'Volenteering History'} value={'Lorem Ipsum'} />
                <DetailHeading heading={' Tools Available'} value={'Lorem Ipsum'} />
                <DetailHeading heading={'Transportation Available'} value={'Lorem Ipsum'} />
                <DetailHeading heading={' Job Type'} value={'Lorem Ipsum'} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProviderProfile;
