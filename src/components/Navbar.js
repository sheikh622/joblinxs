import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Col,
  Container,
  Dropdown,
  Image,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from "@themesberg/react-bootstrap";
import { toast } from "react-toastify";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { onMessageListener } from "../firebase";
import { getNotifiaction } from "../Redux/notification/actions";

export default (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [notificationData, setNotificationData] = useState({
    title: "",
    body: "",
  });
  const auth = useSelector((state) => state.auth.Auther);
  const notification = useSelector(
    (state) => state.Notifications?.notification?.notifications
  );
  // const [notifications, setNotifications] = useState(notification);
  // const areNotificationsRead = notifications.reduce(
  //   (acc, notif) => acc && notif.read,
  //   true
  // );
  useEffect(() => {
    if (notificationData?.body != "") {
      toast.success(notificationData?.body ? notificationData?.body : "");
    }
  }, [notificationData]);
  console.log("notificationData: ", notificationData);
  onMessageListener()
    .then((payload) => {
      setNotificationData({
        title: payload.notification.title,
        body: payload.notification.body,
      });
    })
    .catch((err) => console.log("failed: ", err));
  const notificationList = () => {
    dispatch(
      getNotifiaction({
        id: auth?.id,
      })
    );
  };
  const handleScroll = (e) => {
    var heightBound = (window.height = 400);
    if (heightBound > window.scrollY) {
      console.log(window.scrollY, "here is sctoller");
    }
  };
  const handleRedirection = (jobs, users, title) => {
    if (title === "Job Applied" || title === "Job is Confirmed") {
      history.push(`/Applicants/${jobs.id}`);
    }
    if (
      title === "Job Status" ||
      title === "job started" ||
      title === "Job Completed" ||
      title === "job canceled" ||
      title === "Job Disputed"
    ) {
      history.push(`/detailJob/${jobs.id}`);
    }
    if (title === "Logged Hours") {
      history.push(`/LogHours/${jobs.id}`);
    }
  };
  const Notification = (props) => {
    const {
      title,
      image,
      insertedDate,
      message,
      read = false,
      jobs,
      users,
    } = props;
    const readClassName = read ? "" : "text-danger";
    return (
      <ListGroup.Item
        action
        onClick={() => handleRedirection(jobs, users, title)}
        className="border-bottom border-light"
      >
        <Row className="align-items-center">
          {/* <Col className="col-auto">
            <Image
              src={image}
              className="user-avatar lg-avatar rounded-circle"
            />
          </Col> */}
          <Col className="ps-0 ms--2 mx-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h6 mb-0 text-small">
                  {title ? title : "Title"}
                </h4>
              </div>
              <div className="text-end">
                <small className={readClassName}>
                  {insertedDate
                    ? moment(insertedDate).format("MM/DD/YYYY hh:mm")
                    : "date"}
                </small>
              </div>
            </div>
            <p className="font-small mt-1 mb-0">
              {message ? message : "messages"}
            </p>
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
            <Nav className="align-items-center" onScroll={handleScroll}>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  className="text-primary icon-notifications me-lg-3"
                >
                  <span className="icon icon-sm" onClick={notificationList}>
                    <FontAwesomeIcon icon={faBell} className="bell-shake" />
                    {notification?.length > 0 && (
                      <span className="icon-badge rounded-circle unread-notifications" />
                    )}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                  <ListGroup className="list-group-flush notification-list">
                    <Nav.Link
                      href="#"
                      className="text-center text-primary fw-bold border-bottom border-light py-3"
                    >
                      Notifications
                    </Nav.Link>
                    {notification?.map((n) => (
                      <Notification key={`notification-${n.id}`} {...n} />
                    ))}
                    {/* <Dropdown.Item className="text-center text-primary fw-bold py-3">
                        View all
                      </Dropdown.Item> */}
                  </ListGroup>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          )}
        </div>
      </Container>
    </Navbar>
  );
};
