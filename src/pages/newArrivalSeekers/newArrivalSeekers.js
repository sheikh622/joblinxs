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
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCheck,
  faEllipsisH,
  faMinus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { topRated } from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const auth = useSelector((state) => state.auth.Auther);
  const topRatedData = useSelector((state) => state?.Seeker?.topRated);
  useEffect(() => {
    dispatch(
      topRated({
        page: page,
        userId: auth?.id,
        count: 15,
        setLoader: setLoader,
      })
    );
  }, []);
  const nextPage = () => {
    if (page < topRatedData?.pages) {
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
    for (let number = 1; number <= topRatedData?.pages; number++) {
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
      <Navbar module={"Top Rated Providers"} />
      <Container>
        <Row className="py-2">
          {loader ? (
            <Spinner />
          ) : (
            <>
              {topRatedData?.data?.length > 0 ? (
                <>
                  {topRatedData?.data?.map((item) => {
                    return (
                      <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                        <CommonCard
                          img={item?.image}
                          name={item?.name}
                          type={item?.employmentType}
                          id={item.id}
                          rate={item.rate}
                          completed={"90"}
                          star={item.rating}
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
