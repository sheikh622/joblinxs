import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "@themesberg/react-bootstrap";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import Profile from "../../assets/img/team/profile.png";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import RecommendCard from "../../components/RecommendCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getSeekerListing,
  newArrivalProvider,
  newArrivalSeeker,
} from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const SeekerList = useSelector((state) => state?.Seeker?.getSeekerListing);
  const newArrivalProviders = useSelector(
    (state) => state?.Seeker?.newArrivalProvider?.data
  );
  const newArrivalSeekers = useSelector(
    (state) => state?.Seeker?.newArrivalSeeker
  );
  useEffect(() => {
    dispatch(
      getSeekerListing({
        page: 1,
        limit: 5,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      newArrivalProvider({
        page: 1,
        count: 5,
      })
    );
    dispatch(
      newArrivalSeeker({
        page: 1,
        count: 5,
      })
    );
  }, []);

  return (
    <>
      <Navbar module={"Dashboard"} />
      <Container>
        {/* Recommended */}
        <Row className="pt-2 pb-4">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>Recommended for you</h4>
            {SeekerList?.jobs?.length > 0 && <a href="/recommended">view all</a>}
          </div>
          {SeekerList?.jobs?.length > 0 ? (
            <>
              {SeekerList?.jobs?.map((value, index) => {
                return (
                  <Col
                    lg={4}
                    md={12}
                    xs={12}
                    sm={12}
                    className="pb-3"
                    key={index}
                  >
                    <RecommendCard
                      img={value.image}
                      name={value.name}
                      // type={"IT"}
                      isFavourite={value.isFavourite}
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
            <NoRecordFound />
          )}
        </Row>

        {/* Featured */}
        <Row className="py-2 justify-content-center">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>New Arrival Provider</h4>
            <a href="/Newarrivalproviders">view all</a>
          </div>
          {newArrivalProviders?.length > 0 ? (
              <>
                {newArrivalProviders?.map((item) => {
                  return (
                    <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                      <CommonCard
                        img={item?.profileImg}
                        name={item?.fullName}
                        id={item?.id}
                        type={item?.employmentType}
                        rate={"70"}
                        completed={"90"}
                        star={"4.7"}
                      />
                    </Col>
                  );
                })}
              </>
          ) : (
            <NoRecordFound />
          )}
        </Row>

        {/* Plumber */}
        <Row className="py-2">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>New Arrival Seeker</h4>
            <a href="/NewArrivalSeekers">view all</a>
          </div>
          {newArrivalSeekers?.length > 0 ? (
            <>
              {newArrivalSeekers?.map((item) => {
                return (
                  <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                    <CommonCard
                      img={item?.profileImg}
                      name={item?.fullName}
                      type={item?.employmentType}
                      id={item?.id}
                      rate={"70"}
                      completed={"90"}
                      star={"4.7"}
                    />
                  </Col>
                );
              })}
            </>
          ) : (
            <NoRecordFound />
          )}
        </Row>
      </Container>
    </>
  );
};

export default DashboardOverview;
