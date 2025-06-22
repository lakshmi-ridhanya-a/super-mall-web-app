// Ensure Firestore DB is available
const db = firebase.firestore();

// ✅ Add a new shop
window.addShop = function () {
  const name = document.getElementById("shopName").value;
  const location = document.getElementById("location").value;
  const floor = parseInt(document.getElementById("floor").value);
  const category = document.getElementById("category").value;

  if (!name || !location || isNaN(floor) || !category) {
    alert("Please fill all shop fields");
    return;
  }

  db.collection("shops").add({
    name,
    location,
    floor,
    category,
    createdAt: firebase.firestore.Timestamp.now()
  })
  .then(() => {
    alert("Shop added!");
    loadShops();
  })
  .catch(error => {
    alert("Error adding shop: " + error.message);
  });
};

// ✅ Load all shops
window.loadShops = function () {
  const list = document.getElementById("shopList");
  if (!list) {
    console.error("Element with id 'shopList' not found");
    return;
  }

  db.collection("shops").orderBy("createdAt", "desc").get()
    .then(snapshot => {
      list.innerHTML = "";
      snapshot.forEach(doc => {
        const data = doc.data();
        const item = document.createElement("li");
        item.textContent = `${data.name} - ${data.category} - Floor ${data.floor}`;
        list.appendChild(item);
      });
    })
    .catch(err => console.error("Failed to load shops", err));
};

// ✅ Load dropdowns for comparison
window.loadCompareDropdowns = function () {
  db.collection("shops").get().then(snapshot => {
    const shop1 = document.getElementById("compareShop1");
    const shop2 = document.getElementById("compareShop2");

    if (!shop1 || !shop2) return;

    shop1.innerHTML = "<option value=''>Select Shop 1</option>";
    shop2.innerHTML = "<option value=''>Select Shop 2</option>";

    snapshot.forEach(doc => {
      const shop = doc.data();
      const opt1 = document.createElement("option");
      const opt2 = document.createElement("option");
      opt1.value = doc.id;
      opt1.textContent = shop.name;
      opt2.value = doc.id;
      opt2.textContent = shop.name;
      shop1.appendChild(opt1);
      shop2.appendChild(opt2);
    });
  });
};

// ✅ Apply filters
window.applyFilters = function () {
  const search = document.getElementById("searchText").value.toLowerCase();
  const floor = document.getElementById("filterFloor").value;

  db.collection("shops").get().then(snapshot => {
    const list = document.getElementById("shopList");
    if (!list) return;

    list.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      const matchesSearch = data.name.toLowerCase().includes(search) || data.category.toLowerCase().includes(search);
      const matchesFloor = !floor || data.floor == floor;

      if (matchesSearch && matchesFloor) {
        const item = document.createElement("li");
        item.textContent = `${data.name} - ${data.category} - Floor ${data.floor}`;
        list.appendChild(item);
      }
    });
  });
};

// ✅ Add an offer
window.addOffer = function () {
  const shopId = document.getElementById("shopSelect").value;
  const title = document.getElementById("offerTitle").value;
  const discount = document.getElementById("discount").value;
  const validTill = document.getElementById("validTill").value;

  if (!shopId || !title || !discount || !validTill) {
    alert("Please fill all offer fields");
    return;
  }

  db.collection("offers").add({
    shopId,
    title,
    discount,
    validTill,
    createdAt: firebase.firestore.Timestamp.now()
  }).then(() => {
    alert("Offer added!");
    loadOffers();
  });
};

// ✅ Load all offers
window.loadOffers = function () {
  const list = document.getElementById("offerList");
  if (!list) {
    console.warn("offerList not found");
    return;
  }

  db.collection("offers").orderBy("createdAt", "desc").get().then(snapshot => {
    list.innerHTML = "";
    snapshot.forEach(doc => {
      const offer = doc.data();
      const item = document.createElement("li");
      item.textContent = `${offer.title} - ${offer.discount}% off - Valid till ${offer.validTill}`;
      list.appendChild(item);
    });
  });
};

// ✅ Compare offers between 2 shops
window.compareOffers = function () {
  const shop1 = document.getElementById("compareShop1").value;
  const shop2 = document.getElementById("compareShop2").value;

  if (!shop1 || !shop2) {
    alert("Select both shops to compare.");
    return;
  }

  const resultDiv = document.getElementById("compareResult");
  resultDiv.innerHTML = "Loading...";

  db.collection("offers").get().then(snapshot => {
    const offers1 = [];
    const offers2 = [];

    snapshot.forEach(doc => {
      const offer = doc.data();
      if (offer.shopId === shop1) offers1.push(offer);
      if (offer.shopId === shop2) offers2.push(offer);
    });

    let html = `<h4>Shop 1 Offers (${offers1.length})</h4><ul>`;
    offers1.forEach(o => html += `<li>${o.title} - ${o.discount}%</li>`);
    html += `</ul><h4>Shop 2 Offers (${offers2.length})</h4><ul>`;
    offers2.forEach(o => html += `<li>${o.title} - ${o.discount}%</li>`);
    html += `</ul>`;

    resultDiv.innerHTML = html;
  });
};
