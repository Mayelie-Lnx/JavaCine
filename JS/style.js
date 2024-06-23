let myButton = document.getElementById("myBtn");
myButton.addEventListener("click", (event) => {
  event.preventDefault();
  let reqMovie = document.getElementById("myInput").value;
  console.log("Valeur saisie :", reqMovie);
  let APIKEY = "8b04f54f";
  let URL = "http://www.omdbapi.com/?s=" + reqMovie + "&apikey=" + APIKEY;
  function myData() {
    fetch(URL)
      .then((response) => response.json())
      .then((Data) => {
        let MyMovies = Data.Search;
        console.log(MyMovies);
        for (const Movie of MyMovies) {
          let myHTML = `<article>
            <href>
              <a href="./produit.html?id=${Movie.imdbID}">
                <img src="${Movie.Poster}" alt="Poster"></img>
                <div>
                <h1>${Movie.Title}</h1>
                <p>Year : ${Movie.Year}</p>
                </div>
                
              </a>
          </article>`;
          document.getElementById("JavaCine").innerHTML += myHTML;
        }
      })
      .catch((error) => console.error("error", error));
  }
  myData();
});
