import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  Col,
  Container,
  Nav,
  Pagination,
  Row,
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import Spinner from "../../components/spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import { markAsFavouriteJob } from "../../Redux/addJob/actions";
import { newArrival } from "../../Redux/Dashboard/actions";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [newArrivalProvider, setNewArrivalProvider] = useState();
  const auth = useSelector((state) => state.auth.Auther);
  const newArrivalData = useSelector((state) => state?.Seeker?.newArrival);
  useEffect(() => {
    if (newArrivalData !== undefined) {
      setNewArrivalProvider(newArrivalData?.data);
    }
  }, [newArrivalData]);
  useEffect(() => {
    dispatch(
      newArrival({
        page: page,
        userId: auth?.id,
        count: 15,
        setLoader: setLoader,
      })
    );
  }, []);
  const nextPage = () => {
    if (page < newArrivalData?.pages) {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (1 > page) {
      setPage(page - 1);
    }
  };

  const paginationItems = () => {
    console.log(newArrivalData);
    let items = [];
    for (let number = 1; number <= newArrivalData?.pages; number++) {
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
  const handleClick = (id, value, isFavourite, title) => {
    let newArray = newArrivalData?.data;
    newArray[value].isFavourite = !isFavourite;
    setNewArrivalProvider(() => {
      return [...newArray];
    });
    dispatch(
      markAsFavouriteJob({
        id: id,
        setLoader: setLoader,
      })
    );
  };
  return (
    <>
      <Navbar module={"New Arrival Seekers"} />
      <Container>
        <Row className="py-2">
          {loader ? (
            <Spinner />
          ) : (
            <>
              {newArrivalProvider?.length > 0 ? (
                <>
                  {newArrivalProvider?.map((item, index) => {
                    return (
                      <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                        <CommonCard
                          img={item?.image}
                          name={item?.name}
                          type={item?.employmentType}
                          id={item.id}
                          index={index}
                          isFavourite={item.isFavourite}
                          handleClick={handleClick}
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
