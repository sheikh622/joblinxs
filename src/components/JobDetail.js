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
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Profile from "../assets/img/team/profile.png";
import { Routes } from "../routes";

const JobDetail = () => {
  return (
    <>
      <Navbar module={"Job Detail"} />
      <Container>
        <Card border="light" className="card-box-shadow py-3 px-4 pb-1 mb-3">
          <Row>
            <Col lg={12} xs={12} className="pb-3">
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
                  <h5 className="mt-3 mb-0"> Job Reviews </h5>
                  <span className="starIcon">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className="d-block">
                    <span className="text-black">Total reviews:</span> 15
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
              <span className="d-flex align-items-baseline">
                <div>
                  <h5>Task Size:</h5>
                  <h5>Basic tools:</h5>
                  <h5>Task Address:</h5>
                </div>
                <div className="ms-3">
                  <p className="p-0 m-0">Medium - Est. 2-3hrs</p>
                  <p className="p-0 m-0">Tasker will bring tools</p>
                  <p className="p-0 m-0">ABC, XYZ, CA 12345</p>
                </div>
              </span>
            </Col>
          </Row>
          {/* </Card>

        <Card border="light" className="card-box-shadow py-3 px-4 pb-1 mb-3"> */}
          <Row className="border-top">
            <Col lg={12} xs={12} className="pb-3 mt-3">
              <div className="detail">
                <span className="left">
                  <Image
                    src={Profile}
                    className="navbar-brand-light detailImg sm"
                  />
                </span>
                <span className="right">
                  <p className="text-gray mb-0">Provider name</p>
                  <Link className="fw-bold" to={Routes.DetailProvider.path}>
                    <h3>Denila Thomas</h3>
                  </Link>
                  <span className="mt-3 mb-0 text-gray">
                    Job Reviews: <span className="text-black">$20</span>{" "}
                  </span>
                </span>
              </div>
              <div class="d-grid gap-2 col-3 mx-auto">
                <Button
                  variant="primary"
                  color="dark"
                  size="lg"
                  className="mt-2 me-1"
                >
                  Hire Now
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};
export default JobDetail;
