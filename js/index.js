// //
// //
// IMPORTS
import { homePageURL, acfFormat } from "./utility-scripts/constants.js";
import { createHeroContent } from "./components/heroSection.js";
import { createWelcomeContent } from "./components/welcomeSection.js";
import { fetchAndDisplayCarouselSlides } from "./components/latestPostsCarousel.js";
import { fetchAndDisplayRandomQuote } from "./components/quotesSection.js";
import { loader } from "./utility-scripts/constants.js";
import { latestPostsSection } from "./utility-scripts/constants.js";
import { errorMessage } from "./components/errorMessage.js";

//CONSTANTS
const homePageErrorContainer = document.querySelector(
  ".homepage-error-container"
);
const heroSection = document.querySelector(".homepage-hero-section");

async function fetchHomePageContent() {
  try {
    const response = await fetch(homePageURL + acfFormat);
    const homeJSON = await response.json();

    loader.innerHTML = "";

    createHeroContent(homeJSON);
    createWelcomeContent(homeJSON);
    fetchAndDisplayCarouselSlides();
    fetchAndDisplayRandomQuote();
  } catch (error) {
    homePageErrorContainer.innerHTML = errorMessage(
      "<p>There was an error fetching content from the API</p>"
    );
    heroSection.style.height = "10rem";
    loader.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", fetchHomePageContent);
