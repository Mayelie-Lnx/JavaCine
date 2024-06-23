// let myParam = new URLSearchParams(window.location.search);
// let myId = myParam.get("id");
// console.log(myId);

// let APIKEY = "8b04f54f";
// let URL = "http://www.omdbapi.com/?i=" + myId + "&apikey=" + APIKEY;
// function ResultData() {
//   fetch(URL)
//     .then((response) => response.json())
//     .then((Data) => {
//       let ResultMovies = Data;
//       console.log(ResultMovies);

//       let ResultHTML = `<article>
//               <h1>${ResultMovies.Title}</h1>
//               <p>${ResultMovies.Year}</p>
//               <img src="${ResultMovies.Poster}" alt=""></img>
//               <a href="./film.html">selection</a>
//             </article>`;
//       document.getElementById("JavaCineFilm").innerHTML += ResultHTML;

//       let stringResult = JSON.stringify(ResultMovies);
//       console.log(ResultMovies);
//       localStorage.setItem("ResultHTML", stringResult);
//       let ResultHTML = localStorage.getItem("ResultHTML");
//       let userParse = JSON.parse(ResultHTML);
//       console.log(userParse);
//     });
// }
//ResultData();

let myParam = new URLSearchParams(window.location.search);
let myId = myParam.get("id");
console.log(myId);

let APIKEY = "8b04f54f";
let URL = "http://www.omdbapi.com/?i=" + myId + "&apikey=" + APIKEY;

function ResultData() {
  fetch(URL)
    .then((response) => response.json())
    .then((Data) => {
      let ResultMovies = Data;
      console.log(ResultMovies);

      let ResultHTML = `<article>
                <h1>${ResultMovies.Title}</h1>
                <p>${ResultMovies.Year}</p>
                <img src="${ResultMovies.Poster}" alt=""></img>
                <button><a href="./film.html?id=${ResultMovies.imdbID}">Aller voir</a></button>
              </article>`;
      document.getElementById("JavaCineFilm").innerHTML += ResultHTML;

      let stringResult = JSON.stringify(ResultMovies);
      console.log(ResultMovies);
      localStorage.setItem("ResultHTML", stringResult);

      let storedResult = localStorage.getItem("ResultHTML");
      let userParse = JSON.parse(storedResult);
      console.log(userParse);
    })
    .catch((error) => console.error("error", error));
}
ResultData();
