//IMPORTS
import { homePageURL, acfFormat } from "../utility-scripts/constants.js";
import { createWelcomeContent } from "./welcomeSection.js";

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

export { fetchAndDisplayHeroContent };
