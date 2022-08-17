import React, { useState, useEffect, useCallback } from "react";
import { Card, Col, Button } from "@themesberg/react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GiftedChat, InputToolbar, Bubble } from "react-gifted-chat";
import { SendMessage } from "../../Redux/chat/actions";
import moment from "moment";
import { deleteMessage } from "./FirestoreMethods";

let jobOffer = {
  offeredPrice: 0,
  title: "",
  offerTo: "",
  offerDate: "",
  offerStatus: '',
};
let customKey = false;
const Chatboard = ({
  profile,
  oneToOneChat,
  sendMessage,
  users,
  currentUser,
  setUsers,
  id,
}) => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages(oneToOneChat);
  }, [oneToOneChat]);
  
  const onSend = useCallback(
    (messages = []) => {
      let data = {
        senderId: currentUser.id,
        receiverId: id,
        message: messages[0].text,
      };

      sendMessage(messages, users, currentUser, customKey, jobOffer);
      dispatch(SendMessage(data));
    },
    [users]
  );
  const handleInput = (props) => {
    return (
      <div>
        <InputToolbar {...props} />
        {/* <Button>Custom offer</Button> */}
      </div>
    );
  };
  const handleDelete = (id) => {
    deleteMessage(id, users);
  };

  const handleAccept = useCallback(
    (data) => {
      jobOffer = {
        offeredPrice: data.offeredPrice,
        title: data.title,
        offerTo: data.title,
        offerDate: data.offerDate,
        offerStatus: "Accepted",
      };
      customKey = true;
      sendMessage(messages, users, currentUser, customKey, jobOffer);
    },
    [users]
  );
  const handleDecline = useCallback(
    (data) => {
      jobOffer = {
        offeredPrice: data.offeredPrice,
        title: data.title,
        offerTo: data.title,
        offerDate: data.offerDate,
        offerStatus: "Accepted",
      };
      customKey = true;
      sendMessage(users, currentUser, customKey, jobOffer);
    },
    [users]
  );
  const renderBubble = ({ currentMessage }) => {
    if (currentMessage?.user?._id === currentUser?.id) {
      
      return (
        <>
          <div className="sendMessage">
            <p>{currentMessage?.text}</p>
            <span>{moment(currentMessage.createdAt).format("hh:mm:a")}</span>
          </div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              handleDelete(currentMessage?.id);
            }}
          >
            <path
              d="M7.85938 3.26562V3.59375H11.1406V3.26562C11.1406 2.8305 10.9678 2.4132 10.6601 2.10553C10.3524 1.79785 9.93512 1.625 9.5 1.625C9.06488 1.625 8.64758 1.79785 8.3399 2.10553C8.03223 2.4132 7.85938 2.8305 7.85938 3.26562ZM6.54688 3.59375V3.26562C6.54688 2.48241 6.85801 1.73127 7.41183 1.17745C7.96564 0.623632 8.71678 0.3125 9.5 0.3125C10.2832 0.3125 11.0344 0.623632 11.5882 1.17745C12.142 1.73127 12.4531 2.48241 12.4531 3.26562V3.59375H17.375C17.549 3.59375 17.716 3.66289 17.839 3.78596C17.9621 3.90903 18.0312 4.07595 18.0312 4.25C18.0312 4.42405 17.9621 4.59097 17.839 4.71404C17.716 4.83711 17.549 4.90625 17.375 4.90625H16.3854L15.1438 15.779C15.0522 16.5797 14.6691 17.3188 14.0676 17.8552C13.4661 18.3916 12.6882 18.6879 11.8822 18.6875H7.11781C6.31185 18.6879 5.53393 18.3916 4.9324 17.8552C4.33087 17.3188 3.94781 16.5797 3.85625 15.779L2.61462 4.90625H1.625C1.45095 4.90625 1.28403 4.83711 1.16096 4.71404C1.03789 4.59097 0.96875 4.42405 0.96875 4.25C0.96875 4.07595 1.03789 3.90903 1.16096 3.78596C1.28403 3.66289 1.45095 3.59375 1.625 3.59375H6.54688ZM8.1875 7.85938C8.1875 7.68533 8.11836 7.51841 7.99529 7.39534C7.87222 7.27227 7.7053 7.20312 7.53125 7.20312C7.3572 7.20312 7.19028 7.27227 7.06721 7.39534C6.94414 7.51841 6.875 7.68533 6.875 7.85938V14.4219C6.875 14.5959 6.94414 14.7628 7.06721 14.8859C7.19028 15.009 7.3572 15.0781 7.53125 15.0781C7.7053 15.0781 7.87222 15.009 7.99529 14.8859C8.11836 14.7628 8.1875 14.5959 8.1875 14.4219V7.85938ZM11.4688 7.20312C11.2947 7.20312 11.1278 7.27227 11.0047 7.39534C10.8816 7.51841 10.8125 7.68533 10.8125 7.85938V14.4219C10.8125 14.5959 10.8816 14.7628 11.0047 14.8859C11.1278 15.009 11.2947 15.0781 11.4688 15.0781C11.6428 15.0781 11.8097 15.009 11.9328 14.8859C12.0559 14.7628 12.125 14.5959 12.125 14.4219V7.85938C12.125 7.68533 12.0559 7.51841 11.9328 7.39534C11.8097 7.27227 11.6428 7.20312 11.4688 7.20312Z"
              fill="#12499C"
            />
          </svg>
        </>
      );
    } else {
      if (currentMessage.customKey) {
        console.log(currentMessage?.jobOffer, "here is currentMessage messages");
        return (
          <div className="customOffer">
            <h3>Job Offer</h3>
            <p>
              {currentMessage?.jobOffer?.title
                ? currentMessage?.jobOffer?.title
                : "Offer Title"}
            </p>
            <p>{currentMessage?.jobOffer?.offeredPrice}</p>
            {/* <p>{moment(currentMessage?.jobOffer?.date).format("hh:mm:a")}</p> */}
            <p>{moment(currentMessage.createdAt).format("hh:mm:a")}</p>
            <div className="customButton justify-content-around d-flex">
              <p
                onClick={() => {
                  handleAccept(currentMessage?.jobOffer);
                }}
              >
                Accept
              </p>
              |
              <p
                onClick={() => {
                  handleDecline(currentMessage?.jobOffer);
                }}
              >
                Decline
              </p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="receivedMessage">
            <p>{currentMessage?.text}</p>
            <span>{moment(currentMessage.createdAt).format("hh:mm:a")}</span>
          </div>
        );
      }
    }
  };
  return (
    <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: currentUser?.id,
      }}
      renderAvatar={null}
      renderInputToolbar={handleInput}
    />
  );
};
export default Chatboard;
