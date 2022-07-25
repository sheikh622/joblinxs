// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBJWt1Yh6AufjxV8B8Y8UVz_25cYV1fvhs",
    authDomain: "joblinxs-9ecf3.firebaseapp.com",
    projectId: "joblinxs-9ecf3",
    storageBucket: "joblinxs-9ecf3.appspot.com",
    messagingSenderId: "152202356320",
    appId: "1:152202356320:web:9ca19a6584e100ab4a8505",
    measurementId: "G-PLE4TBYC7N"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});