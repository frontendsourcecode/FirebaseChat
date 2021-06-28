import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDPNSTsqPz0km7sG8alWFNkzeNi95HVANQ",
  authDomain: "fir-chat-4b7f9.firebaseapp.com",
  projectId: "fir-chat-4b7f9",
  storageBucket: "fir-chat-4b7f9.appspot.com",
  messagingSenderId: "280145090454",
  appId: "1:280145090454:web:bbca517f574768704aefb7",
  measurementId: "G-G67439YR8N",
  databaseURL: "https://fir-chat-4b7f9-default-rtdb.firebaseio.com/",

};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
