import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "@themesberg/react-bootstrap";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import Profile from "../../assets/img/team/profile.png";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import RecommendCard from "../../components/RecommendCard";
import { useDispatch, useSelector } from "react-redux";
import { getSeekerListing } from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const SeekerList = useSelector((state) => state?.Seeker?.getSeekerListing);
  const [page] = useState(1);
  const [limit] = useState("5");
  useEffect(() => {
    dispatch(
      getSeekerListing({
        page: page,
        limit: limit,
      })
    );
  }, [page, limit]);

  return (
    <>
      {console.log("SeekerList", SeekerList.jobs)}
      <Navbar module={"Dashboard"} />
      <Container>
        {/* Recommended */}
        <Row className="pt-2 pb-4">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>Recommended for you</h4>
            {SeekerList?.jobs?.length > 0 && <p>view all</p>}
          </div>
          {SeekerList?.jobs?.length > 0 ? (
            <>
              {SeekerList?.jobs?.map((value, index) => {
                return (
                  <Col lg={4} md={12} xs={12} sm={12} className="pb-3" key={index}>
                    <RecommendCard
                      img={value.image}
                      name={value.name}
                      // type={"IT"}
                      id={value.id}
                      rate={value.rate}
                      completed={"10"}
                      star={"3.6"}
                    />
                  </Col>
                );
              })}
            </>
          ) : (
            <>
              <NoRecordFound />
            </>
          )}
        </Row>

        {/* Featured */}
        <Row className="py-2 justify-content-center">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>Featured Jobs</h4>
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

        {/* Plumber */}
        <Row className="py-2">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>Plumber</h4>
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

export default DashboardOverview;
