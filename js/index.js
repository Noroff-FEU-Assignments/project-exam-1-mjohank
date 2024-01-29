// IMPORTS

import { fetchPosts } from "./api/fetchPosts.js";
import { createPostCards } from "./utility-scripts/createPostCards.js";
import {
  acfFormat,
  baseURL,
  homePageURL,
  quotesPageURL,
} from "./utility-scripts/constants.js";

//FETCH AND DISPLAY LATEST POSTS IN CAROUSEL
async function fetchAndDisplayLatestPosts() {
  const latestPostsContainer = document.querySelector(".latest-posts-carousel");

  try {
    const allPosts = await fetchPosts();
    const latestPosts = allPosts.slice(0, 9);

    createPostCards(latestPosts, latestPostsContainer);
  } catch (error) {
    console.error("Error fetching and displaying latest posts: ", error);
  }
}

//FETCH AND DISPLAY HERO CONTENT
async function fetchAndDisplayHeroContent() {
  try {
    const response = await fetch(homePageURL + acfFormat);
    const homeJSON = await response.json();
    // console.log(homeJSON);

    createHeroContent(homeJSON);
    createWelcomeContent(homeJSON);
  } catch (error) {
    console.log("The following error occured: " + error);
  }
}

//CREATING THE HERO SECTION
function createHeroContent(homeJSON) {
  const heroSection = document.querySelector(".homepage-hero-section");

  heroSection.style.backgroundImage = `url(${homeJSON.acf.homepage_hero_image})`;

  heroSection.innerHTML = `
  <h1 class="main-heading homepage-main-heading">${homeJSON.acf.homepage_hero_heading}</h1>
  `;
}

// CREATING THE WELCOME SECTION
function createWelcomeContent(homeJSON) {
  const welcomeContainer = document.querySelector(".welcome-section");

  welcomeContainer.innerHTML = `
      
    <img
    src="${homeJSON.acf.homepage_profile_image}"
    alt="image of author"
    class="author-img"
  />

  <div class="welcome-txt-container">
          <h2 class="section-heading">Welcome to my blog!</h2>

          <p class="welcome-txt txt">${homeJSON.acf.homepage_profile_text}</p>

          <div class="btn-container rm-btn-cont">
            <a href="about.html" class="read-more-btn btn bs br">Read more></a>
          </div>
        </div>
      
      `;
}

// CREATING THE QUOTES SECTION

// FETCHING AND DISPLAYING QUOTES
async function fetchAndDisplayRandomQuote() {
  try {
    const response = await fetch(quotesPageURL);
    const quoteJSON = await response.json();

    // Extracting quotes from the ACF object
    const quotes = extractQuotes(quoteJSON.acf);

    // Get a random quote
    const randomQuote = getRandomQuote(quotes);

    // Display the quote in the specified container
    displayQuote(randomQuote);
  } catch (error) {
    console.error("Error during fetchAndDisplayRandomQuote:", error);
  }
}

// FUNCTION TO EXTRACT QUOTES FROM THE ACF OBJECT
function extractQuotes(acf) {
  const quotes = [];

  for (let i = 1; i <= 6; i++) {
    const quoteKey = `quote_${i}`;
    if (acf.hasOwnProperty(quoteKey)) {
      quotes.push(acf[quoteKey]);
    }
  }

  return quotes;
}

// FUNCTION TO GET A RANDOM QUOTE FROM THE ARRAY
function getRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// FUNCTION TO DISPLAY QUOTE IN THE CONTAINER
function displayQuote(quote) {
  const quoteContainer = document.querySelector(".quote-section");

  // Check if the container exists
  if (quoteContainer) {
    // Create a paragraph element
    const paragraph = document.createElement("p");
    paragraph.textContent = quote;
    paragraph.classList.add("quote-txt");

    // Append the paragraph to the container
    quoteContainer.innerHTML = "";
    quoteContainer.appendChild(paragraph);
  } else {
    quoteContainer.innerHTML = `
      <p class="quote-txt">“Coffee, the favorite drink of the civilized world” - Thomas Jefferson</p>
    `;
  }
}

// EVENT LISTENER FOR DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", function () {
  fetchAndDisplayRandomQuote();
  fetchAndDisplayLatestPosts();
  fetchAndDisplayHeroContent();
});
