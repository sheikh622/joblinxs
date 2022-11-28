import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Col,
  Container,
  Dropdown, ListGroup,
  Nav,
  Navbar,
  Row
} from "@themesberg/react-bootstrap";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { onMessageListener } from "../firebase";
import { getNotifiaction } from "../Redux/notification/actions";
import Spinner from "./spinner";

export default (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const Login = useSelector((state) => state?.auth?.Auther);
  console.log("Login00000000000", Login)
  const SingleId = useSelector((state) => state?.addJob?.jobById);
  console.log("SignleId", SingleId)
  const [hiredId, sethiredId] = useState();
  console.log("singleId", SingleId)
  useEffect(() => {
    if (SingleId !== undefined) {
      let datas = SingleId?.user_job?.find(data => data.hiredBy.id === Login?.id)
      sethiredId(datas)
    }
  }, [SingleId])
  const [loader, setLoader] = useState(true);
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
    if (auth?.role?.name !== "Admin") {
      if (notificationData?.body != "") {
        toast.success(notificationData?.body ? notificationData?.body : "");
      }
    } else {
      if (notificationData?.title === "Job Request" ||
        notificationData?.title === "Report User" ||
        notificationData?.title === "Disputed User" ||
        notificationData?.title === "Category User"
      ) {
        toast.success(notificationData?.body ? notificationData?.body : "");
      }
    }
  }, [notificationData]);
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
        setLoader: setLoader,
      })
    );
  };
  const handleScroll = (e) => {
    var heightBound = (window.height = 400);
    if (heightBound > window.scrollY) {
    }
  };
  const handleRedirection = (jobs, users, title) => {
    if (title === "provider appply for job" || title === "provider confirm the job") {
      history.push(`/Applicants/${jobs.id}`);
    }
    if (
      title === "JOB_COMPLETED_BY_PROVIDER" ||
      title === "Job Status" ||

      title === "Logged Hours" ||
      title === "Job Started"
    ) {
      history.push(`/detailJob/${jobs.id}`);
    }
    if (title === "Logged Hours") {
      history.push(`/LogHours/${jobs.id}`);
    }
    if (
      title === "Location Shared" ||
      title === "Job Applied" ||
      title === "Job Completed" ||
      title === "job completed" ||
      title === "Job is Confirmed"
    ) {
      history.push(`/Applicants/${jobs.id}`)
    }
    if (
      title.slice(0, 12) === "Message Sent"
    ) {
      history.push(`/chat?${users?.id}?${users?.firebaseId}`)
    }
    if (
      title === "Category User"
    ) {
      history.push(`/category-management`)
    }
    if (
      title === "Emergency Job Post" || title === "Job Request"
    ) {
      history.push(`/Job-management`)
    }
    if (
      title === "Disputed User"
    ) {
      history.push(`/dispute-management`)
    }
    if (
      title === "Report User"
    ) {
      history.push(`/Report-management`)
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

      <div className="d-flex justify-content-between w-100">
        <div className="d-flex align-items-center">
          <h2>{props?.module}</h2>
        </div>
        {auth?.role?.name && (
          <Nav className="align-items-center" onScroll={handleScroll}>

            {window?.location?.pathname !== "/privacy-public" && window?.location?.pathname !== "/terms-public" && (
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
                    {loader ? (
                      <Spinner />
                    ) : (
                      <>
                        {notification?.map((n) => (
                          <Notification key={`notification-${n.id}`} {...n} />
                        ))}
                      </>
                    )
                    }

                    {/* <Dropdown.Item className="text-center text-primary fw-bold py-3">
                        View all
                      </Dropdown.Item> */}
                  </ListGroup>
                </Dropdown.Menu>

              </Dropdown>
            )}
          </Nav>
        )}
      </div>

    </Navbar>
  );
};
