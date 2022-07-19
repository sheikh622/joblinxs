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
    Nav,

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
import { getLogHours } from "../../Redux/addJob/actions"
import { useHistory, useLocation } from "react-router-dom";
import { height, width } from "@mui/system";
import { Link } from "react-router-dom";


const LogHours = (item) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        location: { state },
    } = history;
    const params = useLocation();

    let jobId = params.pathname.split("/")[2];
    
    // const login = useSelector(
    //     (state) => state?.auth.Auther
    // );
    // const [showDefault, setShowDefault] = useState(false);
    // const handleClose = () => setShowDefault(false);
    // const [page, setPage] = useState(1);
    // const [limit] = useState("5");
    const logHours = useSelector(
        (state) => state?.addJob?.logHours[0]?.log_hours);
   
    useEffect((id) => {
        dispatch(
            getLogHours({
                id: jobId,
            })
        );
    }, []);

    const handleClick = (item) => {
    
        return (
            <div>

                <Link className="text-white fw-bold" to={{ pathname: `/LogHoursDetails/${jobId}`, state: item }}>
                    <Card.Body className="pb-2 border_bottom mb-1 d-flex justify-content-between align-items-baseline">
                        <Button
                            variant="primary"
                            color="dark"
                            size="sm"
                        // onClick={() => handleConfirm({ id: item })}
                        >
                            View
                        </Button>
                    </Card.Body>

                </Link>

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
                    {
                        logHours?.map((item, value) => {
                            return (
                                <>
                                    <Col lg={6} md={12} sm={12} xs={12} className="pb-3">
                                        <Card border="light" className="shadow-sm userCard">
                                            <Image src={item?.users?.profileImg ? item?.users?.profileImg : ""} className="navbar-brand-light" />
                                            <div className="detailSection">
                                                <span className="left">
                                                    <h3 className="mb-1 mt-2">{item?.users?.fullName ? item?.users?.fullName : ""} </h3>
                                                    <h4 className="mb-1 mt-2">{item?.description ? item?.description : ""} </h4>

                                                    {/* <p className="mt-2">
                                                        Hours Logged: <span>{item?.log_hours ? item?.log_hours : ""}</span>{" "}
                                                    </p> */}
                                                </span>
                                            </div>
                                            {handleClick(item)}
                                        </Card>
                                    </Col>
                                </>)
                        })
                    }
                </Row>

            </Container>
        </>
    );
};

export default LogHours;
