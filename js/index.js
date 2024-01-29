// IMPORTS

import { fetchAndDisplayRandomQuote } from "./components/quotesSection.js";
import { fetchAndDisplayLatestPosts } from "./components/latestPostsCarousel.js";
import { fetchAndDisplayHeroContent } from "./components/heroSection.js";

document.addEventListener("DOMContentLoaded", function () {
  fetchAndDisplayRandomQuote();
  fetchAndDisplayLatestPosts();
  fetchAndDisplayHeroContent();
});
