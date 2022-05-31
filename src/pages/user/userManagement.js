import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Nav,
  Card,
  Button,
  Table,
  Dropdown,
  Pagination,
  ButtonGroup,
  Container,
  Form,
} from "@themesberg/react-bootstrap";
import Navbar from "../../components/Navbar";
import {
  faEdit,
  faEllipsisH,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import transactions from "../../data/transactions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteUser, getUserBlock, getUserProfile } from "../../Redux/userManagement/actions";
const UserManagement = () => {
  const totalTransactions = transactions.length;
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const TableRow = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const [blockUser, setBlockUser] = useState(row.isActive);
    // useEffect(() => {
    //   setBlockUser(row.isActive);
    // }, [row.isActive]); 
    // const [ProfileUser, setProfileUser] = useState(row.isApproved);
    // useEffect(() => {
    //   setBlockUser(row.isApproved);
    // }, [row.isApproved]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(false);
    const handleDelete = () =>
      dispatch(
        deleteUser({
          // userId: row.id,
          // page: page,
          // limit: limit,
          // type: type,
          // search: search,
        })
      );
    const [type, setType] = React.useState("all");
    const handleChange = (event) => {
      setType(event.target.value);
    };
    const currencies = [
      {
        value: "all",
        label: "All Users",
      },
      {
        value: "provider",
        label: "service provider",
      },
      {
        value: "seeker",
        label: "service seeker",
      },
    ];
    const { invoiceNumber, subscription, price, issueDate, dueDate, status, row } =
      props;
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
          <span className="fw-normal">{subscription}</span>
        </td>
        <td>
          <span className="fw-normal">{issueDate}</span>
        </td>
        <td>
          <span className="fw-normal">{dueDate}</span>
        </td>
        <td>
          <Button
            variant="outlined"
            // color={row?.isApproved === true ? "success" : "error"}
            style={{ marginLeft: "10px" }}
            onClick={() => {
              dispatch(
                getUserProfile({
                  // userId: row.id,
                  // page: page,
                  // limit: limit,
                  // adminId: "",
                  // type: type,
                  // search: search,
                })
              );
            }}
          >
            {
              // row?.isApproved === true ? (
              //   <span>Approved</span>
              // ) : 
              (
                <span>Pending</span>
              )
            }
          </Button>
        </td>
        <td>
          <span>
            <Form.Switch
              type="switch"
              defaultValue="fixed"
              label=""
              className="text-center"
              name="paymentType"
              {...label}
              // checked={row.isActive}
              onChange={(e) => {
                dispatch(
                  getUserBlock({
                    // userId: row.id,
                    // page: page,
                    // limit: limit,
                    // adminId: "",
                    // type: type,
                    // search: search,
                  })
                );
              }}
            />
          </span>
        </td>
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
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <>
      <Navbar module={"User Management"} />
      <Container>
        <Row className="py-2">
          <Col lg={12} md={12} sm={12} xs={12} className="pb-3">
            <Card
              border="light"
              className="table-wrapper table-responsive shadow-sm"
            >
              <Card.Header className="pt-0 d-flex justify-content-between">
                <Col lg={3} md={5}>
                  <Form.Group className="mt-3">
                    <Form.Control type="text" placeholder="Search" />
                  </Form.Group>
                </Col>
                <Col lg={3} md={5}>
                  <Form.Group className="mt-3">
                    <Form.Select defaultValue="1" label="Select"
                      // value={type}
                      // onChange={handleChange}
                      >
                      {/* <option value="1">All User</option>
                      <option value="2">Service Provider</option>
                      <option value="3">Service Seeker</option> */}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Card.Header>
              <Card.Body className="pt-0">
                <Table hover className="user-table align-items-center">
                  <thead>
                    <tr>
                      <th className="border-bottom">Full Name</th>
                      <th className="border-bottom">Email</th>
                      <th className="border-bottom">Phone Number</th>
                      <th className="border-bottom">User Status</th>
                      <th className="border-bottom">Block / Unblock</th>
                      <th className="border-bottom">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((t) => (
                      <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />
                    ))}
                  </tbody>
                </Table>
                <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                  <Nav>
                    <Pagination size={"sm"} className="mb-2 mb-lg-0">
                      <Pagination.Prev>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                      </Pagination.Prev>
                      <Pagination.Item active>1</Pagination.Item>
                      <Pagination.Item>2</Pagination.Item>
                      <Pagination.Item>3</Pagination.Item>
                      <Pagination.Next>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                      </Pagination.Next>
                    </Pagination>
                  </Nav>
                  <small className="fw-bold">
                    Showing <b>{totalTransactions}</b> out of <b>25</b> entries
                  </small>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};
export default UserManagement;
