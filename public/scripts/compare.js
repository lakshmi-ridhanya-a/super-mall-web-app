// scripts/compare.js

window.compareProducts = function () {
  const product1 = document.getElementById("product1").value.toLowerCase();
  const product2 = document.getElementById("product2").value.toLowerCase();
  const resultDiv = document.getElementById("compareResult");

  if (!product1 || !product2) {
    alert("Please enter both product names");
    return;
  }

  db.collection("offers").get().then(snapshot => {
    let product1Data = [];
    let product2Data = [];

    snapshot.forEach(doc => {
      const offer = doc.data();
      const title = offer.title.toLowerCase();

      if (title.includes(product1)) product1Data.push(offer);
      if (title.includes(product2)) product2Data.push(offer);
    });

    let html = `<h4>${product1} Offers</h4><ul>`;
    product1Data.forEach(o => html += `<li>${o.title} - ${o.discount}</li>`);
    html += `</ul><h4>${product2} Offers</h4><ul>`;
    product2Data.forEach(o => html += `<li>${o.title} - ${o.discount}</li>`);
    html += `</ul>`;

    resultDiv.innerHTML = html;
    logEvent("Compare Products", `${product1} vs ${product2}`);
  });
};
