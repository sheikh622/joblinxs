import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "@themesberg/react-bootstrap";
import Navbar from "../../components/Navbar";
import RecommendCard from "../../components/RecommendCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getSeekerListing,
} from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const SeekerList = useSelector((state) => state?.Seeker?.getSeekerListing);
  useEffect(() => {
    dispatch(
      getSeekerListing({
        page: 1,
        limit: 9,
      })
    );
  }, []);

  return (
    <>
      <Navbar module={"Recommended For You"} />
      <Container>
        {/* Recommended */}
        <Row className="pt-2 pb-4">
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
      </Container>
    </>
  );
};

export default DashboardOverview;
