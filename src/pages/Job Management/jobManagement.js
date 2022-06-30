import {
  faAngleDoubleLeft,
  faAngleDoubleRight, faCheck, faEllipsisH, faMinus, faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button, ButtonGroup, Card, Col, Container, Dropdown, Form, Modal, Nav, Pagination, Row, Table
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { deleteJob, getJobListing, getJobProfile, getCategoryJob } from "../../Redux/JobManagement/actions";
import { getCategoryList } from "../../Redux/Category/actions";

const JobManagement = (row) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const JobList = useSelector(
    (state) => state?.Job?.Jobs
  );
  const [adminId, setAdminId] = useState(0);
  const [type, setType] = React.useState("");

  const handleJobAction = (id) => {

    dispatch(
      getJobProfile({
        jobId: id,
        page: page,
        limit: limit,
        type: type,
        search: search,
        category:categoryType,
      })
    );
  }
  const handleDelete = () => {
    dispatch(
      deleteJob({
        jobId: adminId,
        page: page,
        limit: limit,
        search: search,
        type: type,
        data: JobList,
        category:categoryType,
      })
    );
  };
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState("10");
const [categoryType, setCategoryType] = useState("");
  const [showDefault, setShowDefault] = useState(false);
  const [category, setCategory] = useState([]);
  const addUsers = () => {
    setShowDefault(true);
  }
  const handlefalse = () => {
    setShowDefault(false)
  };
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleClick = (event) => {
    setCategoryType(event.target.value)
  }
  const CategoryData = useSelector((state) => state?.Category?.getCategoryList);
  useEffect(() => {
    let array = [
      {
        value: "ALL",
        label: "All"
      }
    ];
    CategoryData.map((item) => {
      array.push({
        value: item?.title,
        label: item?.title,

      })
    })
    setCategory(array);
  }, [CategoryData])
  const currencies = [
    {
      value: "",
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
  useEffect(() => {
    dispatch(
      getJobListing({
        page: page,
        limit: limit,
        search: search,
        type: type,
        category:categoryType,
      })
    );
  },
    [page, limit, type, search, categoryType]
  );
  // useEffect(() => {
  //   dispatch(
  //     getCategoryJob({
  //       page: page,
  //       limit: limit,
  //       search: search,
  //       category:categoryType,
  //       type: type,
  //     })
  //   );
  // },
  //   []
  // );

  const [JobProfile, setJobProfile] = useState(row.isApproved);
  useEffect(() => {
    setJobProfile(row.isApproved);
  }, [row.isApproved]);

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
          <span className="fw-normal">{item?.name ? item?.name : "N/A"}</span>
        </td>
        <td>
          <span className="fw-normal">{item?.status ? item?.status : "N/A"}</span>
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
              {item?.status === "pending" ? (
                <>
                  <Dropdown.Item className="text-success" onClick={() => {
                    handleJobAction(item?.id)
                  }}>
                    <FontAwesomeIcon icon={faCheck} className="me-2" /> Accepted
                  </Dropdown.Item>
                  <Dropdown.Item className="text-danger" onClick={() => {
                    handleJobAction(item?.id)
                  }}>
                    <FontAwesomeIcon icon={faMinus} className="me-2" /> Rejected
                  </Dropdown.Item>
                </>
              ) : item?.status === "Rejected" ? (
                <Dropdown.Item className="text-success" onClick={() => {
                  handleJobAction(item?.id)
                }}>
                  <FontAwesomeIcon icon={faCheck} className="me-2" /> Accepted
                </Dropdown.Item>
              ) : (
                <Dropdown.Item className="text-danger" onClick={() => {
                  handleJobAction(item?.id)
                }}>
                  <FontAwesomeIcon icon={faMinus} className="me-2" /> Rejected
                </Dropdown.Item>
              )
              }
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
    if (page < JobList?.pages) {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (1 > page) {
      setPage(page - 1);
    }
  };

  const paginationItems = () => {
    let items = [];
    for (let number = 1; number <= JobList?.pages; number++) {
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
      <Navbar module={"Job Management"} />
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
                    <Form.Control type="text" placeholder="Search"
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
                      value={categoryType}
                      onChange={handleClick}
                    >
                      {category.map((option) => (
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
                <Table hover className="user-table align-items-center management_table">
                  <thead>
                    <tr>
                      <th className="border-bottom">Job Name</th>
                      <th className="border-bottom">Status</th>
                      <th className="border-bottom">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JobList?.jobs?.map((t, index) => (
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
                    Showing <b>{JobList?.jobs?.length}</b> out of <b>{JobList?.total_jobs}</b> entries
                  </small>
                </Card.Footer>
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
        </Row>
      </Container>
    </>
  );
};
export default JobManagement;
