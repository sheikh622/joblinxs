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
  Form, Modal, Nav,
  Pagination,
  Row,
  Table
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";
import {
  deleteUser,
  getUserBlock,
  getUserProfile,
  getUsersList
} from "../../Redux/userManagement/actions";
import { Routes } from "../../routes";

const UserManagement = (row, item) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const dispatch = useDispatch();
  const history = useHistory();
  const userList = useSelector((state) => state.User.Users);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState("10");
  const [adminId, setAdminId] = useState(0);
  const [type, setType] = React.useState("all");
  const [showDefault, setShowDefault] = useState(false);
  const [category, setCategory] = useState([]);
  const [status, setStatus] = useState("");
  const [loader, setLoader] = useState(true);
  const [dataList, setDataList] = useState();
  const [blockUser, setBlockUser] = useState();
  useEffect(() => {
    if (userList !== undefined) {
      setDataList(userList?.users);
    }
  }, [userList]);

  const addUsers = () => {
    setShowDefault(true);
  }
  const handlefalse = () => {
    setShowDefault(false)
  };
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleFilter = (event) => {
    setStatus(event.target.value)
  }

  const handleBlock = (isActive, index, id) => {
    let newArray = dataList;
    newArray[index].isActive = !isActive;
    setDataList(() => {
      return [...newArray]
    })
    dispatch(
      getUserBlock({
        userId: id,
        page: page,
        limit: limit,
        type: type,
        search: search,
        status: status,
      })
    );
  };
  const [ProfileUser, setProfileUser] = useState(row.isApproved);
  useEffect(() => {
    setProfileUser(row.isApproved);
  }, [row.isApproved]);
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);
  const handleDelete = () => {
    dispatch(
      deleteUser({
        userId: adminId,
        page: page,
        limit: limit,
        type: type,
        search: search,
        data: userList,
        status: status,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getUsersList({
        page: page,
        limit: limit,
        type: type,
        search: search,
        status: status,
        setLoader: setLoader,

      })
    );
  }, [page, limit, type, search, status]);

  const filter = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "approved",
      label: "approved",
    },
    {
      value: "pending",
      label: "pending",
    },
  ];
  const currencies = [
    {
      value: "all",
      label: "All Users",
    },
    {
      value: "provider",
      label: "Service Provider",
    },
    {
      value: "seeker",
      label: "Service Seeker",
    },
  ];
  const TableRow = (props) => {
    const {
      invoiceNumber,
      subscription,
      price,
      issueDate,
      dueDate,
      status,
      item,
      index

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
            {item?.fullName ? item?.fullName : "N/A"}
          </span>
        </td>
        <td>
          <span className="fw-normal">{item?.email ? item?.email : "N/A"}</span>
        </td>
        <td>
          <span className="fw-normal">
            {item?.phoneNumber ? item?.phoneNumber : " N/A"}
          </span>
        </td>
        <td>
          <Button
            // variant="outlined"
            className="btn-sm cursorPointer"
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
                  status: status,
                })
              );
            }}
          >
            {item?.isApproved === true ? (
              <span>Approved</span>
            ) : (
              <span>Pending</span>
            )}
          </Button>
        </td>
        <td>
          <span>
            <Form.Switch
              type="switch"
              defaultValue="fixed"
              label=""
              className="text-center cursorPointer"
              name="paymentType"
              {...label}
              checked={blockUser !== undefined ? blockUser : item?.isActive}
              onChange={(e) => {
                handleBlock(item?.isActive, index, item?.id)
              }}
            // checked={item.isActive}
            // onChange={(e) => {
            //   dispatch(
            //     getUserBlock({
            //       userId: item.id,
            //       page: page,
            //       limit: limit,
            //       type: type,
            //       search: search,
            //       status: status,
            //     })
            //   );
            // }}
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
            <Dropdown.Menu className="custom_menu">
              <Dropdown.Item
                as={Link}
                to={{ pathname: Routes.UserDetail.path, state: { item } }}
              >
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item
                className="text-danger"
                onClick={() => {
                  setAdminId(item.id)
                  setShowDefault(true);

                }
                }
              >
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
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
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const paginationItems = () => {
    let items = [];
    for (let number = 1; number <= userList?.pages; number++) {
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

  return (
    <>
      <Navbar module={"User Management"} />
      <div className="mx-5">
        <Row className="py-2">
          {loader ? (
            <Spinner />
          ) : (
            <>
              <Col lg={12} md={12} sm={12} xs={12} className="pb-3">
                <Card
                  border="light"
                  className="table-wrapper table-responsive shadow-sm"
                >
                  <Card.Header className="pt-0 d-flex justify-content-between">
                    <Col lg={3} md={5}>
                      <Form.Group className="mt-3">
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
                    <Col lg={3} md={5}>
                      <Form.Group className="mt-3">
                        <Form.Select defaultValue="1" label="Select"
                          value={status}
                          onChange={handleFilter}
                        >
                          {filter.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col lg={3} md={5}>
                      <Form.Group className="mt-3">
                        <Form.Select
                          defaultValue="1"
                          label="Select"
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
                    {userList?.users?.length > 0 ? (
                      <>
                        <Table hover className="user-table align-items-center">
                          <thead>
                            <tr>
                              <th className="border-bottom">Full Name</th>
                              <th className="border-bottom">Email</th>
                              <th className="border-bottom">Phone number</th>
                              <th className="border-bottom">User status</th>
                              <th className="border-bottom">Unblock / Block</th>
                              <th className="border-bottom">Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            {userList?.users?.map((t, index) => (
                              <TableRow index={index} item={t} />
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
                          .
                          <small className="fw-bold">
                            Showing <b>{userList?.users?.length}</b> out of{" "}
                            <b>{userList?.totalUsers}</b> entries
                          </small>
                        </Card.Footer>
                      </>
                    ) : (
                      <NoRecordFound />
                    )}
                  </Card.Body>
                </Card>
              </Col>
              <Modal as={Modal.Dialog} centered show={showDefault} onHide={handlefalse} >
                <Modal.Header>
                  <Modal.Title className="h5">
                    Delete User
                  </Modal.Title>
                  <Button variant="close" aria-label="Close" onClick={handlefalse} />
                </Modal.Header>
                <Modal.Body>
                  <Form >
                    <Form.Group>
                      Are you sure you want to delete this User?
                    </Form.Group>
                    <Form.Group>
                      <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                        <Button
                          variant="primary"
                          onHide={handlefalse}
                          color="dark"
                          size="sm"
                          // type="submit"
                          onClick={() => {
                            handleDelete();
                            handlefalse();
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </Form.Group>
                  </Form>

                </Modal.Body>
              </Modal>
            </>
          )}
        </Row>

      </div>

    </>
  );
};
export default UserManagement;
