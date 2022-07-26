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
  newArrival,
  topRated,
} from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const SeekerList = useSelector((state) => state?.Seeker?.getSeekerListing);
  const auth = useSelector((state) => state.auth.Auther);
  const newArrivalData = useSelector(
    (state) => state?.Seeker?.newArrival?.data
  );
  const topRatedData = useSelector((state) => state?.Seeker?.topRated);
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
      newArrival({
        page: 1,
        userId: auth?.id,
        count: 5,
      })
    );
    dispatch(
      topRated({
        page: 1,
        userId: auth?.id,
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
            {SeekerList?.jobs?.length > 0 && (
              <a href="/recommended">view all</a>
            )}
          </div>
          {SeekerList?.jobs?.length > 0 ? (
            <>
              {SeekerList?.jobs?.map((value, index) => {
                return (
                  <Col
                    lg={2}
                    md={4}
                    sm={6}
                    xs={12}
                    className="pb-3"
                    key={index}
                  >
                    <CommonCard
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
            <h4>New Arrival Jobs By Provider</h4>
            <a href="/Newarrivalproviders">view all</a>
          </div>
          {newArrivalData?.length > 0 ? (
            <>
              {newArrivalData?.map((item) => {
                return (
                  <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                    <CommonCard
                      img={item?.profileImg}
                      name={item?.fullName}
                      id={item?.id}
                      isFavourite={item.isFavourite}
                      type={item?.employmentType}
                      rate={item.rate}
                      completed={"90"}
                      star={item.rating}
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
            <h4>Top Rated Jobs By provider</h4>
            <a href="/TopRatedProviders">view all</a>
          </div>
          {topRatedData?.length > 0 ? (
            <>
              {topRatedData?.map((item) => {
                return (
                  <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                    <CommonCard
                      img={item?.profileImg}
                      name={item?.fullName}
                      type={item?.employmentType}
                      id={item?.id}
                      isFavourite={item.isFavourite}
                      rate={item.rate}
                      completed={"90"}
                      star={item.rating}
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
