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
  getCategoryListing,
  getJobFilter
} from "../../Redux/Dashboard/actions";
import NoRecordFound from "../../components/NoRecordFound";
import { useHistory, useLocation } from "react-router-dom";
import { markAsFavouriteJob } from "../../Redux/addJob/actions";
import Select from "react-select";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePlacesWidget } from "react-google-autocomplete";
import Autocomplete from "react-google-autocomplete";
import { Rating } from "react-simple-star-rating";
import Slider from "@mui/material/Slider";

const DashboardOverview = (props) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const YOUR_GOOGLE_MAPS_API_KEY = "AIzaSyBJWt1Yh6AufjxV8B8Y8UVz_25cYV1fvhs";
  const history = useHistory();
  const params = useLocation();
  const activeForm = history?.location?.state
  const SeekerList = useSelector((state) => state?.Seeker?.getSeekerListing?.jobs);
  const auth = useSelector((state) => state.auth.Auther);
  const newArrivalData = useSelector(
    (state) => state?.Seeker?.newArrival?.data
  );
  const topRatedData = useSelector((state) => state?.Seeker?.topRated?.data);
  const CategoryData = useSelector((state) => state?.Seeker?.CategoryList);
  const [data, setData] = useState()
  const [showDefault, setShowDefault] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [location, setLocation] = useState([]);
  const [distance, setDistance] = useState();
  const [none, setNone] = useState();
  const [high, setHigh] = useState();
  const [low, setLow] = useState();
  const [featured, setFeatured] = useState();
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
    let array = [];
    CategoryData.map((item) => {
      array.push({
        value: [{ id: item.id, title: item.title, details: item.details }],
        label: item?.title,
      });
    });
    setCategoryList(array);
  }, [CategoryData]);
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

    </>
  );
};

export default DashboardOverview;
