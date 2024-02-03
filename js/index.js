//
//
// IMPORTS

import { fetchAndDisplayHeroContent } from "./components/heroSection.js";
import { fetchAndDisplayCarouselSlides } from "./components/latestPostsCarousel.js";
import { fetchAndDisplayRandomQuote } from "./components/quotesSection.js";

document.addEventListener("DOMContentLoaded", function () {
  fetchAndDisplayHeroContent();
  fetchAndDisplayCarouselSlides();
  fetchAndDisplayRandomQuote();
});
