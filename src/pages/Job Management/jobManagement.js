import {
  faAngleDoubleLeft,
  faAngleDoubleRight, faCheck, faEllipsisH, faEye, faMinus, faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button, ButtonGroup, Card, Col, Container, Dropdown, Form, Modal, Nav, Pagination, Row, Table
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";
import { changeJobStatus, deleteJob, getJobListing } from "../../Redux/JobManagement/actions";
import { getCategoryList } from "../../Redux/Category/actions";
import { Routes } from "../../routes";

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
  const [loader, setLoader] = useState(true);
  const handleJobAction = (data) => {
    dispatch(
      changeJobStatus({
        id: data.id,
        isApproved: data.isApproved,
        page: page,
        limit: limit,
        status: status,
        search: search,
        type: type,
        category: categoryType,
      })
    );
  }
  const handleDelete = () => {
    dispatch(
      deleteJob({
        jobId: adminId,
        page: page,
        limit: limit,
        status: status,
        search: search,
        type: type,
        data: JobList,
        category: categoryType,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getCategoryList(
        {
          search: "",
          role: "admin"
        }
      )
    );
  }, []);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
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
  const handleStatus = (event) => {
    setStatus(event.target.value)
  }
  const handleClick = (event) => {
    setCategoryType(event.target.value)
  }
  const CategoryList = useSelector((state) => state?.Category?.getCategoryList);
console.log("item?.title",CategoryList)
  useEffect(() => {
    let array = [
      {
        value: "ALL",
        label: "All"
      }
    ];
    CategoryList.map((item) => {
      array.push({
        value: item?.title,
        label: item?.title,

      })
    })
    setCategory(array);
  }, [CategoryList])
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
  const arr = [
    {
      value: "",
      label: "All Status",
    },
    {
      value: "pending",
      label: "Pending",
    },
    {
      value: "completed",
      label: "Completed",
    },
    {
      value: "Accepted",
      label: "Accepted",
    },
    {
      value: "inprogress",
      label: "Inprogress",
    },
    {
      value: "Rejected",
      label: "Rejected",
    },
    {
      value: "upcoming",
      label: "Upcoming",
    },
  ];
  useEffect(() => {
    dispatch(
      getJobListing({
        page: page,
        limit: limit,
        status: status,
        search: search,
        type: type,
        setLoader: setLoader,
        category: categoryType,
      })
    );
  },
    [page, limit, status, type, search, categoryType,]
  );

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
              <Dropdown.Item
                as={Link}
                to={{ pathname: Routes.JobDetails.path, state: { item } }}
              >
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              {item?.status === "pending" ? (
                <>
                  <Dropdown.Item className="text-success" onClick={(e) => {
                    handleJobAction({ id: item?.id, isApproved: true })
                  }}>
                    <FontAwesomeIcon icon={faCheck} className="me-2" /> Accepted
                  </Dropdown.Item>
                  <Dropdown.Item className="text-danger" onClick={() => {
                    handleJobAction({ id: item?.id, isApproved: false })
                  }}>
                    <FontAwesomeIcon icon={faMinus} className="me-2" /> Rejected
                  </Dropdown.Item>
                </>
              ) : item?.status === "Rejected" ? (
                <Dropdown.Item className="text-success" onClick={() => {
                  handleJobAction({ id: item?.id, isApproved: true })
                }}>
                  <FontAwesomeIcon icon={faCheck} className="me-2" /> Accepted
                </Dropdown.Item>
              ) : (
                <Dropdown.Item className="text-danger" onClick={() => {
                  handleJobAction({ id: item?.id, isApproved: false })
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
                    <Col lg={2} md={5}>
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
                    <Col lg={2} md={5}>
                      <Form.Group className="mt-3">
                        <Form.Select defaultValue="1"
                          label="Select"
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
                    <Col lg={2} md={5}>
                      <Form.Group className="mt-3">
                        <Form.Select
                          defaultValue="1"
                          label="Select"
                          value={status}
                          onChange={handleStatus}
                        >
                          {arr.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col lg={2} md={5}>
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
                    {JobList?.jobs?.length > 0 ? (
                      <>
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
                    Delete Job
                  </Modal.Title>
                  <Button variant="close" aria-label="Close" onClick={handlefalse} />
                </Modal.Header>
                <Modal.Body>
                  <Form >
                    <Form.Group>
                      Are you sure you want to delete this Job?
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
export default JobManagement;
