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
} from "@themesberg/react-bootstrap";
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faCheck,
    faEllipsisH,
    faMinus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import ReactHero from "../../assets/img/team/profile-picture-3.jpg";
import Profile from "../../assets/img/team/profile.png";
import Navbar from "../../components/Navbar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { getLogHours, getApprovedHours } from "../../Redux/addJob/actions";
import { useHistory, useLocation } from "react-router-dom";
import { height, width } from "@mui/system";
import { Link } from "react-router-dom";
import NoRecordFound from "../../components/NoRecordFound";
import DetailHeading from "../../components/DetailHeading";
const LogHours = (item) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        location: { state },
    } = history;
    const hoursLog = item?.location?.state;
    const params = useLocation();
    let jobId = params.pathname.split("/")[2];
    const [showDefault, setShowDefault] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const logHours = useSelector(
        (state) => state?.addJob?.logHours[0]
    );
    useEffect((id) => {
        dispatch(
            getLogHours({
                id: jobId,
            })
        );
    }, []);
    const handlefalse = () => {
        setShowDefault(false);
    };

    const handleChange = (item) => {
        dispatch(
            getApprovedHours({
                id: jobId,
                setShowDefault:setShowDefault,
                history:history,
                userId: item.id,
                status: item.status,
            })
        );
    };
    return (
        <>
            <Navbar module={"Log Hours"} />
            <Container>
                <Row className="py-2 "></Row>
                <Row className="py-2 justify-content-between">
                    {logHours?.log_hours.length > 0 ? (
                        logHours?.log_hours?.map((item, value) => {
                            return (
                                <>
                                    <Col lg={6} md={12} sm={12} xs={12} className="pb-3">
                                        <Card border="light" className="shadow-sm userCard">
                                            <Image
                                                src={
                                                    item?.users?.profileImg ? item?.users?.profileImg : ""
                                                }
                                                className="navbar-brand-light"
                                            />
                                            <div className="detailSection">
                                                <span className="left">
                                                    <h3 className="mb-1 mt-2">
                                                        {item?.users?.fullName ? item?.users?.fullName : ""}{" "}
                                                    </h3>
                                                    <h4 className="mb-1 mt-2">
                                                        {item?.description ? item?.description : ""}{" "}
                                                    </h4>
                                                    <p className="mt-2">
                                                        Hours Logged:{" "}
                                                        <span>
                                                            {item?.hours ? item?.hours : "00"}{" : "}
                                                            {item?.minutes ? item?.minutes : "00"}
                                                        </span>{" "}
                                                    </p>
                                                </span>
                                            </div>
                                            <Button
                                                variant={
                                                    item?.acceptedBySeeker == true ? "success" : "primary"
                                                }
                                                color="dark"
                                                size="sm"
                                                style={{
                                                    width: "100px",
                                                    height: "40px",
                                                    marginTop: "42px",
                                                    marginRight: "20px",
                                                }}
                                                onClick={() => {
                                                    setShowDefault(true);
                                                    setSelectedItem(item);
                                                }}
                                            >
                                                View
                                            </Button>
                                        </Card>
                                    </Col>
                                </>
                            );
                        })
                    ) : 
                        <NoRecordFound>
                     </NoRecordFound>
                        }

                </Row>
            </Container>
            <Modal as={Modal.Dialog} centered show={showDefault} onHide={handlefalse}>
                <Modal.Header>
                    <Modal.Title className="h5">Log Hours Details</Modal.Title>
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
                                        <Card.Body className="pb-2 border_bottom mb-1">
                                            <div className="detailed">
                                                <Image
                                                    src={
                                                        selectedItem?.users?.profileImg
                                                            ? selectedItem?.users?.profileImg
                                                            : ""
                                                    }
                                                    className="navbar-brand-light detailImg"
                                                />
                                                <h3 className="mb-1 mt-3">
                                                    {selectedItem?.users?.fullName
                                                        ? selectedItem.users?.fullName
                                                        : ""}
                                                </h3>
                                                <h5 className="text-gray">
                                                    {selectedItem?.profileType
                                                        ? selectedItem.profileType
                                                        : ""}
                                                </h5>
                                            </div>
                                            <div className="pb-2 d-flex justify-content-between align-logHourss-baseline">
                                                <Card.Title className="text-primary">
                                                    Logged Hours
                                                </Card.Title>
                                            </div>
                                            <DetailHeading
                                                heading={"Hours Logged"}
                                                value={<span>
                                                    {selectedItem?.hours ? selectedItem?.hours : "00"}{" : "}
                                                    {selectedItem?.minutes ? selectedItem?.minutes : "00"}
                                                </span>}
                                            />
                                            <DetailHeading
                                                heading={"Job Rate"}
                                                value={logHours?.rate ? logHours?.rate : "-"}
                                            />
                                            <DetailHeading
                                                heading={"Status"}
                                                value={
                                                    selectedItem?.status ? selectedItem?.status : "-"
                                                }
                                            />
                                            <DetailHeading
                                                heading={"TimeRequired"}
                                                value={logHours?.days ? logHours?.days : "-"}
                                            />
                                        </Card.Body>
                                        <Card.Body className="pb-2 border_bottom mb-1">
                                            <DetailHeading
                                                heading={"Total Amount"}
                                                value={
                                                    selectedItem?.total_Amount
                                                        ? selectedItem?.total_Amount
                                                        : "-"
                                                }
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {selectedItem?.status == "pending" && (
                                    <>
                                        <div>
                                            <div class="d-grid gap-2 col-3 mx-auto">
                                                <Button
                                                    variant="primary"
                                                    color="dark"
                                                    size="lg"
                                                    className="mt-2 me-1"
                                                    onClick={() =>
                                                        handleChange({
                                                            id: selectedItem.id,
                                                            status: "Accepted",
                                                        })
                                                    }
                                                >
                                                    Accept
                                                </Button>
                                            </div>
                                            <div class="d-grid gap-2 col-3 mx-auto">
                                                <Button
                                                    variant="primary"
                                                    color="dark"
                                                    size="lg"
                                                    className="mt-2 me-1"
                                                    onClick={() =>
                                                        handleChange(
                                                            { id: selectedItem.id, status: "Rejected" },
                                                            handlefalse()
                                                        )
                                                    }
                                                >
                                                    Decline
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                )} 
                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default LogHours;
