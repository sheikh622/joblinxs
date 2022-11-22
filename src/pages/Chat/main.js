import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ChatBoard from "./chatBoard";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Dropdown,
  ButtonGroup,
  Modal,
  Row,
} from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/Navbar";
import profile from "../../assets/img/team/profile-picture-1.jpg";
import NoRecordFound from "../../components/NoRecordFound";
import Report from "../../components/report";
import { SendMessage, CustomOfferAccept } from "../../Redux/chat/actions";

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
import { getList, getToken, getMeeting } from "../../Redux/chat/actions";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { blockUser, unblockUser } from "../../Redux/profile/actions";
import phone from "../../assets/img/phone-call.svg";
import Zoom from "../../assets/img/zoom.svg";
import { toast } from "react-toastify";

let selectedIndex;
let selectIndex;
let finalData = {
  blockListing: "",
  blockedDataListing: "",
};
let customKey = false;
const Mainchat = () => {
  const dispatch = useDispatch();
  const params = useLocation();
  let id = params?.search.split("?")[1];
  let fireId = parseInt(params.search.split("?")[2]);
  const currentUser = useSelector((state) => state.auth.Auther);
  const contactsList = useSelector((state) => state?.ChatReducer?.ListData);
  const TokenResponse = useSelector((state) => state?.ChatReducer?.Token);
  const MeetingResponse = useSelector((state) => state?.ChatReducer?.Meeting?.join_url);
  const [currentUsers, setCurrentUsers] = useState(false);
  const [oneToOneChat, setOneToOneChat] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [BlockUserSaga, setBlockUserSaga] = useState(false);
  const [blockedBy, setBlockedBy] = useState(null);
  const [show, setShow] = useState();
  const [userId, setUserId] = useState(id);
  const [search, setSearch] = useState("");
  const [jobId, setJobId] = useState();
  const [dataList, setDataList] = useState();
  const [users, setUsers] = useState([]);
  const [chatId, setChatId] = useState(fireId);
  const [zoom, setZoom] = useState(false);
  const [zoomUrl, setZoomUrl] = useState("");
  const onSend = useCallback(
    (message) => {
      let data = {
        senderId: currentUser.id,
        receiverId: userId,
        message: "https://us05web.zoom.us/j/88570507975?pwd=SVRwakk0WVErZTZmRExWL3oyaitDdz09",
      };
      if (blockedBy === null) {
        dispatch(SendMessage({ data, message, users, currentUser, customKey, zoom: zoom }));
      } else {
        if (blockedBy) {
          toast.error("You have blocked this user");
        } else {
          toast.error("You have been blocked by this user");
        }
      }
    },
    [users]
  );
  useEffect(() => {
    if (contactsList !== undefined) {
      setDataList(contactsList);
    }
  }, [contactsList]);
  useEffect(() => {
    if (chatId) {
      let usersList = [currentUser.firebaseId, chatId];
      setUsers(usersList);
    }
  }, [chatId]);
  const handleBlock = () => {
    dispatch(
      blockUser({
        blockedTo: selectedUser,
        blockedBy: currentUser?.id,
        setBlockUserSaga: setBlockUserSaga,
        setBlockedBy: setBlockedBy
      })
    );
  };
  const handleUnBlock = () => {
    dispatch(
      unblockUser({
        blockedTo: selectedUser,
        blockedBy: currentUser?.id,
        setBlockUserSaga: setBlockUserSaga,
        setBlockedBy: setBlockedBy
      })
    );
  };

  useEffect(() => {
    dispatch(getList(currentUser.id));
  }, []);

  const handleMeeting = () => {
    dispatch(
      getMeeting({
        access_token: TokenResponse.access_token,
        agenda: "mymeetings",
        // setZoom: setZoom,
        setZoomUrl: setZoomUrl
      })
    );
  };
  useEffect(() => {
    dispatch(getToken());
  }, []);

  const handleClose = () => {
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
            setOneToOneChat(documents);
          });
        }
      });
    }
  }, [currentUser, users]);
  const handleChat = (firebaseId, index, id) => {
    if (id) {
      setChatId(firebaseId);
      setUserId(id);
      setCurrentUsers(true);
      // selectedIndex = index;
    }
  };
  const renderChat = (item, index, list) => {
    selectIndex = index;
    setCurrentUsers(true);
    handleClick(list?.blockedBy?.id);
    if (item !== undefined) {
      console.log(item, index, list)
      console.log(item,"111111111111111111111111")
      handleChat(item?.firebaseId, index, item?.id);
    } else {
      handleChat(list?.firebaseId, index, list?.id);
    }
  };
  const handleClick = (id) => {
    if (id === undefined) {
      setBlockedBy(null);
    } else {
      setSelectedUser(id);
      if (id === currentUser?.id) {
        setBlockedBy(true);
      } else {
        setBlockedBy(false);
      }
    }
  };
  const HeaderList = ({ blockListing, blockedDataListing }) => {
    return (
      <li className={`align-items-center list-group-item d-flex pt-2`}>
        <Card.Img
          src={
            blockedDataListing != undefined
              ? blockedDataListing?.profileImg
              : profile
          }
          alt="Neil Portrait"
          className="user-avatar rounded-circle"
        />
        <span className="mx-2 listedName">
          {blockedDataListing != undefined ? blockedDataListing?.fullName : ""}
        </span>
        <Dropdown as={ButtonGroup} className="me-2 mt-1 ms-2">
          <Dropdown.Toggle
            as={Button}
            split
            variant="link"
            className="text-dark m-0 p-0 ellipsisIcon"
          >
            <span className="icon icon-sm">
              <img src={phone} alt="" width="25px" />

            </span>

          </Dropdown.Toggle>

          <Dropdown.Menu className="custom_menu">
            <Dropdown.Item
              onClick={() => {
                setZoom(true);
                handleMeeting();
              }}
            >
              Send Meeting Link
            </Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
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
                style={{ color: "black" }}
              />
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="custom_menu">
            <Dropdown.Item
              onClick={() => {
                setSelectedUser(
                  blockedDataListing != undefined ? blockedDataListing?.id : ""
                );
                setBlockUserSaga(true);
              }}
            >
              {blockedBy ? "Unblock" : "Block"}
            </Dropdown.Item>
            {blockedBy ? "" : (
              <Dropdown.Item onClick={() => setShow(true)}>Report</Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </li>
    );
  };

  const renderListUser = (item, index, blockedId, data) => {
    return (
      <li
        className={`align-items-center list-group-item d-flex pt-2 ${selectIndex === index ? "active" : ""
          }`}
        onClick={() =>
          renderChat(item, index, data)
          // setCurrentUsers(true)
        }
      >
        <Card.Img
          src={item?.profileImg ? item?.profileImg : profile}
          alt="Neil Portrait"
          className="user-avatar rounded-circle"
        />
        <span className="mx-2 listedName">
          {data?.fullName !== undefined ? data?.fullName : item?.fullName}
        </span>

      </li>

    );
  };

  useEffect(() => {
    let data = [];
    let newArray = contactsList;
    let blockedData = {
      data: "",
    };
    let blockedlist = {
      list: "",
    };
    newArray.map((item, index) => {
      if (item?.blockedBy !== null) {
        blockedlist = {
          list: item ? item : "",
        };
      }
      if (item?.receiver?.id === currentUser?.id) {
        return data.push(item?.sender);
      } else {
        return data.push(item?.receiver);
      }
    });
    if (userId !== undefined) {
      const index = data?.map((object) => object?.id).indexOf(userId);
      const indexs = dataList?.map((object) => object?.id).indexOf(userId);
      // selectedIndex = index;
      if (indexs < 0) {
        if (index <= -1) {
          newArray.push({
            id: userId,
            fullName: "Provider",
            firebaseId: fireId,
            profileImg:
              "https://wohk-bucket.s3.us-east-2.amazonaws.com/166125681470230.png",
          });
          setDataList(() => {
            return [...newArray];
          });
        }
      }
    }
    let id = data[selectedIndex]?.id;
    const firebase = data.filter((element) => {
      if (element?.id === id) {
        return element;
      }
    });
    let firebaseId = firebase[0];
    blockedData = {
      data: firebaseId ? firebaseId : "",
    };
    finalData = {
      blockListing: blockedlist?.list,
      blockedDataListing: blockedData?.data,
    };
    handleChat(firebaseId?.firebaseId, selectedIndex, id);
  }, [selectedIndex, contactsList, userId]);

  return (
    <>
      <Navbar module={"Chat"} />
      <Row>
        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <Card
                border="light"
                className="text-center p-0 mb-4 chat-div profileView"
              >
                <Card.Header>
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
                </Card.Header>
                <Card.Body className="p-0">
                  <ul className="p-0">
                    {dataList?.map((item, index) => {
                      if (item?.receiver?.id === currentUser?.id) {
                        return renderListUser(
                          item?.sender,
                          index,
                          item?.blockedBy,
                          item
                        );
                      } else {
                        return renderListUser(
                          item?.receiver,
                          index,
                          item?.blockedBy,
                          item
                        );
                      }
                    })}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={12} xl={8} className="chat-div">
          <Row>
            <Col xs={12}>
              <Card
                border="light"
                className="text-left p-0 info profileView chat-div "
              >
                <Card.Header>
                  {currentUsers ? (
                    <>{HeaderList(finalData)}</>
                  ) : (
                    <div className="my-3 text-center">
                      <span className="p-5">
                        Please Select User to start Chat.
                      </span>
                    </div>
                  )}
                </Card.Header>
                <Card.Body>
                  <div className="chat-List">
                    {currentUsers ? (
                      <ChatBoard
                        profile={profile}
                        oneToOneChat={oneToOneChat}
                        setOneToOneChat={setOneToOneChat}
                        sendMessage={sendMessage}
                        users={users}
                        setJobId={setJobId}
                        jobId={jobId}
                        zoom={zoom}
                        zoomUrl={zoomUrl}
                        setUsers={setUsers}
                        id={userId}
                        blockedBy={blockedBy}
                        currentUser={currentUser}
                      />
                    ) : (
                      <NoRecordFound />
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Report show={show} setShow={setShow} id={userId} />
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
                      color="dark"
                      size="sm"
                      onClick={() => {
                        handleUnBlock();
                      }}
                    >
                      Unblock
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      color="dark"
                      size="sm"
                      onClick={() => {
                        handleBlock();
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
