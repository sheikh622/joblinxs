import {
    faAngleDoubleLeft,
    faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Card, Container, Form, Nav, Pagination, Table
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";
import { getReportBlock, getReportList } from "../../Redux/ReportManagement/actions";
import { getDisputeList } from "../../Redux/DisputeManagement/actions"

const DisputeManagement = (item) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const dispatch = useDispatch();
    const history = useHistory();
    // const ReportList = useSelector((state) => state.ReportListing?.Reports);
    const DisputeList = useSelector((state) => state.DisputeListing?.Reports?.disputedJobListing);
    const [page, setPage] = useState(1);
    const [limit] = useState("10");
    const [loader, setLoader] = useState(true);
    const [dataList, setDataList] = useState();
    const [blockUser, setBlockUser] = useState();
    useEffect(() => {
        if (DisputeList !== undefined) {
            setDataList(DisputeList?.reportedUsers);
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
let DisputeUsers = DisputeList?.length > 0 ? DisputeList[0]?.user : "false";
let DisputeJob = DisputeList?.length > 0 ? DisputeList[0]?.jobs : "false";

    const handleClick = (isActive, index, id) => {
        let newArray = dataList;
        newArray[index].reportedTo.isActive = !isActive;
        setDataList(() => {
            return [...newArray]
        })
        // dispatch(
        //     getReportBlock({
        //         userId: id,
        //         page: page,
        //         limit: limit,    
        //     })
        // );
    };
    const nextPage = () => {
        if (page < DisputeList?.pages) {
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
        for (let number = 1; number <= DisputeList?.pages; number++) {
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
                        {DisputeJob?.name ? DisputeJob?.name : "N/A"}
                    </span>
                </td>
                <td style={{ paddingLeft: "2%" }}>
                    <span className="fw-normal">{DisputeList?.description ? DisputeList?.description : "N/A"}</span>
                </td>
                <td>
                    <span className="fw-normal">
                        {DisputeUsers?.fullName ? DisputeUsers?.fullName : " N/A"}
                    </span>
                </td>
                <td style={{ paddingLeft: "7%" }}>
                    {/* <span>
                        <Form.Switch
                            type="switch"
                            // defaultValue="fixed"
                            label=""
                            className="text-left cursorPointer "
                            name="reportUser"
                            {...label}
                            checked={blockUser !== undefined ? blockUser : item?.reportedTo?.isActive}
                            onChange={(e) => {
                                handleClick(item?.reportedTo?.isActive, index, item?.reportedTo?.id)

                            }}
                        />
                    </span> */}
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
                            <b>{DisputeList?.total_reportedUsers}</b> entries
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
