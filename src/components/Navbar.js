import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Col, Container, Dropdown, Image, ListGroup, Nav, Navbar, Row
} from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import NOTIFICATIONS_DATA from "../data/notifications";

export default (props) => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce(
    (acc, notif) => acc && notif.read,
    true
  );
  const auth = useSelector((state) => state.auth);

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map((n) => ({ ...n, read: true })));
    }, 300);
  };

  const Notification = (props) => {
    const { link, sender, image, time, message, read = false } = props;
    const readClassName = read ? "" : "text-danger";

    return (
      <ListGroup.Item action href={link} className="border-bottom border-light">
        <Row className="align-items-center">
          <Col className="col-auto">
            <Image
              src={image}
              className="user-avatar lg-avatar rounded-circle"
            />
          </Col>
          <Col className="ps-0 ms--2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h6 mb-0 text-small">{sender}</h4>
              </div>
              <div className="text-end">
                <small className={readClassName}>{time}</small>
              </div>
            </div>
            <p className="font-small mt-1 mb-0">{message}</p>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Navbar variant="dark" expanded className="mb-3">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <h2>{props?.module}</h2>
          </div>
          {auth?.Auther?.userRole != "Admin" && (
            <>
              <Nav className="align-items-center">
                <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead}>
                  <Dropdown.Toggle
                    as={Nav.Link}
                    className="text-primary icon-notifications me-lg-3"
                  >
                    <span className="icon icon-sm">
                      <FontAwesomeIcon icon={faBell} className="bell-shake" />
                      {areNotificationsRead ? null : (
                        <span className="icon-badge rounded-circle unread-notifications" />
                      )}
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                    <ListGroup className="list-group-flush">
                      <Nav.Link
                        href="#"
                        className="text-center text-primary fw-bold border-bottom border-light py-3"
                      >
                        Notifications
                      </Nav.Link>
                      {notifications.map((n) => (
                        <Notification key={`notification-${n.id}`} {...n} />
                      ))}
                      <Dropdown.Item className="text-center text-primary fw-bold py-3">
                        View all
                      </Dropdown.Item>
                    </ListGroup>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
};
