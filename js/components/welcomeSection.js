//
//
//IMPORTS
import { errorMessage } from "./errorMessage.js";
//CONSTANTS
const welcomeContainer = document.querySelector(".welcome-section");

// CREATING THE WELCOME SECTION
function createWelcomeContent(homeJSON) {
  try {
    welcomeContainer.innerHTML = `
    <img src="${homeJSON.acf.homepage_profile_image}" alt="image of author" class="author-img" />
    <div class="welcome-txt-container">
      <h2 class="section-heading">Welcome to my blog!</h2>
      <p class="welcome-txt txt">${homeJSON.acf.homepage_profile_text}</p>
      <div class="btn-container rm-btn-cont">
        <a href="about.html" class="read-more-btn btn bs br">Read more ></a>
      </div>
    </div>
  `;
  } catch (error) {
    welcomeContainer.innerHTML = errorMessage(
      "There was an error fetching welcome content from the API"
    );
  }
}

export { createWelcomeContent };
