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
    NavItem,
    Modal,

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
    const [showDefault, setShowDefault] = useState(false);

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
    const handlefalse = () => {
        setShowDefault(false);
    }
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

                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                            setShowDefault(true);
                        }} >

                            <path d="M1.07945 0.35791H16.9195C17.1078 0.358028 17.2923 0.411334 17.4517 0.511693C17.611 0.612051 17.7388 0.75538 17.8204 0.925179C17.9019 1.09498 17.9337 1.28434 17.9124 1.47147C17.891 1.6586 17.8172 1.83588 17.6995 1.98291L11.2195 10.0839C11.0772 10.2612 10.9996 10.4816 10.9995 10.7089V15.8579C10.9995 16.0132 10.9633 16.1663 10.8939 16.3051C10.8245 16.444 10.7237 16.5648 10.5995 16.6579L8.59945 18.1579C8.45089 18.2693 8.27422 18.3372 8.08926 18.3539C7.9043 18.3705 7.71835 18.3354 7.55224 18.2523C7.38613 18.1693 7.24644 18.0416 7.1488 17.8836C7.05117 17.7257 6.99945 17.5436 6.99945 17.3579V10.7079C6.99905 10.481 6.92147 10.2609 6.77945 10.0839L0.299454 1.98291C0.181737 1.83588 0.107936 1.6586 0.0865476 1.47147C0.0651589 1.28434 0.0970522 1.09498 0.178556 0.925179C0.260059 0.75538 0.387859 0.612051 0.547241 0.511693C0.706623 0.411334 0.891108 0.358028 1.07945 0.35791V0.35791Z" fill="#12499C" />
                        </svg>
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
                                    <Card
                                        border="light"
                                        className="text-left p-0 mb-4 profileView info"
                                    >
                                        <Button style={{
                                            boxSizing: "border-box",
                                            position: "absolute",
                                            width: "380px",
                                            // height: "66px",
                                            left: "46px",
                                            // top: "365px",
                                            background: "#12499C",
                                            borderRadius: "10px",
                                        }}>Location</Button>

                                    </Card>
                                </Col>
                                <Modal.Header>
<h6>Distance</h6    >
                                </Modal.Header>
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

export default Search;
