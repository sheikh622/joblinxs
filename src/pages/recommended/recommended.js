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
import CommonCard from "../../components/CommonCard";
import { useDispatch, useSelector } from "react-redux";
import { getSeekerListing } from "../../Redux/Dashboard/actions";
import { markAsFavouriteJob } from "../../Redux/addJob/actions";
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
  const [data, setData] = useState()
  const [page, setPage] = useState(1);
  const SeekerList = useSelector((state) => state?.Seeker?.getSeekerListing);
  useEffect(()=>{
    if(SeekerList !== undefined){
      setData(SeekerList?.jobs)
    }
  },[SeekerList])
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
  const handleClick =(id, value, isFavourite,title)=>{
      let newArray = data;
      newArray[value].isFavourite = !isFavourite;
      setData(() => {
        return [...newArray];
      });
    dispatch(
        markAsFavouriteJob({
          id: id,
          setLoader:setLoader,
        })
      );
  }
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
              {data?.length > 0 ? (
                <>
                  {data?.map((value, index) => {
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
                          handleClick={handleClick}
                          isFavourite={value.isFavourite}
                          index={index}
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
