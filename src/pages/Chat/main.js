import React, { useEffect, useState } from "react";
import ChatBoard from "./chatBoard";
import {
  Card,
  Col,
  Row,
  Dropdown,
  ButtonGroup,
  Button,
  Modal,
  Form,
} from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/Navbar";
import profile from "../../assets/img/team/profile-picture-1.jpg";
import NoRecordFound from "../../components/NoRecordFound";
import { useHistory, useLocation } from "react-router-dom";
import Report from "../../components/report";
import {
  collection as col,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "./FirestoreMethods";
import createChatId from "./CreateChatId.js";
import { getList } from "../../Redux/chat/actions";
import {
  faStar,
  faChevronRight,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import {
  getProfile,
  blockUser,
  unblockUser,
} from "../../Redux/profile/actions";

let selectedIndex;
const Mainchat = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const login = useSelector((state) => state.auth.Auther);
  const currentUser = useSelector((state) => state.auth.Auther);
  const contactsList = useSelector((state) => state?.ChatReducer?.ListData);
  const [currentUsers, setCurrentUsers] = useState(false);
  const [oneToOneChat, setOneToOneChat] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [BlockUserSaga, setBlockUserSaga] = useState(false);
  const [showDefault, setShowDefault] = useState(false);
  const [blockedBy, setBlockedBy] = useState(null);
  const [show, setShow] = useState();
  const [users, setUsers] = useState([]);
  const [receiver, setReceiver] = useState([]);
  const params = useLocation();
  let id = params?.search.split("?")[1];
  const [chatId, setChatId] = useState(id);
  let profileId = params.pathname.split("/")[2];
  useEffect(() => {
    dispatch(
      getProfile({
        id: profileId,
      })
    );
  }, []);
  const handleBlock = (data, values) => {
    dispatch(
      blockUser({
        blockedTo: selectedUser,
        blockedBy: login?.id,
        id: currentUser?.
        
        id,
      })
    );
  };
  const handleUnBlock = () => {
    dispatch(
      unblockUser({
        blockedTo: selectedUser,
        blockedBy: login?.id,
        id: currentUser?.id,
      })
    );
  };
  useEffect(() => {
    if (chatId) {
      let usersList = [currentUser.firebaseId, chatId];
      setUsers(usersList);
    }
  }, [chatId]);

  useEffect(() => {
    dispatch(getList(currentUser.id));
  }, []);

  const handleClose = () => {
    setShowDefault(false);
    setBlockUserSaga(false);
  };

  useEffect(() => {
    if (currentUser || users) {
      const chatId = createChatId(users);
      const newcoll = col(db, "chats");
      const q = query(newcoll, where("chatId", "==", chatId));
      onSnapshot(q, { includeMetadataChanges: true }, (res) => {
        if (res != null) {
          const newSnap = col(db, "chats", chatId, "messages");
          const qb = query(newSnap, orderBy("createdAt", "desc"));
          onSnapshot(qb, { includeMetadataChanges: true }, (res) => {
            let documents = [];
            res.forEach((doc) => {
              documents.push({ ...doc.data(), id: doc.id });
            });
            setCurrentUsers(true);
            setOneToOneChat(documents);
          });
        }
      });
    }
  }, [currentUser, users]);

  const handleChat = (id, index) => {
    setChatId(id);
    setCurrentUsers(true);
    selectedIndex = index;
  };
  // console.log(blockedBy, "asdasdasd")
  const handleClick = (id) => {
    if (id === undefined) {
      setBlockedBy(null);
    } else {
      if (id === currentUser?.id) {
        setBlockedBy(true);
      }
      else{
        setBlockedBy(false);
      }
    }
  };
  const renderListUser = (item, index, blockedId) => {
    return (
      <li
        className={`align-items-center list-group-item d-flex pt-2 ${
          selectedIndex === index ? "active" : ""
        }`}
        onClick={() => {
          handleChat(item.firebaseId, index);
          handleClick(blockedId?.id);
        }}
      >
        <Card.Img
          src={item?.profileImg ? item?.profileImg : profile}
          alt="Neil Portrait"
          className="user-avatar rounded-circle"
        />
        <span className="mx-2 listedName">{item?.fullName}</span>
        <Dropdown as={ButtonGroup} className="me-3 mt-1 ms-4">
          <Dropdown.Toggle
            as={Button}
            split
            variant="link"
            className="text-dark m-0 p-0 ellipsisIcon"
          >
            <span className="icon icon-sm">
              <FontAwesomeIcon
                icon={faEllipsisV}
                className="icon-dark"
                onClick={() => {
                  handleClick(blockedId?.id);
                }}
                style={{ color: "black" }}
              />
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="custom_menu">
            {blockedBy ? (
              <>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedUser(item.id);
                    setBlockUserSaga(true);
                  }}
                >
                  Unblock
                </Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item
                  onClick={() => {
                    setSelectedUser(item.id);
                    setBlockUserSaga(true);
                  }}
                >
                  Block
                </Dropdown.Item>
              </>
            )}

            <Dropdown.Item onClick={() => setShow(true)}>Report</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
    );
  };
  return (
    <>
      <Navbar module={"Chat"} />
      <Row>
        <Col xs={12} xl={3}>
          <div className="chatList">
            <ul>
              {contactsList.map((item, index) => {
                if (item?.receiver?.id === currentUser?.id) {
                  return renderListUser(item?.sender, index, item?.blockedBy);
                } else {
                  return renderListUser(item?.receiver, index, item?.blockedBy);
                }
              })}
            </ul>
          </div>
        </Col>
        <Col xs={12} xl={9} className="chat-div">
          {currentUsers ? (
            <ChatBoard
              profile={profile}
              oneToOneChat={oneToOneChat}
              setOneToOneChat={setOneToOneChat}
              sendMessage={sendMessage}
              users={users}
              setUsers={setUsers}
              id={chatId}
              blockedBy={blockedBy}
              currentUser={currentUser}
            />
          ) : (
            <NoRecordFound />
          )}
        </Col>
      </Row>
      <Report show={show} setShow={setShow} />

      <Modal
        as={Modal.Dialog}
        centered
        show={BlockUserSaga}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title className="h5">
            {blockedBy ? "Unblock" : "Block"} User
          </Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              Are you sure you want to {blockedBy ? "Unblock" : "Block"} this
              User?
            </Form.Group>
            <Form.Group>
              <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                {blockedBy ? (
                  <>
                    <Button
                      variant="primary"
                      // onHide={handleClose}
                      color="dark"
                      size="sm"
                      // type="submit"
                      onClick={() => {
                        handleUnBlock();
                        handleClose();
                      }}
                    >
                      Unblock
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      // onHide={handleClose}
                      color="dark"
                      size="sm"
                      // type="submit"
                      onClick={() => {
                        handleBlock();
                        handleClose();
                      }}
                    >
                      Block
                    </Button>
                  </>
                )}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Mainchat;
