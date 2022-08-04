import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  Pagination,
  Card,
  Nav,
} from "@themesberg/react-bootstrap";
import Navbar from "../../components/Navbar";
import RecommendCard from "../../components/RecommendCard";
import { useDispatch, useSelector } from "react-redux";
import { getSeekerListing } from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCheck,
  faEllipsisH,
  faMinus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const SeekerList = useSelector((state) => state?.Seeker?.getSeekerListing);
  console.log(SeekerList);
  useEffect(() => {
    dispatch(
      getSeekerListing({
        page: page,
        limit: 9,
        setLoader: setLoader,
      })
    );
  }, []);

  const nextPage = () => {
    if (page < SeekerList?.pages) {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (1 > page) {
      setPage(page - 1);
    }
  };

  const paginationItems = () => {
    let items = [];
    for (let number = 1; number <= SeekerList?.pages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === page}
          onClick={() => {
            setPage(number);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <>
      <Navbar module={"Recommended For You"} />
      <Container>
        {/* Recommended */}
        <Row className="pt-2 pb-4">
          {loader ? (
            <Spinner />
          ) : (
            <>
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
                  <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                    <Nav>
                      <Pagination size={"sm"} className="mb-2 mb-lg-0">
                        <Pagination.Prev onClick={() => previousPage()}>
                          <FontAwesomeIcon icon={faAngleDoubleLeft} />
                        </Pagination.Prev>
                        {paginationItems()}
                        <Pagination.Next onClick={() => nextPage()}>
                          <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </Pagination.Next>
                      </Pagination>
                    </Nav>
                  </Card.Footer>
                </>
              ) : (
                <NoRecordFound />
              )}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default DashboardOverview;
