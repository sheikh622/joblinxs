import {
    faAngleDoubleLeft,
    faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Image,
    Modal, Nav, Pagination, Row
} from "@themesberg/react-bootstrap";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import DetailHeading from "../../components/DetailHeading";
import Dispute from "../../components/Dispute";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import { getApplicantsByUserId, getApprovedHours, getLogHours } from "../../Redux/addJob/actions";


const LogHours = (item, id) => {
    const dispatch = useDispatch();
    // let usersId= sessionStorage.getItem("userId");
    const history = useHistory();
    const {
        location: { state },
    } = history;
    const hoursLog = item?.location?.state;
    const params = useLocation();
    let usersId = params.search.split("?")[1];
    let jobId = params.pathname.split("/")[2];
    const [showDefault, setShowDefault] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const [show, setShow] = useState(false);
    const [dispute, setDispute] = useState(false);
    const [page, setPage] = useState(1);
    const [limit] = useState("6");
    const logHours = useSelector(
        (state) => state?.addJob?.logHours?.job
    );
    const logHoursPage = useSelector(
        (state) => state?.addJob?.logHours
    );
    const handlefalse = () => {
        setShowDefault(false);
    }
    useEffect((id) => {
        if (usersId) {
            dispatch(
                getApplicantsByUserId({
                    id: jobId,
                    page: page,
                    limit: limit,
                    usersId: usersId
                })
            );
        } else {
            dispatch(
                getLogHours({
                    id: jobId,
                    page: page,
                    limit: limit,
                })
            );
        }
    }, [page, limit]);
    const nextPage = () => {
        if (page < logHours?.pages) {
            setPage(page + 1);
        }
    };
    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
    const paginationItems = () => {
        let items = [];
        for (let number = 1; number <= logHoursPage?.pages; number++) {
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
    const handleChange = (item) => {
        dispatch(
            getApprovedHours({
                // id: jobId,
                setShowDefault: setShowDefault,
                history: history,
                id: item.id,
                status: item.status,
                usersId: usersId,
                jobId: jobId,
                page: page,
                limit: limit,

            })
        );
    };
    return (
        <>
            <Navbar module={"Log Hours"} />
            <Container>
                <Col xs={12} xl={12} className={'d-flex justify-content-start mb-2'}>
                    <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => history.goBack()}>
                        <path d="M9.79591 14.8435L9.79557 14.8439C9.56284 15.0818 9.2503 15.2 8.93911 15.2C8.65838 15.2 8.37589 15.1036 8.15012 14.9076L8.14971 14.9073L1.18041 8.82491C0.939515 8.61471 0.799112 8.31587 0.799112 7.99906C0.799112 7.68333 0.93963 7.38454 1.18041 7.17445L8.14971 1.09206L8.15005 1.09176C8.62347 0.6805 9.35494 0.706129 9.79539 1.15531L9.79539 1.15531L9.79591 1.15584C10.2386 1.6107 10.2057 2.32402 9.72866 2.74114L9.72851 2.74128L3.7035 7.99908L9.72853 13.2581L9.72866 13.2582C10.2057 13.6753 10.2386 14.3887 9.79591 14.8435Z" fill="#12499C" stroke="#12499C" stroke-width="0.4" />
                    </svg>

                </Col>
                <Row className="py-2 "></Row>
                <Row className="py-2 justify-content-between">
                    {logHours?.log_hours.length > 0 ? (
                        logHours?.log_hours.map((item, value) => {
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
                                                        {logHours?.name ? logHours?.name : ""}{" "}
                                                    </h3>
                                                    <h4 className="mb-1 mt-2">
                                                        {logHours?.description ? logHours?.description : ""}{" "}
                                                    </h4>
                                                    <p className="mt-2">
                                                        Hours Logged:{" "}
                                                        <span>
                                                            {item?.hours ? item?.hours : "00"}h{" : "}
                                                            {item?.minutes ? item?.minutes : "00"}m
                                                        </span>{" "}
                                                    </p>
                                                </span>
                                            </div>
                                            {item?.status == "pending" ? (
                                                <>
                                                    <Button
                                                        variant={
                                                            item?.acceptedBySeeker == true ? "success" : "primary"
                                                        }
                                                        color="dark"
                                                        size="sm"
                                                        style={{
                                                            width: "100px",
                                                            height: "40px",
                                                            marginTop: "75px",
                                                            marginRight: "5px",
                                                        }}
                                                        onClick={() => {
                                                            setShowDefault(true);
                                                            setSelectedItem(item);
                                                        }}
                                                    >
                                                        View
                                                    </Button>
                                                    {item?.isDispute ? (
                                                        <div>
                                                            <Button
                                                                variant="primary"
                                                                color="dark"
                                                                size="sm"
                                                                style={{
                                                                    width: "100px",
                                                                    height: "40px",
                                                                    marginTop: "75px",
                                                                    marginRight: "10px",
                                                                }}
                                                            >
                                                                Disputed
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <Button
                                                                variant="primary"
                                                                color="dark"
                                                                size="sm"
                                                                style={{
                                                                    width: "100px",
                                                                    height: "40px",
                                                                    marginTop: "75px",
                                                                    marginRight: "10px",
                                                                }}
                                                                onClick={() => {
                                                                    setDispute(true);
                                                                }}
                                                            >
                                                                Dispute
                                                            </Button>
                                                        </div>
                                                    )}
                                                </>

                                            ) :
                                                <Button
                                                    variant={
                                                        item?.acceptedBySeeker == true ? "success" : "primary"
                                                    }
                                                    color="dark"
                                                    size="sm"
                                                    style={{
                                                        width: "100px",
                                                        height: "40px",
                                                        marginTop: "75px",
                                                        marginRight: "5px",
                                                    }}
                                                    onClick={() => {
                                                        setShowDefault(true);
                                                        setSelectedItem(item);
                                                    }}
                                                >
                                                    View
                                                </Button>
                                            }


                                        </Card>
                                    </Col>

                                </>
                            );
                        })
                    ) :
                        <NoRecordFound>
                        </NoRecordFound>
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
                            Showing <b>{logHours?.log_hours?.length}</b> out of{" "}
                            <b>{logHoursPage?.total_LogHours
                            }</b> entries
                        </small>
                    </Card.Footer>
                </Row>
            </Container>
            {dispute && (
                <Dispute
                    logHours={logHours}
                    dispute={dispute}
                    item={item}
                    setDispute={setDispute}

                />
            )}
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
                                            </div>
                                            <div className="pb-2 d-flex justify-content-between align-logHourss-baseline">
                                                <Card.Title className="text-primary">
                                                    Logged Hours
                                                </Card.Title>
                                            </div>
                                            <DetailHeading
                                                heading={"Hours Logged"}
                                                value={<span>
                                                    {selectedItem?.hours ? selectedItem?.hours + " " + "hours" : "00 hours"}{" : "}
                                                    {selectedItem?.minutes ? selectedItem?.minutes + " " + "minutes" : "00 minutes"}
                                                </span>}
                                            />
                                            <DetailHeading
                                                heading={"Job Rate"}
                                                value={logHours?.rate ? `${logHours?.rate}$` : "-"}
                                            />
                                            <DetailHeading
                                                heading={"Status"}
                                                value={
                                                    selectedItem?.status ? selectedItem?.status : "-"
                                                }
                                            />
                                            <DetailHeading
                                                heading={"TimeRequired"}
                                                value={logHours?.days ? `${logHours?.days} days` : "-"}
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
                                        <div class="d-grid gap-2 col-3 mx-auto">
                                            <Button
                                                variant="primary"
                                                color="dark"
                                                size="lg"
                                                className="mt-2 me-1"
                                                onClick={() =>
                                                    handleChange({
                                                        id: selectedItem.id,
                                                        status: "Accepted"
                                                    },
                                                        handlefalse()
                                                    )
                                                }
                                            >
                                                Accept
                                            </Button>
                                        </div>
                                        {!selectedItem?.adminkey &&
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
                                        }
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
