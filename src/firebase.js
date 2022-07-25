import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyBJWt1Yh6AufjxV8B8Y8UVz_25cYV1fvhs",
  authDomain: "joblinxs-9ecf3.firebaseapp.com",
  projectId: "joblinxs-9ecf3",
  storageBucket: "joblinxs-9ecf3.appspot.com",
  messagingSenderId: "152202356320",
  appId: "1:152202356320:web:9ca19a6584e100ab4a8505",
  // measurementId: "G-PLE4TBYC7N"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound,setToken) => {
  return getToken(messaging, {vapidKey: 'BIWVyc1TtHMDVmSKY2hGxvTuw0sNROM6a8KzQzMBXeVyo0wqqai1SAinzfEifRWByRtrzrwiZ7Tjh86S4jspvFw'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      setToken(currentToken)
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}
export const onMessageListener = () =>{
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});

}