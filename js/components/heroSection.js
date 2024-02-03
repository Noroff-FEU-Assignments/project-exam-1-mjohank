//
//
//CREATING THE HERO SECTION
function createHeroContent(homeJSON) {
  const heroSection = document.querySelector(".homepage-hero-section");
  heroSection.style.backgroundImage = `url(${homeJSON.acf.homepage_hero_image})`;
  heroSection.innerHTML = `
    <h1 class="main-heading homepage-main-heading">${homeJSON.acf.homepage_hero_heading}</h1>
  `;
}

export { createHeroContent };
