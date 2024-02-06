//
//
//IMPORTS
import { fetchPosts } from "./api/fetchPosts.js";
import { errorMessage } from "./components/errorMessage.js";
import { createPostCards } from "./utility-scripts/createPostCards.js";
import { loader } from "./utility-scripts/constants.js";

//CONSTANTS
const bloglistContainer = document.querySelector(".bloglist-container");
const blogListErrorContainer = document.querySelector(
  ".bloglist-error-container"
);
const viewMoreBtn = document.querySelector(".view-more-btn");

let page = 1; // Initial page

// FUNCTION TO FETCH AND DISPLAY POSTS AS CARDS IN SETS OF 8 OR 9 BASED ON VIEWPORT WIDTH
async function fetchAndDisplayPosts() {
  try {
    const posts = await fetchPosts(page);
    let displayPosts = [...posts]; // Cloning the posts array to manipulate

    // Accounting for "grid-template-columns: repeat(2, 1fr)" on medium size viewports"
    if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
      if (posts.length === 9) {
        displayPosts.pop(); // Removing the last post to make the number of posts even
      } else if (posts.length > 9) {
        displayPosts = posts.slice(0, 8); // Adjust as needed
      }
    }

    createPostCards(displayPosts, bloglistContainer);
    loader.innerHTML = "";

    // Checking if there are more posts to be fetched, if not inform user
    if (posts.length < 9) {
      viewMoreBtn.textContent = "End of Content";
      viewMoreBtn.disabled = true;
      viewMoreBtn.style.border = "2px solid var(--clr-main-acc)";
      viewMoreBtn.style.backgroundColor = "var(--clr-sec-background)";
    }
  } catch (error) {
    blogListErrorContainer.innerHTML = errorMessage(
      "<p>There was an error fetching the posts from the API</p>"
    );
    loader.innerHTML = "";
  }
}

// Handling "View More" button click
function handleViewMoreClick() {
  page++;
  fetchAndDisplayPosts();
}

// Event listener for "View More" button click
viewMoreBtn.addEventListener("click", handleViewMoreClick);

// Initial fetch and display of posts
fetchAndDisplayPosts();
