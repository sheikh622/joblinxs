import React, { useEffect, useState } from "react";
import ChatBoard from "./chatBoard";
import { Card, Col, Row } from "@themesberg/react-bootstrap";
import Navbar from "../../components/Navbar";
import profile from "../../assets/img/team/profile-picture-1.jpg";
import NoRecordFound from "../../components/NoRecordFound";
import { useHistory, useLocation } from "react-router-dom";
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

let selectedIndex;
const Mainchat = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.Auther);
  const contactsList = useSelector((state) => state?.ChatReducer?.ListData);
  const [currentUsers, setCurrentUsers] = useState(false);
  const [oneToOneChat, setOneToOneChat] = useState([]);
  const [users, setUsers] = useState([]);
  const [receiver, setReceiver] = useState([]);
  const params = useLocation();
  let id = params?.search.split("?")[1];
  
  const [chatId, setChatId] = useState(id);
  useEffect(() => {
    let listData = [];
    if (contactsList.length > 0) {
      contactsList.map((data) => {
        if (data.receiver.id === currentUser?.id) {
          listData.push(data?.sender);
        }
        if (data.sender.id === currentUser?.id) {
          listData.push(data?.receiver);
        }
      });
    }
    setReceiver(listData);
  }, [contactsList]);

  useEffect(() => {
    if (chatId) {
      let usersList = [currentUser.id, chatId];
      setUsers(usersList);
    }
  }, [chatId]);
  
  useEffect(() => {
    dispatch(getList(currentUser.id));
  }, []);

  
  
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
  const renderListUser = (item, index) => {
    return (
        <li
          className={`align-items-center list-group-item d-flex pt-2 ${selectedIndex === index ? "active" :""}` }
          onClick={() => handleChat(item.id, index)}
        >
          <Card.Img
            src={item?.profileImg ? item?.profileImg : profile}
            alt="Neil Portrait"
            className="user-avatar rounded-circle"
          />
          <span className="mx-2">{item?.fullName}</span>
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
            {receiver.map((item, index) => {
              return renderListUser(item, index);
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
              currentUser={currentUser}
            />
          ) : (
            <NoRecordFound />
          )}
        </Col>
      </Row>
    </>
  );
};

export default Mainchat;
