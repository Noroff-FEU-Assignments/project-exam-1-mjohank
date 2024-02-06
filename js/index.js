// //
// //
// IMPORTS
import { homePageURL, acfFormat } from "./utility-scripts/constants.js"; // Adjust path as necessary
import { createHeroContent } from "./components/heroSection.js";
import { createWelcomeContent } from "./components/welcomeSection.js";
import { fetchAndDisplayCarouselSlides } from "./components/latestPostsCarousel.js";
import { fetchAndDisplayRandomQuote } from "./components/quotesSection.js";
import { loader } from "./utility-scripts/constants.js";

async function fetchHomePageContent() {
  try {
    const response = await fetch(homePageURL + acfFormat);
    const homeJSON = await response.json();

    createHeroContent(homeJSON);
    createWelcomeContent(homeJSON);
    fetchAndDisplayCarouselSlides();
    fetchAndDisplayRandomQuote();

    loader.innerHTML = "";
  } catch (error) {
    console.error("Error fetching home page content:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchHomePageContent);
