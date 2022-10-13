import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { GiftedChat, InputToolbar, Bubble } from "react-gifted-chat";
import { SendMessage, CustomOfferAccept } from "../../Redux/chat/actions";
import moment from "moment";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { deleteMessage, updateCustomOffer } from "./FirestoreMethods";
import Zoom from "../../assets/img/zoom.svg";
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
let jobOffer = {
  offeredPrice: 0,
  title: "",
  offerTo: "",
  offerDate: "",
  offerStatus: "",
};
let customKey = false;
const Chatboard = ({
  blockedBy,
  oneToOneChat,
  sendMessage,
  users,
  currentUser,
  id,
  zoom,
  zoomUrl
}) => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  // const [zoomKey, setZoomKey] = useState(zoom);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    setMessages(oneToOneChat);
    setMessage("")
  }, [oneToOneChat]);

  useEffect(() => {
    // setMessage(zoomUrl);
    if (zoomUrl) {
      onSend(zoomUrl, zoom)
    }
  }, [zoom, zoomUrl])
  const onSend = useCallback(
    (message) => {
      let data = {
        senderId: currentUser.id,
        receiverId: id,
        message: message ? message : zoomUrl
      };
      if (blockedBy === null) {
        dispatch(SendMessage({ data, message, users, currentUser, customKey, zoom, }));
      } else {
        if (blockedBy) {
          toast.error("You have blocked this user");
        } else {
          toast.error("You have been blocked by this user");
        }
      }
    },
    [users, zoom]
  );
  const handleInput = (props) => {
    return (
      <div className="chatInput">
        {blockedBy ? (
          <h3 className="text-center">You have blocked this user</h3>
        ) : (
          <>
            {blockedBy === null ? (
              <>
                <TextareaAutosize
                  maxRows={3}
                  className="textarea mt-2"
                  placeholder="Text Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ width: 200 }}
                />
                {message && (
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    onClick={() => onSend(message)}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9999 9.99991C21.9658 9.15273 21.6078 8.35094 20.9999 7.75991C20.4268 7.16953 19.7485 6.69134 18.9999 6.34991C18.9999 6.34991 18.9499 6.34991 18.9099 6.28991L5.25992 0.539912C4.8624 0.365934 4.43382 0.274095 3.99992 0.269912C3.565 0.263282 3.1331 0.343225 2.72936 0.505089C2.32562 0.666953 1.95811 0.907505 1.64822 1.21274C1.33833 1.51798 1.09225 1.88181 0.924292 2.28305C0.756339 2.6843 0.669871 3.11494 0.669922 3.54991C0.687102 4.13249 0.826801 4.70492 1.07992 5.22991L2.92992 9.99991L1.07992 14.7799C0.829294 15.3058 0.689725 15.8777 0.669922 16.4599C0.66989 16.8953 0.756295 17.3265 0.924129 17.7282C1.09196 18.13 1.33789 18.4945 1.64764 18.8006C1.95739 19.1066 2.32482 19.3481 2.72861 19.5111C3.1324 19.674 3.56452 19.7552 3.99992 19.7499C4.44057 19.7484 4.87622 19.6565 5.27992 19.4799V19.4799L18.8899 13.7299C18.937 13.7058 18.9807 13.6755 19.0199 13.6399C19.7766 13.2685 20.4555 12.756 21.0199 12.1299C21.296 11.833 21.5252 11.4958 21.6999 11.1299C21.8809 10.7796 21.9833 10.3939 21.9999 9.99991V9.99991ZM3.99992 2.26991C4.21987 2.27073 4.43624 2.32568 4.62992 2.42991C4.67425 2.45252 4.7213 2.46932 4.76992 2.47991L17.5999 7.91991C18.2598 8.16903 18.8696 8.53486 19.3999 8.99991H4.68992L2.76992 4.05991C2.71263 3.89933 2.68222 3.73039 2.67992 3.55991C2.67849 3.38756 2.71188 3.2167 2.7781 3.05756C2.84431 2.89843 2.94198 2.75431 3.06524 2.63385C3.18851 2.51338 3.33484 2.41905 3.49545 2.35651C3.65606 2.29398 3.82765 2.26452 3.99992 2.26991V2.26991ZM2.66992 16.4599C2.67563 16.3028 2.706 16.1476 2.75992 15.9999V15.9999L4.68992 10.9999H19.3199C18.8188 11.4613 18.2353 11.8243 17.5999 12.0699V12.0699L4.71992 17.5299H4.57992C4.38887 17.6418 4.17133 17.7005 3.94992 17.6999C3.61801 17.6976 3.29977 17.5674 3.06138 17.3365C2.82298 17.1055 2.68278 16.7916 2.66992 16.4599V16.4599Z"
                      fill="#12499C"
                    />
                  </svg>
                )}
              </>
            ) : (
              <h3 className="text-center">You have been blocked by this user</h3>
            )}
          </>
        )}
      </div>
    );
  };
  const handleDelete = (id) => {
    deleteMessage(id, users);
  };

  const handleAccept = useCallback(
    (data) => {
      jobOffer = {
        offeredPrice: data?.jobOffer?.offeredPrice ? data?.jobOffer?.offeredPrice : "",
        title: data?.jobOffer?.title ? data?.jobOffer?.title : "",
        offerTo: data?.jobOffer?.title ? data?.jobOffer?.title : "",
        offerDays: data?.jobOffer?.offerDays ? data?.jobOffer?.offerDays : 0,
        offerHours: data?.jobOffer?.offerHours ? data?.jobOffer?.offerHours : 0,
        offerStatus: "Accepted",
        jobId: data?.jobId ? data?.jobId : "",
      };
      let newData = {
        jobOffer: jobOffer,
        users: users,
        jobId: data.jobOffer.jobId,
        userId: currentUser?.id,
        isAccepted: true,
        id: data.id,
      }
      if (blockedBy === null) {
        dispatch(
          CustomOfferAccept(newData)
        )
        // updateCustomOffer(data.id, users, jobOffer, currentUser?.id);
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
  const handleDecline = useCallback(
    (data) => {
      jobOffer = {
        offeredPrice: data?.jobOffer?.offeredPrice ? data?.jobOffer?.offeredPrice : "",
        title: data?.jobOffer?.title ? data?.jobOffer?.title : "",
        offerTo: data?.jobOffer?.title ? data?.jobOffer?.title : "",
        offerDays: data?.jobOffer?.offerDays ? data?.jobOffer?.offerDays : 0,
        offerHours: data?.jobOffer?.offerHours ? data?.jobOffer?.offerHours : 0,
        offerStatus: "Rejected",
        jobId: data?.jobId ? data?.jobId : "",
      };
      let newData = {
        jobOffer: jobOffer,
        users: users,
        jobId: data.jobOffer.jobId,
        userId: currentUser?.id,
        isAccepted: false,
        id: data.id,
      }
      if (blockedBy === null) {
        dispatch(
          CustomOfferAccept(newData)
        )
        // updateCustomOffer(data.id, users, jobOffer);
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
  const renderBubble = ({ currentMessage }) => {
    if (currentMessage?.user?._id === currentUser?.id) {
      return (
        <>
          <div className="sendMessage">
            {currentMessage.zoom == true ? (
              <a href={currentMessage?.text} target="_blank">
                <div className="card shadow bg-transparent p-2 cursor-pointer">
                  <Card.Img
                    src={Zoom}
                    alt="Neil Portrait"
                    className="user-avatar rounded-circle"

                  /> <p className="black" style={{color:"white"}}>Join Zoom Meeting</p>
                </div>
              </a>
            ) :
              <p>{currentMessage?.text}</p>
            }
            <span>{moment(currentMessage.createdAt).format("hh:mm a")}</span>
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
        return (
          <div className="customOffer">
            <h3>Job Offer</h3>
            <p>
              {currentMessage?.jobOffer?.title
                ? currentMessage?.jobOffer?.title
                : "Offer Title"}
            </p>
            <p>${currentMessage?.jobOffer?.offeredPrice}</p>
            <p>{moment(currentMessage.createdAt).format("hh:mm a")}</p>
            <div className="customButton justify-content-around d-flex">
              {currentMessage?.jobOffer?.offerStatus === "Pending" ? (
                <>
                  <p
                    onClick={() => {
                      handleAccept(currentMessage);
                    }}
                  >
                    Accept
                  </p>
                  |
                  <p
                    onClick={() => {
                      handleDecline(currentMessage);
                    }}
                  >
                    Decline
                  </p>
                </>
              ) : (
                <p>
                  {currentMessage?.jobOffer?.offerStatus === "Accepted"
                    ? "Accepted"
                    : "Rejected"}
                </p>
              )}
            </div>
          </div>
        );
      } else {
        return (
          <div className="receivedMessage">
            {currentMessage.zoom == true ? (
              <a href={currentMessage?.text} target="_blank">
                <div className="card shadow bg-transparent p-2 cursor-pointer">
                  <Card.Img
                    src={Zoom}
                    alt="Neil Portrait"
                    className="user-avatar rounded-circle"

                  /> <p className="black" style={{color:"black"}}>Join Zoom Meeting</p>
                </div>
              </a>
            ) :
              <p>{currentMessage?.text}</p>
            }
            
            <span>{moment(currentMessage.createdAt).format("hh:mm:a")}</span>
          </div>
        );
      }
    }
  };

  return (
    <GiftedChat
      messages={messages}
      renderBubble={(props) => renderBubble(props)}
      // onSend={(messages) => onSend(messages)}
      user={{
        _id: currentUser?.id,
      }}
      // extraData={messages}
      renderAvatar={null}
      renderInputToolbar={handleInput}
    />
  );
};
export default Chatboard;
