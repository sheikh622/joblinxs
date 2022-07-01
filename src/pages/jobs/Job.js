import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form, Pagination, Card, Nav } from "@themesberg/react-bootstrap";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight, faCheck, faEllipsisH, faMinus, faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import Profile from "../../assets/img/team/profile.png";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import RecommendCard from "../../components/RecommendCard";
import { Routes } from "../../routes";
import { getJobs } from "../../Redux/addJob/actions"
import { display } from "@mui/system";
import Slideshow from "../../components/slider";
// // Import Swiper styles

// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
const Job = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const login = useSelector(
    (state) => state?.auth.Auther
  );
  const JobList = useSelector(
    (state) => state?.addJob?.getJob?.jobs
  );
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [category, setCategory] = useState([]);
  const [limit] = useState("10");
  const [adminId, setAdminId] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const handleClick = (event) => {
    setCategoryType(event.target.value)
  }
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const CategoryData = useSelector((state) => state?.Category?.getCategoryList);
  useEffect(() => {
    let array = [
      {
        value: "ALL",
        label: "All"
      }
    ];
    CategoryData.map((item) => {
      array.push({
        value: item?.title,
        label: item?.title,

      })
    })
    setCategory(array);
  }, [CategoryData])
  const currencies = [
    {
      value: "",
      label: "All Jobs",
    },
    {
      value: "completed",
      label: "Completed",
    },
    {
      value: "pending",
      label: "Pending",
    },
    {
      value: "upcoming",
      label: "Upcoming",
    },
  ];
  useEffect(() => {

    dispatch(
      getJobs({
        userId: login.id,
        page: page,
        limit: limit,
        type: type,
        category: categoryType,
      })
    );
  },
    [page, limit, type, categoryType]
  );
  const nextPage = () => {
    if (page < JobList?.pages) {
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
      <Navbar module={"My Jobs"} />
      <Container>
       < Slideshow/>
        <Row className="pt-2 pb-4">
          <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">

            <Col lg={9} md={9}>
              <Form.Group>
                <Form.Select
                  defaultValue="1"
                  label="Select"
                  value={type && type}
                  onChange={handleChange}

                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>




            <span className="d-flex align-items-baseline">
              <Link className="text-white fw-bold" to={Routes.CreateJob.path}>
                <Button variant="primary" className="mx-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12H8M12 8V12V8ZM12 12V16V12ZM12 12H16H12Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>{'  '}
                  Add Job
                </Button>
              </Link>
            </span>
          </div>

          <div
            // defaultValue="1"
            // label="Select"
            // value={categoryType}
            onChange={handleClick}
            style={{ display: "inline-block", marginBottom:"20px", whiteSpace:"20px" }}
          >
            {category.map((option) => (
              <Button key={option.value} value={option.value}>
                {option.label}
              </Button>
            ))}
          </div>
          {
            JobList?.map((item) => {
              return (
                <Col lg={2} md={4} sm={6} xs={12} className="pb-3">
                  <CommonCard
                    img={item?.image ? item?.image : Profile}
                    name={item?.name ? item?.name : "N/A"}
                    type={"Chemical"}
                    rate={item?.rate ? item?.rate : "N/A"}
                    completed={"90"}
                    star={"4.7"}
                  />
                </Col>
              )
            })
          }
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
            <small className="fw-bold">
              Showing <b>{JobList?.length}</b> out of <b>{JobList?.total_jobs}</b> entries
            </small>
          </Card.Footer>
        </Row>
      </Container>
    </>
  );
};

export default Job;
