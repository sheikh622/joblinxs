import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faEllipsisH,
    faEye,
    faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button,
    ButtonGroup,
    Card,
    Col,
    Container,
    Dropdown,
    Form,
    Image,
    Modal,
    Row,
    Pagination, Table, TableRow, Nav
} from "@themesberg/react-bootstrap";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import { getReportList, getReportBlock } from "../../Redux/ReportManagement/actions";

const ReportManagement = (row) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const dispatch = useDispatch();
    const history = useHistory();
    const ReportList = useSelector((state) => state.ReportListing?.Reports);
    const [page, setPage] = useState(1);
    const [limit] = useState("10");
    const [blockUser, setBlockUser] = useState(row.isActive);
    useEffect(() => {
        setBlockUser(row.isActive);
    }, [row.isActive]);
    useEffect(() => {
        dispatch(
            getReportList({
                page: page,
                limit: limit,
            })
        );
    }, [page, limit]);

    const nextPage = () => {
        if (page < ReportList?.pages) {
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
        for (let number = 1; number <= ReportList?.pages; number++) {
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
            invoiceNumber,
            subscription,
            price,
            issueDate,
            dueDate,
            status,
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
                        {item?.reportedBy?.fullName ? item?.reportedBy?.fullName : "N/A"}
                    </span>
                </td>
                <td style={{ paddingLeft: "2%" }}>
                    <span className="fw-normal">{item?.description ? item?.description : "N/A"}</span>
                </td>
                <td>
                    <span className="fw-normal">
                        {item?.reportedTo?.fullName ? item?.reportedTo?.fullName : " N/A"}
                    </span>
                </td>
                <td style={{ paddingLeft: "7%" }}>
                    <span>
                        <Form.Switch
                            type="switch"
                            defaultValue="fixed"
                            label=""
                            className="text-left cursorPointer "
                            name="reportUser"
                            {...label}
                            checked={item?.reportedTo?.isActive}
                            onChange={(e) => {
                                dispatch(
                                    getReportBlock({
                                        userId: item?.reportedTo?.id,
                                        page: page,
                                        limit: limit,
                                    })
                                );
                            }}
                        />
                    </span>
                </td>
            </tr>
        );
    };
    return (
        <>
            <Navbar module={"Report"} />
            <Container>
                <Card.Body className="pt-0">
                    {ReportList?.reportedUsers?.length > 0 ? (
                        <>
                            <Table hover className="user-table align-items-center">
                                <thead>
                                    <tr>
                                        <th className="border-bottom">Report By</th>
                                        <th className="border-bottom">Description</th>
                                        <th className="border-bottom">Report To</th>
                                        <th className="border-bottom ">Block / Unblock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ReportList?.reportedUsers?.map((obj, index) => {
                                        return (
                                            <TableRow key={index} item={obj} />
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
                                .
                                <small className="fw-bold">
                                    Showing <b>{ReportList?.reportedUsers?.length}</b> out of{" "}
                                    <b>{ReportList?.total_reportedUsers}</b> entries
                                </small>
                            </Card.Footer>
                        </>
                    ) : (
                        <NoRecordFound />
                    )}
                </Card.Body>
            </Container>

        </>
    );
};
export default ReportManagement;
