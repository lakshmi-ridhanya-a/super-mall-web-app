// scripts/category.js

window.addCategory = function () {
  const name = document.getElementById("categoryName").value;

  if (!name) {
    alert("Please enter category name");
    return;
  }

  db.collection("categories").add({
    name,
    createdAt: firebase.firestore.Timestamp.now()
  }).then(() => {
    alert("Category added!");
    logEvent("Add Category", name);
    loadCategories();
  });
};

window.loadCategories = function () {
  const list = document.getElementById("categoryList");
  if (!list) return;

  db.collection("categories").orderBy("name").get().then(snapshot => {
    list.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      const li = document.createElement("li");
      li.textContent = data.name;
      list.appendChild(li);
    });
  });
};
