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
import { getJobs } from "../../Redux/addJob/actions";
import { display } from "@mui/system";
import NoRecordFound from "../../components/NoRecordFound";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { state },
  } = history;
//   const login = useSelector((state) => state?.auth.Auther);
//   const JobList = useSelector((state) => state?.addJob?.getJob);

  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [limit] = useState("10");
  const [adminId, setAdminId] = useState("");
  const [categoryType, setCategoryType] = useState("");

  const handleClick = (event) => {
    setCategoryType(event.target.value);
  };
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const CategoryData = useSelector((state) => state?.Category?.getCategoryList);
  useEffect(() => {
    let array = [
      {
        value: "ALL",
        label: "All",
      },
    ];
    CategoryData.map((item) => {
      array.push({
        value: item?.title,
        label: item?.title,
      });
    });
    setCategory(array);
  }, [CategoryData]);
//   useEffect(
//     (action) => {
//       dispatch(
//         getJobs({
//           userId: login.id,
//           page: page,
//           limit: limit,
//           type: type,
//           category: categoryType,
//         })
//       );
//     },
//     [page, limit, type, categoryType]
//   );

//   const nextPage = () => {
//     if (page < JobList?.pages) {
//       setPage(page + 1);
//     }
//   };
//   const previousPage = () => {
//     if (1 > page) {
//       setPage(page - 1);
//     }
//   };

//   const paginationItems = () => {
//     let items = [];
//     for (let number = 1; number <= JobList?.pages; number++) {
//       items.push(
//         <Pagination.Item
//           key={number}
//           active={number === page}
//           onClick={() => {
//             setPage(number);
//           }}
//         >
//           {number}
//         </Pagination.Item>
//       );
//     }
//     return items;
//   };
  return (
    <>
      <Navbar module={"Search"} />
      <Container>
        {/* < Slideshow/> */}
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
           
          </div>
          {/* {JobList?.jobs?.length > 0 ? (
            <>
              {JobList?.jobs?.map((item) => { */}
                {/* return (
                  <Col lg={2} md={4} sm={6} xs={12} className="pb-3 mt-3">
                    <CommonCard
                      img={item?.image ? item?.image : Profile}
                      name={item?.name ? item?.name : "N/A"}
                      jobType={item?.jobType ? item?.jobType : "N/A"}
                      id={item.id}
                      item={item ? item : null}
                      rate={item?.rate ? item?.rate : "N/A"}
                      completed={"90"}
                      star={"4.7"}
                      myJobs= {true}
                      page={page}
                      job="job"
                      limit={limit}
                      type={type}
                      category={categoryType}
                      favourite={item.isFavourite}
                    />
                  </Col>
                ); */}
              {/* })} */}
              {/* <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
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
              </Card.Footer> */}
            {/* </>
          ) : (
            <NoRecordFound />
          )} */}
        </Row>
      </Container>
    </>
  );
};

export default Search;
