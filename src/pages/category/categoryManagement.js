import React from "react";
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
  faEllipsisH,
  faCheck,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import transactions from "../../data/transactions";

const CategoryManagement = () => {
  const totalTransactions = transactions.length;

  const TableRow = (props) => {
    const { invoiceNumber, subscription, price, issueDate, dueDate, status } =
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
          <span className="fw-normal">Pending</span>
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
              <Dropdown.Item className="text-success">
                <FontAwesomeIcon icon={faCheck} className="me-2" /> Accept
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faMinus} className="me-2" /> Decline
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <>
      <Navbar module={"Category Management"} />
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
              </Card.Header>
              <Card.Body className="pt-0">
                <Table hover className="user-table align-items-center">
                  <thead>
                    <tr>
                      <th className="border-bottom">Category Name</th>
                      <th className="border-bottom">Description</th>
                      <th className="border-bottom">Status</th>
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
export default CategoryManagement;
