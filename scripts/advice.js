// ?api_key=J8LYtzEbqJ1BnEOpjTa038UNgQgnmrTUt6cj5QmB

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

// const newSlip = getRandomInt(1, 217);

let slip = {};

function addQuote(object) {
  const quote = object;
  // console.log(quote);

  let result = document.querySelector(".result__output");
  result.classList.add("unhide");

  let quoteText = document.createElement("h2");
  quoteText.innerText = quote;
  quoteText.classList.add("result__text");
  quoteText.setAttribute("id", "output");

  result.appendChild(quoteText);
}

const button = document.querySelector(".button");

button.addEventListener("click", showQuote => {
  showQuote.preventDefault();
  var div = document.querySelector(".result__output");
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  let result = axios.get("https://api.adviceslip.com/advice").then(response => {
    let slip = response.data.slip.advice;
    // console.log(response.data.slip.advice);
    addQuote(slip);
  });
});
