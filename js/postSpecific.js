//IMPORTS
import {
  acfFormat,
  baseURL,
  postsEndpoint,
} from "./utility-scripts/constants.js";
import { formatPostDate } from "./utility-scripts/dateFormatter.js";
import { openModal } from "./components/modal.js";
import { errorMessage } from "./components/errorMessage.js";

//CONSTANTS
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const specificPostId = params.get("id");
const specificPostURL = baseURL + postsEndpoint + specificPostId + acfFormat;
const specificContentContainer = document.querySelector(
  ".specific-content-container"
);

//FETCHING AND DISPLAYING POST CONTENT
async function displaySpecificPost() {
  const specificMainHeading = document.querySelector(".specific-main-heading");

  try {
    const response = await fetch(specificPostURL);
    const specificJSON = await response.json();
    // console.log(specificJSON);

    //UPDATE PAGE TITLE
    document.title = `${specificJSON.title.rendered} | Roasted Reverie`;

    //CREATING PAGE H1
    specificMainHeading.textContent = specificJSON.title.rendered;

    const formattedDate = formatPostDate(specificJSON.date);

    const specificPostHTML = `
    <article class="specific-post-article">
      <div class="specific-meta-bar">

        <a href="posts.html" class="specific-meta-item meta-nav spec-meta-prev txt">  < Back</a>
        
        <h4 class="specific-meta-item txt">POSTED: <span class="posted-date">${formattedDate}</span></h4>

        <a href="#" class="specific-meta-item meta-nav spec-meta-next txt">NEXT POST ></a>
      </div>

      <img src="${specificJSON.acf.post_main_image}" alt="${specificJSON.acf.post_paragraph_6}" class="specific-img" />

      <div class="specific-txt-container">
        <p class="specific-paragraph txt">${specificJSON.acf.post_paragraph_1}</p>        
        <p class="specific-paragraph txt">${specificJSON.acf.post_paragraph_2}</p>        
        <p class="specific-paragraph txt">${specificJSON.acf.post_paragraph_3}</p>        
        <p class="specific-paragraph txt">${specificJSON.acf.post_paragraph_4}</p>
        <a href="posts.html" class="spec-back-btn btn txt">Back to post list</a>
      </div>

      

      
    </article>`;

    specificContentContainer.innerHTML = specificPostHTML;

    const specificImg = document.querySelector(".specific-img");

    // Open the modal when the specific image is clicked
    specificImg.addEventListener("click", () => {
      openModal(specificJSON.acf.post_main_image);
    });
  } catch (error) {
    specificContentContainer.innerHTML = errorMessage(
      "There was an error fetching the post content from the API"
    );
  }
}

displaySpecificPost();
