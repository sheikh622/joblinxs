import {
    faAngleDoubleLeft,
    faAngleDoubleRight, faCheck, faEllipsisH, faEye, faMinus, faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Card, Container, Form, Nav, Pagination, Table, Dropdown, ButtonGroup, Button
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";
import { getReportBlock, getReportList } from "../../Redux/ReportManagement/actions";
import { getDisputeList, getDisputeBlock } from "../../Redux/DisputeManagement/actions"

const DisputeManagement = (item) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        location: { state },
    } = history;
    const params = useLocation();

    let jobId = params.pathname.split("/")[2];
    const DisputeList = useSelector((state) => state.DisputeListing?.Reports?.disputedJobListing);
    console.log("DisputeList", DisputeList)
    const DisputePagination = useSelector((state) => state.DisputeListing?.Reports);
    const [page, setPage] = useState(1);
    const [limit] = useState("10");
    const [loader, setLoader] = useState(true);
    const [dataList, setDataList] = useState();

    const [disputeUser, setDisputeUser] = useState();
    useEffect(() => {
        if (DisputeList !== undefined) {
            setDataList(DisputeList);
        }
    }, [DisputeList]);

    useEffect(() => {
        dispatch(
            getDisputeList({
                page: page,
                limit: limit,
                setLoader: setLoader,

            })
        );
    }, [page, limit]);

    const handleClick = (item, isAccepted, index) => {
        let newArray = dataList;
        newArray[index].isAccepted = !isAccepted;
        setDataList(() => {
            return [...newArray]
        })
        let providerId;
        let seekerId;
        if (item?.user?.role?.name === "provider") {
            if (item?.user.id === item?.disputedBy?.id) {
                providerId = item?.disputedBy?.id;
                seekerId = item?.disputedTo?.id;
            } else {
                providerId = item?.disputedTo?.id;
                seekerId = item?.disputedBy?.id;
            }
        } else {
            if (item?.user?.id === item?.disputedBy?.id) {
                providerId = item?.disputedTo?.id;
                seekerId = item?.disputedBy?.id;
            } else {
                providerId = item?.disputedBy?.id;
                seekerId = item?.disputedTo?.id;
            }
        }
        dispatch(
            getDisputeBlock({
                jobId: item?.jobs?.id,
                providerId: providerId,
                seekerId: seekerId,
                isAccepted: isAccepted,
                logHourId: item?.logHourId ? item?.logHourId : null,
                page: page,
                limit: limit,
            })
        );
    };
    const nextPage = () => {
        if (page < DisputePagination?.pages) {
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
        for (let number = 1; number <= DisputePagination?.pages; number++) {
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

    const TableRow = (props) => {

        const {
            status,
            index,
            item,
        } = props;
        console.log("item", item)
        const statusVariant =
            status === "Paid"
                ? "success"
                : status === "Due"
                    ? "warning"
                    : status === "Canceled"
                        ? "danger"
                        : "primary";
        return (
            <tr>
                <td>
                    <span className="fw-normal">
                        {item?.disputedBy?.fullName ? item?.disputedBy?.fullName : "N/A"}
                    </span>
                </td>
                <td style={{ paddingLeft: "2%" }}>
                    <span className="fw-normal">{item?.description ? item?.description : "N/A"}</span>
                </td>
                <td>
                    <span className="fw-normal">
                        {item.jobs.rate ? item.jobs.rate : "N/A"}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {item?.reason?.details ? item?.reason?.details : "N/A"}
                    </span>
                </td>
                <td>
                    <span className="fw-normal">
                        {item?.disputedTo
                            ?.fullName ? item?.disputedTo
                            ?.fullName : "N/A"}
                    </span>
                </td>

                {/* <td style={{ paddingLeft: "5%" }}>
                    <span>
                        <Form.Switch
                            type="switch"
                            // defaultValue="fixed"
                            label=""
                            className="text-left cursorPointer "
                            name="DisputeUser"
                            {...label}
                            checked={item?.isAccepted}
                            onChange={(e) => {
                                handleClick(item, item?.isAccepted, index)
                            }}
                        />
                    </span>
                </td> */}
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                            as={Button}
                            split
                            variant="link"
                            className="text-dark m-0 p-0"
                        >
                            <span className="icon icon-sm">
                                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                            </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="custom_menu">

                            {item?.isAccepted === null ? (
                                <>
                                    <Dropdown.Item className="text-success" onClick={(e) => {
                                        handleClick(item, true, index)
                                    }}>
                                        <FontAwesomeIcon icon={faCheck} className="me-2" /> Accepted
                                    </Dropdown.Item>
                                    <Dropdown.Item className="text-danger" onClick={() => {
                                        handleClick(item, false, index)
                                    }}>
                                        <FontAwesomeIcon icon={faMinus} className="me-2" /> Rejected
                                    </Dropdown.Item>
                                </>
                            ) : item?.isAccepted === true ? (
                                <Dropdown.Item className="text-success">
                                    <FontAwesomeIcon icon={faCheck} className="me-2" /> Accepted
                                </Dropdown.Item>
                            ) : (
                                <Dropdown.Item className="text-danger">
                                    <FontAwesomeIcon icon={faMinus} className="me-2" /> Rejected
                                </Dropdown.Item>
                            )
                            }

                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
        );
    };
    return (
        <>
            <Navbar module={"Dispute Managment"} />
            <div className="mx-5">
                {/* {loader ? (
                    <Spinner />
                ) : (
                    <> */}
                <Card.Body className="pt-0">
                    {/* {dataList?.length > 0 ? (
                                <> */}
                    <Table hover className="user-table align-items-center">
                        <thead>
                            <tr>
                                <th className="border-bottom">Dispute By</th>
                                <th className="border-bottom">Description</th>
                                <th className="border-bottom">Amount</th>
                                <th className="border-bottom">Reason</th>
                                <th className="border-bottom">Dispute To</th>
                                <th className="border-bottom ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList?.map((obj, index) => {
                                return (
                                    <TableRow index={index} item={obj} />
                                )
                            })}
                        </tbody>
                    </Table>
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
                            Showing <b>{DisputeList?.length}</b> out of{" "}
                            <b>{DisputePagination?.total_disputedJobs}</b> entries
                        </small>
                    </Card.Footer>
                    {/* </>
                            ) : (
                                <NoRecordFound />
                            )} */}
                </Card.Body>
                {/* </>
                )} */}
            </div>

        </>
    );
};
export default DisputeManagement;
