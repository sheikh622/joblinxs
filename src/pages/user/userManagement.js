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
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteUser, getUserBlock, getUserProfile, getUsersList } from "../../Redux/userManagement/actions";
import { Routes } from "../../routes";
import { Link } from "react-router-dom";
const UserManagement = (row) => {
  const totalTransactions = transactions.length;
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const dispatch = useDispatch();
  const history = useHistory();
  const userList = useSelector((state) => state.User.Users);
  console.log("userList", userList)
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState("5");
  const [adminId, setAdminId] = useState(0);
  const [type, setType] = React.useState("all");
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const [blockUser, setBlockUser] = useState(row.isActive);
  useEffect(() => {
    setBlockUser(row.isActive);
  }, [row.isActive]);
  const [ProfileUser, setProfileUser] = useState(row.isApproved);
  useEffect(() => {
    setBlockUser(row.isApproved);
  }, [row.isApproved]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);
  const handleDelete = (item) => {
    dispatch(
      deleteUser({
        userId: item.id,
        page: page,
        limit: limit,
        type: type,
        search: search,
      })
    );
  }
  useEffect(() => {
    dispatch(
      getUsersList({
        page: page,
        limit: limit,
        type: type,
        search: search
      })
    );
  },
    [type, search, page, limit]
  );

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

  const TableRow = (props) => {


    const { invoiceNumber, subscription, price, issueDate, dueDate, status, item } =
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
          <span className="fw-normal">{item.fullName}</span>
        </td>
        <td>
          <span className="fw-normal">{item.email}</span>
        </td>
        <td>
          <span className="fw-normal">{item.phoneNumber}</span>
        </td>
        <td>
          <Button
            // variant="outlined"
            color={item?.isApproved === true ? "success" : "error"}
            style={{ marginLeft: "10px" }}

            onClick={() => {
              dispatch(
                getUserProfile({
                  userId: item.id,
                  page: page,
                  limit: limit,
                  type: type,
                  search: search,
                })
              );
            }}
          >
            {
              item?.isApproved === true ? (
                <span>Approved</span>
              ) :
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
              checked={item.isActive}
              onChange={(e) => {
                dispatch(
                  getUserBlock({
                    userId: item.id,
                    page: page,
                    limit: limit,
                    type: type,
                    search: search,
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
              <Dropdown.Item as={Link} to={Routes.UserDetail.path}>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item className="text-danger" onClick={() => { handleDelete(item) }}>
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" />  Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  const nextPage = () => {
    if (page < userList?.pages) {
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
    for (let number = 1; number <= userList?.pages; number++) {
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
                    <Form.Control type="text" select placeholder="Search"
                      label="Search"
                      value={search}
                      onChange={(event) => {
                        setSearch(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={5}>
                  <Form.Group className="mt-3">
                    <Form.Select defaultValue="1" label="Select"
                      value={type}
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
                    {userList?.users?.map((t, index) => (
                      <TableRow key={index} item={t} />
                    ))}
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
                    Showing <b>{userList?.users?.length}</b> out of <b>{userList?.totalUsers}</b> entries
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
