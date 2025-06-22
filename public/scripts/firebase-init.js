// scripts/firebase-init.js

const firebaseConfig = {
  apiKey: "AIzaSyC8qjG8XU6pY7tGL9LiBsDV60CB7x83xrc",
  authDomain: "supermall-1db87.firebaseapp.com",
  projectId: "supermall-1db87",
  storageBucket: "supermall-1db87.appspot.com",
  messagingSenderId: "1008275199006",
  appId: "1:1008275199006:web:0a30cbafb84be12e708a0f"
};

firebase.initializeApp(firebaseConfig);

// Expose Firebase services globally
window.firebaseApp = firebase;
window.db = firebase.firestore();
window.auth = firebase.auth();
