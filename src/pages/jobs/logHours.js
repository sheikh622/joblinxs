import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Image,
    Modal,
    Row,
    Pagination,
    Nav
} from "@themesberg/react-bootstrap"; import {
    faAngleDoubleLeft,
    faAngleDoubleRight, faCheck, faEllipsisH, faMinus
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import Profile from "../../assets/img/team/profile.png";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { getApplicants } from "../../Redux/addJob/actions"
import { useHistory, useLocation } from "react-router-dom";
import { height, width } from "@mui/system";


const LogHours = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        location: { state },
    } = history;
    const params = useLocation();

    let jobId = params.pathname.split("/")[2];
    const login = useSelector(
        (state) => state?.auth.Auther
    );
    const [showDefault, setShowDefault] = useState(false);
    const handleClose = () => setShowDefault(false);
    const [page, setPage] = useState(1);
    const [limit] = useState("5");
    const Applicants = useSelector(
        (state) => state?.addJob?.Applicants?.data?.jobs);
    const Pageination = useSelector(
        (state) => state?.addJob?.Applicants?.data);

    useEffect((id) => {
        dispatch(
            getApplicants({
                id: jobId,
                page: page,
                limit: limit,
            })
        );
    }, [page, limit]);
    const nextPage = () => {
        if (page < Pageination?.pages) {
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
        for (let number = 1; number <= Pageination?.pages; number++) {
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
    const handleClick = () => {
        return (
            <div>
                <div class="">
                    <Button
                        variant="primary"
                        color="dark"
                        size="sm"

                    >
                        View
                    </Button>
                </div>

            </div>
        )
    }
    return (
        <>
            <Navbar module={"Log Hours"} />
            <Container>
                <Row className="py-2 ">
                </Row>
                <Row className="py-2 justify-content-between">
                    <Col lg={6} md={12} sm={12} xs={12} className="pb-3">
                        <Card border="light" className="shadow-sm userCard">
                            <Image src={ReactHero} className="navbar-brand-light" />
                            <div className="detailSection">
                                <span className="left">
                                    {/* <h3 className="mb-1 mt-2">{item?.job ? item?.job?.name : ""} </h3> */}
                                    <p className="mt-2">
                                        Jobs Completed: <span>25</span>{" "}
                                    </p>
                                    <p>
                                        Jobs Completed as Plumber: <span>14 </span>
                                    </p>
                                </span>
                            </div>
                            {handleClick()}
                        </Card>
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
                                Total Applicants <b>{Pageination?.total_jobs}</b>
                            </small>
                        </Card.Footer>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LogHours;
