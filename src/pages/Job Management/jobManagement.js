import {
  faAngleDoubleLeft,
  faAngleDoubleRight, faCheck, faEllipsisH, faMinus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button, ButtonGroup, Card, Col, Container, Dropdown, Form, Nav, Pagination, Row, Table
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getJobListing } from "../../Redux/JobManagement/actions";


const JobManagement = (row) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const JobList = useSelector(
    (state) => state?.Job?.Jobs
  );
  console.log("hvjbk",JobList)
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState("5");
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
  useEffect(() => {
     console.log("dfvb")
    dispatch(
      getJobListing({
        page: page,
        limit: limit,
        search: search,
      })
    );
  },
    [page, limit, search]
  );
  // const [ProfileUser, setProfileUser] = useState(row.isApproved);
  // useEffect(() => {
  //   setProfileUser(row.isApproved);
  // }, [row.isApproved]);

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
        
        {/* <td>
            <span className="fw-normal">{item?.categoryStatus ? item?.categoryStatus : "N/A"}</span>
          </td> */}

        {/* <td>
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
                  setShowDefault(true);
                  setAdminId(item.id)}}
              >
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td> */}
      </tr>
    );
  };
  const nextPage = () => {
    if (page < JobList?.pages) {
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
                      value={type}
                      onChange={handleChange}
                    >
                      {/* {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))} */}
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
                    Showing <b>{JobList?.jobs?.length}</b> out of <b>{JobList?.total_categories}</b> entries
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
export default JobManagement;
