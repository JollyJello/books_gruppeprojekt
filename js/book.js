//https://kea-alt-del.dk/t7/api/products/1165
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
let myUrl = "https://litteratur-ba09.restdb.io/rest/books/" + id;
console.log(myUrl);

fetch(myUrl, {
  method: "get",
  headers: {
    "x-apikey": "63ea8a4e478852088da681d6",
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product.title);
  document.querySelector(".purchaseBox h3").textContent = product.title;
  document.querySelector(".purchaseBox .modelname").textContent = product.author;
  document.querySelector(".purchaseBox .color").textContent = product.basecolor;
  document.querySelector(".purchaseBox .number").textContent = product.id;
  document.querySelector(".purchaseBox p").innerHTML = product.description;
  // document.querySelector(".purchaseBox p").innerHTML = product.recommendation;
  // document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  // document.querySelector(".purchaseBox").textContent = product.articletype;
  document.querySelector(".grid_1_1 img").src = product.image;
  // document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
