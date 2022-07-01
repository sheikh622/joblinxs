import React, {useEffect, useState} from "react";
import { Col, Container, Row,Pagination } from "@themesberg/react-bootstrap";
import Profile from "../../assets/img/team/profile.png";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import {favouriteJobList} from "../../Redux/addJob/actions"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const history = useHistory();
  const JobList = useSelector(
    (state) => state
  );
  console.log(JobList, "here is job list")
  useEffect(() => {
    dispatch(
      favouriteJobList({
        page:page
      })
    )
  }, [page])
  const nextPage = () => {
    if (page < JobList?.pages) {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (1 < page) {
      setPage(page - 1);
    }
  };
  const paginationItems = () => {
    let items = [];
    for (let number = 1; number <= JobList?.pages; number++) {
      items.push(
        <Pagination.Item key={number} active={number === page} onClick={() => {
          setPage(number)
        }}>
          {number}
        </Pagination.Item>,
      );
    }
    return items
  }
  
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
