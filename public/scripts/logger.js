// scripts/logger.js

window.logEvent = function (action, details = "") {
  db.collection("logs").add({
    action,
    details,
    timestamp: firebase.firestore.Timestamp.now(),
    user: auth.currentUser?.email || "guest"
  });
};
