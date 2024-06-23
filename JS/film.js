let myParam = new URLSearchParams(window.location.search);
let myId = myParam.get("id");
console.log(myId);

let APIKEY = "8b04f54f";
let URL = "http://www.omdbapi.com/?i=" + myId + "&apikey=" + APIKEY;

function ResultDataNew() {
  fetch(URL)
    .then((response) => response.json())
    .then((Data) => {
      let ResultMoviesNew = Data;
      console.log(ResultMoviesNew);

      let ResultHTMLNew = `<article>
                <h1>${ResultMoviesNew.Title}</h1>
                <div>
                <img src="${ResultMoviesNew.Poster}" alt=""></img>
                <p>${ResultMoviesNew.Plot}</p>
                </div>
              </article>`;
      document.getElementById("JavacineCard").innerHTML += ResultHTMLNew;

      let stringResultNew = JSON.stringify(ResultMoviesNew);
      console.log(ResultMoviesNew);
      localStorage.setItem("ResultHTMLNew", stringResultNew);

      let storedResultNew = localStorage.getItem("ResultHTMLNew");
      let userParseNew = JSON.parse(storedResultNew);
      console.log(userParseNew);
    })
    .catch((error) => console.error("error", error));
}
ResultDataNew();
