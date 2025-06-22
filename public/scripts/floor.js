// scripts/floor.js

window.addFloor = function () {
  const number = parseInt(document.getElementById("floorNumber").value);
  const purpose = document.getElementById("floorPurpose").value;

  if (isNaN(number) || !purpose) {
    alert("Please fill all floor fields");
    return;
  }

  db.collection("floors").add({
    number,
    purpose,
    createdAt: firebase.firestore.Timestamp.now()
  }).then(() => {
    alert("Floor added!");
    logEvent("Add Floor", `Floor ${number} - ${purpose}`);
    loadFloors();
  });
};

window.loadFloors = function () {
  const list = document.getElementById("floorList");
  if (!list) return;

  db.collection("floors").orderBy("number").get().then(snapshot => {
    list.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      const li = document.createElement("li");
      li.textContent = `Floor ${data.number} - ${data.purpose}`;
      list.appendChild(li);
    });
  });
};
