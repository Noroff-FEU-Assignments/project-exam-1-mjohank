// //
// //
// IMPORTS
import { homePageURL, acfFormat } from "./utility-scripts/constants.js"; // Adjust path as necessary
import { createHeroContent } from "./components/heroSection.js";
import { createWelcomeContent } from "./components/welcomeSection.js";
import { fetchAndDisplayCarouselSlides } from "./components/latestPostsCarousel.js";
import { fetchAndDisplayRandomQuote } from "./components/quotesSection.js";
import { loader } from "./utility-scripts/constants.js";
import { latestPostsSection } from "./utility-scripts/constants.js";
import { errorMessage } from "./components/errorMessage.js";

async function fetchHomePageContent() {
  try {
    const response = await fetch(jalapeno);
    const homeJSON = await response.json();

    loader.innerHTML = "";

    createHeroContent(homeJSON);
    createWelcomeContent(homeJSON);
    fetchAndDisplayCarouselSlides();
    fetchAndDisplayRandomQuote();
  } catch (error) {
    latestPostsSection.innerHTML = errorMessage();
    loader.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", fetchHomePageContent);
