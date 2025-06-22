// scripts/offer.js

window.addOffer = function () {
  const title = document.getElementById("offerTitle").value;
  const shop = document.getElementById("offerShop").value;
  const detail = document.getElementById("offerDetails").value;

  if (!title || !shop || !detail) {
    alert("Please fill all offer fields");
    return;
  }

  db.collection("offers").add({
    title,
    shop,
    detail,
    createdAt: firebase.firestore.Timestamp.now()
  }).then(() => {
    alert("Offer added!");
    logEvent("Add Offer", `${title} for ${shop}`);
    loadOffers();
  });
};

window.loadOffers = function () {
  const list = document.getElementById("offerList");
  if (!list) return;

  db.collection("offers").orderBy("createdAt", "desc").get().then(snapshot => {
    list.innerHTML = "";
    snapshot.forEach(doc => {
      const offer = doc.data();
      const li = document.createElement("li");
      li.textContent = `${offer.title} - ${offer.detail}`;
      list.appendChild(li);
    });
  });
};
