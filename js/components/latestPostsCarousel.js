//
//
// IMPORTS
import { fetchPosts } from "../api/fetchPosts.js";
import { createPostCards } from "../utility-scripts/createPostCards.js";

//CONSTANTS
const carousel = document.querySelector(".track");
// const carouselWidth = carousel.offsetWidth;
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const cardWidth = 366;
const cardsToShow = 3;
let currentSet = 0;
const totalCards = 9;

// FETCH AND DISPLAY BLOG POST CARDS IN CAROUSEL
async function fetchAndDisplayCarouselSlides() {
  try {
    const allSlides = await fetchPosts();

    createPostCards(allSlides, carousel);
  } catch (error) {
    console.log("Følgende feil gjelder; ", error);
  }
}

//UPDATE CAROUSEL BASED ON ARROW CLICK + U

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
