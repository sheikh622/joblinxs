import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "@themesberg/react-bootstrap";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { newArrivalSeeker } from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const newArrivalSeekers = useSelector(
    (state) => state?.Seeker?.newArrivalSeeker
  );

  useEffect(() => {
    dispatch(
      newArrivalSeeker({
        page: 1,
        count: 15,
      })
    );
  }, []);

  return (
    <>
      <Navbar module={"New Arrival Seekrs"} />
      <Container>
        <Row className="py-2">
          {newArrivalSeekers?.length > 0 ? (
            <>
              {newArrivalSeekers?.map((item) => {
                return (
                  <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                    <CommonCard
                      img={item?.profileImg}
                      name={item?.fullName}
                      type={item?.employmentType}
                      id={item.id}
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
