fetch('https://litteratur-ba09.restdb.io/rest/books?q={"$distinct": "genre"}', {
  method: "get",
  headers: {
    "x-apikey": "63ea8a4e478852088da681d6",
  },
})
  .then((res) => res.json())
  .then(showGenres);

// showGenres(array);

function showGenres(gens) {
  gens.forEach(showGenre);
}

function showGenre(gen) {
  console.log(gen);

  //fanger vores template
  const template = document.querySelector("template").content;
  //cloner
  const clone = template.cloneNode(true);
  //ændrer indhold
  clone.querySelector("a").textContent = gen.genre;
  clone.querySelector("a").href = `productlist.html?genre=${gen.genre}`;
  //appender
  document.querySelector(".grid_1-1 ol").appendChild(clone);
}
