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
//   import { getCategoryListing, getCategoryProfile } from "../../Redux/categoryManagement/actions";
  
  
  const JobManagement = (row) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
      location: { state },
    } = history;
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit] = useState("5");
  
    // const CategoryList = useSelector(
    //   (state) => state?.CategoryListing?.getCategoryListing
    // );
  
    // const handleCategoryAction = (id) => {
  
    //   dispatch(
    //     getCategoryProfile({
    //       categoryId:id,
    //       page: page,
    //       limit: limit,
    //       search: search,
    //     })
    //   );
    // }
    // useEffect(() => {
    //   dispatch(
    //     getCategoryListing({
    //       page: page,
    //       limit: limit,
    //       search: search,
    //     })
    //   );
    // },
    //   [page,limit,search]
    // );
    const [ProfileUser, setProfileUser] = useState(row.isApproved);
    useEffect(() => {
      setProfileUser(row.isApproved);
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
            <span className="fw-normal">{item?.title ? item?.title : "N/A"}</span>
          </td>
          <td>
            <span className="fw-normal">{item?.details ? item?.details : "N/A"}</span>
          </td>
          <td>
            <span className="fw-normal">{item?.categoryStatus ? item?.categoryStatus : "N/A"}</span>
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
                {/* {(item?.categoryStatus == 'Pending' || item?.categoryStatus == 'Rejected') && (
                  <Dropdown.Item className="text-success" onClick={() => {
                    handleCategoryAction(item?.id)
                  }}
                  >
  
                    <FontAwesomeIcon icon={faCheck} className="me-2" /> Accept
                  </Dropdown.Item>
                )} */}
                {/* {(item?.categoryStatus == 'Pending' || item?.categoryStatus == 'Accepted') && (
  
                  <Dropdown.Item className="text-danger" onClick={() => {
                    handleCategoryAction(item?.id)
                  }}>
                    <FontAwesomeIcon icon={faMinus} className="me-2" /> Decline
                  </Dropdown.Item>
                )} */}
              </Dropdown.Menu>
            </Dropdown>
          </td>
        </tr>
      );
    };
    // const nextPage = () => {
    //   if (page < CategoryList?.pages) {
    //     setPage(page + 1);
    //   }
    // };
    // const previousPage = () => {
    //   if (1 < page) {
    //     setPage(page - 1);
    //   }
    // };
  
    // const paginationItems = () => {
    //   let items = [];
    //   for (let number = 1; number <= CategoryList?.pages; number++)
    //    {
    //     items.push(
    //       <Pagination.Item key={number} active={number === page} onClick={() => {
    //         setPage(number)
    //       }}>
    //         {number}
    //       </Pagination.Item>,
    //     );
    //   }
    //   return items
    // }
  
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
                        // onChange={(event) => {
                        //   setSearch(event.target.value);
                        // }}
                      />
                    </Form.Group>
                  </Col>
                </Card.Header>
                <Card.Body className="pt-0">
                  <Table hover className="user-table align-items-center management_table">
                    <thead>
                      <tr>
                        <th className="border-bottom">Category Name</th>
                        <th className="border-bottom">Description</th>
                        <th className="border-bottom">Status</th>
                        <th className="border-bottom">Action</th>
                      </tr>
                    </thead>
                    {/* <tbody>
                      {CategoryList?.categroies?.map((t, index) => (
                        <TableRow key={index} item={t} />
                      ))}
                    </tbody> */}
                  </Table>
                  {/* <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
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
                      Showing <b>{CategoryList?.categroies?.length}</b> out of <b>{CategoryList?.total_categories}</b> entries
                    </small>
                  </Card.Footer> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  export default JobManagement;
  