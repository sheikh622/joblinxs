import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "@themesberg/react-bootstrap";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  newArrivalProvider,
} from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const newArrivalProviders = useSelector(
    (state) => state?.Seeker?.newArrivalProvider?.data
  );
  useEffect(() => {
    dispatch(
      newArrivalProvider({
        page: 1,
        count: 15,
      })
    );
  }, []);

  return (
    <>
      <Navbar module={"New Arrival Seekers"} />
      <Container>
        <Row className="py-2 justify-content-center">
        {newArrivalProviders?.length > 0 ? (
              <>
                {newArrivalProviders?.map((item) => {
                  return (
                    <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                      <CommonCard
                        img={item?.profileImg}
                        name={item?.fullName}
                        type={item?.employmentType}
                        rate={"70"}
                        id={item.id}
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
