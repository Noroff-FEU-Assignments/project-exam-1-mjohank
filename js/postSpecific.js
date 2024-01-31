//IMPORTS
import {
  acfFormat,
  baseURL,
  postsEndpoint,
} from "./utility-scripts/constants.js";

//API RELATED CONSTANTS
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const specificPostId = params.get("id");
const specificPostURL = baseURL + postsEndpoint + specificPostId + acfFormat;

//FETCHING THE SPECIFIC POST
async function displaySpecificPost() {
  const specificContentContainer = document.querySelector(
    ".specific-content-container"
  );
  const specificMainHeading = document.querySelector(".specific-main-heading");

  try {
    const response = await fetch(specificPostURL);
    const specificJSON = await response.json();
    console.log(specificJSON);

    //CREATING PAGE H1
    specificMainHeading.textContent = specificJSON.title.rendered;

    const specificPostHTML = `
    <div class="specific-meta-bar">
      <a href="#" class="specific-meta-item meta-nav txt">  < PREVIOUS POST</a>
      <h4 class="specific-meta-item txt">POSTED: <span class="posted-date">${specificJSON.date}</span></h4>
      <a href="#" class="specific-meta-item meta-nav txt">NEXT POST ></a>
    </div>

    <img src="${specificJSON.acf.post_main_image}" alt="${specificJSON.acf.post_paragraph_6}" class="specific-img" />

    <div class="specific-txt-container">
        <p class="specific-paragraph txt">${specificJSON.acf.post_paragraph_1}</p>        
        <p class="specific-paragraph txt">${specificJSON.acf.post_paragraph_2}</p>        
        <p class="specific-paragraph txt">${specificJSON.acf.post_paragraph_3}</p>        
        <p class="specific-paragraph txt">${specificJSON.acf.post_paragraph_4}</p>        
      </div>`;

    specificContentContainer.innerHTML = specificPostHTML;
  } catch (error) {
    console.log("ka faen? Nå fikk jeg opp dette: ", error);
  }
}

displaySpecificPost();