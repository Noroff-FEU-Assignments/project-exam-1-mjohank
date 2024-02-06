//
//

import { errorMessage } from "./errorMessage.js";

//CONSTANTS
const heroContainer = document.querySelector(".homepage-hero-section");

//CREATING THE HERO SECTION
function createHeroContent(homeJSON) {
  try {
    const heroSection = document.querySelector(".homepage-hero-section");
    heroSection.style.backgroundImage = `url(${homeJSON.acf.homepage_hero_image})`;
    heroSection.innerHTML = `
      <h1 class="main-heading homepage-main-heading">${homeJSON.acf.homepage_hero_heading}</h1>
    `;
  } catch (error) {
    heroContainer.innerHTML = errorMessage(
      "An error occurred while fetching hero content:"
    );
  }
}

export { createHeroContent };
