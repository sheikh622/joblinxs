import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button, Card, Col,
  Container, Form, Nav, Pagination, Row
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Profile from "../../assets/img/team/profile.png";
import CommonCard from "../../components/CommonCard";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";
import { getJobs, jobByIdSuccess } from "../../Redux/addJob/actions";
import { Routes } from "../../routes";
import AddCard from "../../components/addCard";
import { getCardDetails } from "../../Redux/settings/actions";
import { getCategoryList, getUserCategoryList } from "../../Redux/Category/actions";

const Job = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const login = useSelector((state) => state?.auth.Auther);
  const JobList = useSelector((state) => state?.addJob?.getJob);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState(null);
  // const [categoryList, setCategoryList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [resetForm, setResetForm] = useState();
  const [limit] = useState("10");
  const [adminId, setAdminId] = useState("");
  const [categoryType, setCategoryType] = useState("");

  const handleClick = (event) => {
    setCategoryType(event.target.value);
  };
  const handleChange = (event) => {
    setType(event.target.value);
  };

  const cardDetail = useSelector(
    (state) => state?.PushNotification?.cardDetails
  );
  useEffect(() => {
    dispatch(getCardDetails(login?.id));
  }, []);
  const [addCard, setAddCard] = useState(false);
  const [addCardModal, setAddCardModal] = useState(false);
  useEffect(() => {
    if (cardDetail !== null) {
      setAddCard(false)
    }
    else {
      setAddCard(true)

    }
  }, [cardDetail]);
  const CategoryList = useSelector((state) => state?.Category?.getCategoryList);
  const SelectedCategory = useSelector((state) => state?.Category?.UserCatergory?.selctedCategories);
  useEffect(() => {
    if(SelectedCategory !== undefined){
    let array = [
      {
        value: "ALL",
        label: "All"
      }
    ];
    SelectedCategory.map((item) => {
      array.push({
        value: item?.title,
        label: item?.title,

      })
    })
    setCategory(array);
  }
  }, [SelectedCategory])
  const currencies = [
    {
      value: "all",
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
    {
      value: "inprogress",
      label: "Inprogress"
    },
    {
      value: "canceled",
      label: "cancelled"
    },
  ];
  useEffect(
    (action) => {
      dispatch(
        getJobs({
          userId: login?.id,
          page: page,
          limit: limit,
          type: type,
          category: categoryType,
          setLoader: setLoader,

        })
      );
    },
    [page, limit, type, categoryType]
  );
  // useEffect(() => {
  //   dispatch(
  //     getCategoryList(
  //       {
  //         search: "",
  //         role: "user"
  //       }
  //     )
  //   );
  // }, []);
  useEffect(() => {
    dispatch(
      getUserCategoryList(
        {
          page: page,
          limit: limit,
          search: "",
          setLoader: setLoader,

        }
      )
    );
  }, [page, limit]);
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
      <Navbar module={"My Jobs"} />
      <div className="mx-5">
        {/* < Slideshow/> */}
        <Row className="pt-2 pb-4">
          {loader ? (
            <Spinner />
          ) : (
            <>
              <div className="d-flex justify-content-between mt-0 mb-4 headerBorder">
                <Col lg={4} md={4}>
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
                <Col lg={4} md={4}>
                  <Form.Group>
                    <Form.Select defaultValue="1" label="Select"
                      value={categoryType}
                      onChange={handleClick}
                    >
                      {category.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <span className="d-flex align-items-baseline mb-3">
                  {/* <a className="text-white fw-bold" href={Routes.CreateJob.path}> */}

                  <Button variant="primary" className="mx-2"
                    onClick={() => {
                      addCard ? setAddCardModal(true) : history.push(Routes.CreateJob.path);
                      dispatch(
                        jobByIdSuccess(null)
                      );
                    }}>
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
                    </svg>
                    {"  "}
                    Add Job
                  </Button>
                  {/* </a> */}
                </span>
              </div>
              {JobList?.jobs?.length > 0 ? (
                <>
                  {JobList?.jobs?.map((item) => {
                    return (
                      <Col lg={2} md={4} sm={6} xs={12} className="pb-3 mt-3">
                        <CommonCard
                          img={item?.image ? item?.image : Profile}
                          name={item?.name ? item?.name : "N/A"}
                          // jobType={item?.jobType ? item?.jobType : "N/A"}
                          id={item.id}
                          item={item ? item : null}
                          rate={item?.rate ? item?.rate : "N/A"}
                          completed={"90"}
                          star={item?.rating}
                          myJobs={true}
                          page={page}
                          job="job"
                          limit={limit}
                          type={type}
                          category={categoryType}
                          favourite={item.isFavourite}
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
                    <small className="fw-bold">
                      Showing <b>{JobList?.jobs?.length}</b> out of{" "}
                      <b>{JobList?.total_jobs}</b> entries
                    </small>
                  </Card.Footer>
                </>
              ) : (
                <NoRecordFound />
              )}
            </>
          )}

        </Row>
      </div>
      <AddCard
        addCard={addCardModal}
        setAddCard={setAddCardModal}

      // onHide={() => setAddCard(true)
      // }
      />
    </>
  );
};

export default Job;
