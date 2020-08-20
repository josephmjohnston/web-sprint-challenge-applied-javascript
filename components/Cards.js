// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then(response => {
    response.data.articles["javascript"].forEach(article => {
      let newCard = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      container.appendChild(newCard);
    });
    response.data.articles["bootstrap"].forEach(article => {
      let newCard = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      container.appendChild(newCard);
    });
    response.data.articles["technology"].forEach(article => {
      let newCard = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      container.appendChild(newCard);
    });
    response.data.articles["jquery"].forEach(article => {
      let newCard = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      container.appendChild(newCard);
    });
    response.data.articles["node"].forEach(article => {
      let newCard = Card(
        article.headline,
        article.authorPhoto,
        article.authorName
      );
      container.appendChild(newCard);
    });
    console.log(response.data);
  });

let container = document.querySelector(".cards-container");
function Card(headline, imgUrl, authorsName) {
  let cardContainer = document.createElement("div");
  let headlineDiv = document.createElement("div");
  let authorDiv = document.createElement("div");
  let imgContainer = document.createElement("div");
  let img = document.createElement("img");
  let span = document.createElement("span");

  cardContainer.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainer.classList.add("img-container");

  cardContainer.appendChild(headlineDiv);
  cardContainer.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorDiv.appendChild(span);

  headlineDiv.textContent = headline;
  img.src = imgUrl;
  span.textContent = authorsName;

  return cardContainer;
}