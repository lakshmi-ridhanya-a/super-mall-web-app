// Firebase configuration
document.addEventListener("DOMContentLoaded", function () {
const firebaseConfig = {
 apiKey: "AIzaSyC8qjG8XU6pY7tGL9LiBsDV60CB7x83xrc",
  authDomain: "supermall-1db87.firebaseapp.com",
  projectId: "supermall-1db87",
  storageBucket: "supermall-1db87.firebasestorage.app",
  messagingSenderId: "1008275199006",
  appId: "1:1008275199006:web:0a30cbafb84be12e708a0f"
};

 firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  window.login = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Login successful!");
        window.location.href = "dashboard.html";
      })
      .catch(error => {
        alert("Login failed: " + error.message);
      });
  };

  window.register = function () {
    const email = prompt("Enter email:");
    const password = prompt("Enter password:");

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Registration successful!");
      })
      .catch(error => {
        alert("Registration failed: " + error.message);
      });
  };
});