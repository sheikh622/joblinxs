import {
  collection,
  query,
  where,
  doc,
  updateDoc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import createChatId from "./CreateChatId";
import { db } from "../../firebase";
import moment from "moment";

export const fetchMessages = async (users, currentUser) => {
  let chatMessages = [];
  const chatId = createChatId(users);
  const q = query(collection(db, "chats"), where("chatId", "==", chatId));
  const chatSnapshot = onSnapshot(
    q,
    { includeMetadataChanges: true },
    (res) => {
      if (res != null && res.docs.length != 0) {
        const chatRef = collection(db, "chats", chatId, "messages");
        onSnapshot(
          query(chatRef, orderBy("createdAt", "asc")),
          { includeMetadataChanges: true },
          (res) => {
            let msgs = [];
            if (res != null) {
              res.docs.forEach((msg) => {
                if (msg) {
                  const {
                    text,
                    createdAt,
                    user: { name, _id, avatar },
                    file,
                    visibleTo,
                  } = msg.data();

                  let data = {
                    text,
                    docId: msg.id,
                    createdAt: createdAt,
                    visibleTo,
                    user: { name, _id, avatar },
                    file,
                  };
                  if (visibleTo.includes(currentUser.id)) {
                    msgs.push(data);
                  }
                }
              });
              return msgs;
            } else {
              return [];
            }
          }
        );
      } else {
        return [];
      }
    }
  );
  //   return chatMessages;
};

export const deleteMessage = async (docId, users) => {
  const chatId = createChatId(users);
  var docRef = collection(db, "chats", chatId, "messages");
  await deleteDoc(doc(docRef, docId));
};

export const sendMessage = async (
  message,
  users,
  currentUser,
  customKey,
  jobOffer
) => {
  let newMessage;
  if (!customKey) {
    newMessage = {
      text: message.length > 0 ? message[0].text : "",
      createdAt: moment().format(),
      user: {
        _id: currentUser.id,
        name: currentUser.fullName,
        avatar: currentUser.profileImg,
      },
    };
  } else {
    newMessage = {
      offeredPrice: jobOffer?.offeredPrice ? jobOffer?.offeredPrice : "",
      title: jobOffer?.title ? jobOffer?.title : "",
      offerTo: jobOffer?.offerTo ? jobOffer?.offerTo : "",
      offerDate: jobOffer?.offerDate ? jobOffer?.offerDate : "",
      offerStatus: jobOffer?.offerStatus ? jobOffer?.offerStatus : "",
    };
  }
  let exists = false;
  const chatId = createChatId(users);
  const q = query(collection(db, "chats"), where("chatId", "==", chatId));
  const chatSnapshot = await getDocs(q);
  chatSnapshot.forEach(async (document) => {
    if (document.exists) {
      exists = true;
      if (customKey) {
        await updateDoc(doc(db, "chats", chatId, "messages"), {
          offerStatus: jobOffer?.offerStatus ? jobOffer?.offerStatus : "",
        });
      } else {
        await updateDoc(doc(db, "chats", chatId), {
          lastmessage: message,
          visibleTo: users,
        });
        await addDoc(collection(db, "chats", chatId, "messages"), newMessage);
      }
    }
  });
  if (!exists) {
    startNewChat(newMessage, chatId);
  }
};

export const startNewChat = async (message, chatId) => {
  await setDoc(doc(db, "chats", chatId), {
    createdAt: new Date(),
    chatId: chatId,
    lastmessage: message.text,
  });
  await addDoc(collection(db, "chats", chatId, "messages"), message);
};
