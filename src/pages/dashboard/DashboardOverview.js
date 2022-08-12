import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Modal, Button, Card } from "@themesberg/react-bootstrap";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import Profile from "../../assets/img/team/profile.png";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import RecommendCard from "../../components/RecommendCard";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner";
import {
  getSeekerListing,
  newArrival,
  topRated,
} from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";
import { useHistory, useLocation } from "react-router-dom";
import { markAsFavouriteJob } from "../../Redux/addJob/actions";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const history = useHistory();
  const SeekerList = useSelector((state) => state?.Seeker?.getSeekerListing?.jobs);
  const auth = useSelector((state) => state.auth.Auther);
  const newArrivalData = useSelector(
    (state) => state?.Seeker?.newArrival?.data
  );
  const topRatedData = useSelector((state) => state?.Seeker?.topRated?.data);
  const [data, setData] = useState()
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const [showDefault, setShowDefault] = useState(false);

  const [topRatedProvider, setTopRatedProvider] = useState()
  const [newArrivalProvider, setNewArrivalProvider] = useState()
  useEffect(() => {
    if (SeekerList !== undefined) {
      setData(SeekerList)
    }
  }, [SeekerList])
  useEffect(() => {
    if (newArrivalData !== undefined) {
      setNewArrivalProvider(newArrivalData)
    }
  }, [newArrivalData])
  useEffect(() => {
    if (topRatedData !== undefined) {
      setTopRatedProvider(topRatedData)
    }
  }, [topRatedData])

  useEffect(() => {
    dispatch(
      getSeekerListing({
        page: 1,
        limit: 5,
        setLoader: setLoader,
      })
    );
  }, []);
  const handlefalse = () => {
    setShowDefault(false);
  }
  useEffect(() => {
    dispatch(
      newArrival({
        page: 1,
        userId: auth?.id,
        count: 5,
        setLoader: setLoader,
      })
    );
    dispatch(
      topRated({
        page: 1,
        userId: auth?.id,
        count: 5,
        setLoader: setLoader,
      })
    );
  }, []);

  const handleClick = (id, value, isFavourite, title) => {
    if (title === "topRate") {
      let newArray = topRatedProvider;
      newArray[value].isFavourite = !isFavourite;
      setTopRatedProvider(() => {
        return [...newArray];
      });
    }
    if (title === "newArrivals") {
      let newArray = newArrivalProvider;
      newArray[value].isFavourite = !isFavourite;
      setNewArrivalProvider(() => {
        return [...newArray];
      });
    }
    if (title === "recommended") {
      let newArray = data;
      newArray[value].isFavourite = !isFavourite;
      setData(() => {
        return [...newArray];
      });
    }
    dispatch(
      markAsFavouriteJob({
        id: id,
        setLoader: setLoader,
      })
    );
  }
  return (
    <>
      <Navbar module={"Dashboard"} />
      <Container>
        <Row className="pt-2 pb-4">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <Col lg={9} md={9}>
              <Form.Group>
                <Form.Control
                  type="text"
                  select
                  placeholder="Search"
                  label="Search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </Form.Group>
            </Col>

            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
              setShowDefault(true);
            }} >

              <path d="M1.07945 0.35791H16.9195C17.1078 0.358028 17.2923 0.411334 17.4517 0.511693C17.611 0.612051 17.7388 0.75538 17.8204 0.925179C17.9019 1.09498 17.9337 1.28434 17.9124 1.47147C17.891 1.6586 17.8172 1.83588 17.6995 1.98291L11.2195 10.0839C11.0772 10.2612 10.9996 10.4816 10.9995 10.7089V15.8579C10.9995 16.0132 10.9633 16.1663 10.8939 16.3051C10.8245 16.444 10.7237 16.5648 10.5995 16.6579L8.59945 18.1579C8.45089 18.2693 8.27422 18.3372 8.08926 18.3539C7.9043 18.3705 7.71835 18.3354 7.55224 18.2523C7.38613 18.1693 7.24644 18.0416 7.1488 17.8836C7.05117 17.7257 6.99945 17.5436 6.99945 17.3579V10.7079C6.99905 10.481 6.92147 10.2609 6.77945 10.0839L0.299454 1.98291C0.181737 1.83588 0.107936 1.6586 0.0865476 1.47147C0.0651589 1.28434 0.0970522 1.09498 0.178556 0.925179C0.260059 0.75538 0.387859 0.612051 0.547241 0.511693C0.706623 0.411334 0.891108 0.358028 1.07945 0.35791V0.35791Z" fill="#12499C" />
            </svg>
          </div>
        </Row>
        {/* Recommended */}
        <Row className="pt-2 pb-4">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>Recommended for you</h4>
            {data?.length > 0 && (
              <a href="/recommended">view all</a>
            )}
          </div>
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
                          title="recommended"
                          isFavourite={value.isFavourite}
                          setLoader={setLoader}
                          loader={loader}
                          index={index}
                          id={value.id}
                          handleClick={handleClick}
                          rate={value.rate}
                          completed={"10"}
                          star={value.rating}
                        />
                      </Col>
                    );
                  })}
                </>
              ) : (
                <NoRecordFound />
              )}
            </>
          )}
        </Row>
        {/* Featured */}
        <Row className="py-2 justify-content-center">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>New Arrival Jobs By Provider</h4>
            <a href="/Newarrivalproviders">view all</a>
          </div>
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
                          setLoader={setLoader}
                          index={index}
                          title="newArrivals"
                          handleClick={handleClick}
                          id={item?.id}
                          loader={loader}
                          isFavourite={item.isFavourite}
                          type={item?.employmentType}
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
            </>
          )}
        </Row>

        {/* Plumber */}
        <Row className="py-2">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
            <h4>Top Rated Jobs By provider</h4>
            <a href="/TopRatedProviders">view all</a>
          </div>
          {loader ? (
            <Spinner />
          ) : (
            <>
              {topRatedProvider?.length > 0 ? (
                <>
                  {topRatedProvider?.map((item, index) => {
                    return (
                      <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                        <CommonCard
                          img={item?.image}
                          name={item?.name}
                          type={item?.employmentType}
                          setLoader={setLoader}
                          loader={loader}
                          id={item?.id}
                          handleClick={handleClick}
                          index={index}
                          title="topRate"
                          isFavourite={item.isFavourite}
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
            </>
          )}
        </Row>
      </Container>
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handlefalse}>
        <Modal.Header>
          <Modal.Title className="h5">Filters</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handlefalse} />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Row>
                
                  <Col lg={12} md={8} xs={8} className="pb-3 mb-3">
                    <Modal.Header>
                      <h6>Location</h6>
                      <div class="d-grid gap-2 col-3 mx-auto">
                        <Button
                          variant="primary"
                          color="dark"
                          size="lg"
                          className="mt-2 me-1"
                        >
                          Location
                        </Button>
                      </div>
                    </Modal.Header>
                  </Col>
                
                <Modal.Header>
                  <h6>Distance</h6>
                </Modal.Header>

                <Modal.Header>
                  <h6>Category</h6>
                  <div class="d-grid gap-2 col-3 mx-auto">
                    <Button
                      variant="primary"
                      color="dark"
                      size="lg"
                      className="mt-2 me-1"
                    >
                      Plumber
                    </Button>
                  </div>
                  <div class="d-grid gap-2 col-3 mx-auto">
                    <Button
                      variant="primary"
                      color="dark"
                      size="lg"
                      className="mt-2 me-1"
                    >
                      Electrician
                    </Button>
                  </div>
                  <div class="d-grid gap-2 col-3 mx-auto">
                    <Button
                      variant="primary"
                      color="dark"
                      size="lg"
                      className="mt-2 me-1"
                    >
                      developer
                    </Button>
                  </div>
                </Modal.Header>
                <Modal.Header>
                  <h6>Rating</h6>
                </Modal.Header>
                <Modal.Header>
                  <h6>Sort by</h6>
                  <div class="d-grid gap-2 col-3 mx-auto">
                    <Button
                      variant="primary"
                      color="dark"
                      size="lg"
                      className="mt-2 me-1"
                    >
                      None
                    </Button>
                  </div>
                  <div class="d-grid gap-2 col-3 mx-auto">
                    <Button
                      variant="primary"
                      color="dark"
                      size="lg"
                      className="mt-2 me-1"
                    >
                      Featured
                    </Button>
                  </div>
                </Modal.Header>
                <Modal.Header>
                  <h6>Hourly Rate</h6>

                </Modal.Header>
                <div class="d-grid gap-2 col-3 mx-auto">
                  <Button
                    variant="primary"
                    color="dark"
                    size="lg"
                    className="mt-2 me-1"
                  >
                    Low
                  </Button>
                </div>
                <div class="d-grid gap-2 col-3 mx-auto">
                  <Button
                    variant="primary"
                    color="dark"
                    size="lg"
                    className="mt-2 me-1"
                  >
                    High
                  </Button>
                </div>
                <div>
                  <div class="d-grid gap-2 col-3 mx-auto">
                    <Button
                      variant="primary"
                      color="dark"
                      size="lg"
                      className="mt-2 me-1"

                    >
                      Apply
                    </Button>
                  </div>
                  <div class="d-grid gap-2 col-3 mx-auto">
                    <Button
                      variant="primary"
                      color="dark"
                      size="lg"
                      className="mt-2 me-1"

                    >
                      Clear all
                    </Button>
                  </div>
                </div>

              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DashboardOverview;
