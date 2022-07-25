import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "@themesberg/react-bootstrap";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { topRated } from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.Auther);
  const topRatedData = useSelector(
    (state) => state?.Seeker?.topRated
  );

  useEffect(() => {
    dispatch(
      topRated({
        page: 1,
        userId:auth?.id,
        count: 15,
      })
    );
  }, []);

  return (
    <>
      <Navbar module={"New Arrival Seekrs"} />
      <Container>
        <Row className="py-2">
          {topRatedData?.length > 0 ? (
            <>
              {topRatedData?.map((item) => {
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
