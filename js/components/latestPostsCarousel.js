//
//
// IMPORTS
import { fetchPosts } from "../api/fetchPosts.js";
import { createPostCards } from "../utility-scripts/createPostCards.js";

//CONSTANTS
const carousel = document.querySelector(".track");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
let cardWidth = 366;
let cardsToShow = calculateCardsToShow();
let currentSet = 0;
const totalCards = 9;

//CALCULATING THE NUMBER OF CARDS TO SHOW, BASED ON VIEWPORT WIDTH
function calculateCardsToShow() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 1200) {
    return 3;
  } else if (viewportWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}

// Update the cards to show on window resize
window.addEventListener("resize", () => {
  cardsToShow = calculateCardsToShow();
  updateCarousel();
});

// FETCH AND DISPLAY BLOG POST CARDS IN CAROUSEL
async function fetchAndDisplayCarouselSlides() {
  try {
    const allSlides = await fetchPosts();
    cardsToShow = calculateCardsToShow();

    createPostCards(allSlides, carousel);
  } catch (error) {
    console.log("Følgende feil gjelder; ", error);
  }
}

//UPDATE CAROUSEL BASED ON ARROW CLICK

function updateCarousel() {
  const translateAmount = -(cardWidth * currentSet * cardsToShow);
  carousel.style.transform = `translateX(${translateAmount}px)`;

  // Update arrow visibility based on the current set
  prevArrow.style.visibility = currentSet === 0 ? "hidden" : "visible";
  nextArrow.style.visibility =
    currentSet === Math.ceil(totalCards / cardsToShow) - 1
      ? "hidden"
      : "visible";
}

// EVENT LISTENERS FOR CAROUSEL ARROW NAVIGATION

// next arrow
nextArrow.addEventListener("click", () => {
  if (currentSet < Math.ceil(totalCards / cardsToShow) - 1) {
    currentSet++;
    updateCarousel();
  }
});

// prev arrow
prevArrow.addEventListener("click", () => {
  if (currentSet > 0) {
    currentSet--;
    updateCarousel();
  }
});

// INITIAL CAROUSEL UPDATE
updateCarousel();

export { fetchAndDisplayCarouselSlides };
