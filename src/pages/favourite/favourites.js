import React, { useEffect, useState } from "react";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCheck,
  faEllipsisH,
  faMinus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Modal,
  Nav,
  Pagination,
  Row,
  Table,
} from "@themesberg/react-bootstrap";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import { favouriteJobList } from "../../Redux/addJob/actions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";

const Favourites = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const history = useHistory();
  const JobList = useSelector((state) => state.addJob?.favouriteJob);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    dispatch(
      favouriteJobList({
        page: page,
        setLoader: setLoader,

      })
    );
  }, [page]);
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
      <Navbar module={"Favourites"} />
      <Container>
        {/* Featured */}
        {loader ? (
          <Spinner />
        ) : (
          <>
            {JobList?.jobs?.length > 0 ? (
              <Row className="py-2">
                {JobList?.jobs?.map((item) => {
                  return (
                    <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                      <CommonCard
                        id={item.id}
                        img={item.image}
                        name={item.name}
                        isFavourite={item.isFavourite}
                        type={item?.jobType?.name}
                        rate={item.rate}
                        completed={"90"}
                        star={item.rating}
                        page={item.page}
                        limit={item.limit}
                        category={item.categoryType}
                      />
                    </Col>
                  );
                })}
                <Col
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className="d-flex justify-content-between"
                >
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
                  <small className="fw-bold">
                    Showing <b>{JobList?.jobs?.length}</b> out of{" "}
                    <b>{JobList?.total_jobs}</b> entries
                  </small>
                </Col>
              </Row>
            ) : (
              <NoRecordFound />
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Favourites;
