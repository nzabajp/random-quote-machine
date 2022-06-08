const colorArr = ["#000000", "#36454F", "#023020", "#301934", "#343434", "#1B1212", "#28282B", "#191970", "#353935"];

const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const button = document.getElementById("new-quote");
const tweet = document.getElementById("tweet-quote");
const twitterBird = document.getElementById("twitter-bird");
const body = document.querySelector("body");
const footer = document.getElementById("footer");

const fetchQuote = () => {
  fetch("https://programming-quotes-api.herokuapp.com/Quotes/random").
  then(function (response) {
    return response.json();
  }).
  then(function (data) {
    const randomNum = Math.floor(Math.random() * 9);
    quoteText.innerHTML = `<h2 style="color: ${colorArr[randomNum]};"><span class="material-symbols-outlined">
format_quote
</span>${data.en}</h2>`;
    quoteAuthor.innerHTML = `<p style="color: ${colorArr[randomNum]};">- ${data.author}</p>`;
    tweet.classList.add = "twitter-share-button";
    tweet.href = `https://twitter.com/intent/tweet?text=${data.en} - ${data.author}`;
    button.style.backgroundColor = colorArr[randomNum];
    twitterBird.style.color = colorArr[randomNum];
    body.style.backgroundColor = colorArr[randomNum];
    footer.style.color = colorArr[randomNum];
  });
};
fetchQuote();

button.addEventListener("click", function () {
  fetchQuote();
});