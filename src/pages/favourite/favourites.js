import { Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import Profile from "../../assets/img/team/profile.png";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";

const Favourites = () => {
  return (
    <>
      <Navbar module={"Favourites"} />
      <Container>
        {/* Featured */}
        <Row className="py-2 justify-content-between">
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

export default Favourites;
