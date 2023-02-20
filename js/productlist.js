const urlParams = new URLSearchParams(window.location.search);
const genre = urlParams.get("genre");
let myUrl;

if (genre == null) {
  myUrl = "https://litteratur-ba09.restdb.io/rest/books";
} else {
  myUrl = `https://litteratur-ba09.restdb.io/rest/books?q={"genre":"${genre}"}`;
}
console.log("myUrl: " + myUrl);
fetch(myUrl, {
  method: "get",
  headers: {
    "x-apikey": "63ea8a4e478852088da681d6",
  },
})
  .then((e) => e.json())
  .then(doSomething);

function doSomething(books) {
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;

  books.forEach((book) => {
    // console.log("book");

    //lav en kopi
    const copy = template.cloneNode(true);
    //ændre indhold

    copy.querySelector("h2").textContent = book.title;
    copy.querySelector("#author").textContent = book.author;
    copy.querySelector("#price").textContent = book.price + ".- kr";
    copy.querySelector("img").src = book.image;
    copy.querySelector("a").href = `book.html?id=${book._id}`;
    document.querySelector(".grid_1-1-1").appendChild(copy);
  });
}
