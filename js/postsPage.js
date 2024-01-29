import { fetchPosts } from "./api/fetchPosts.js";
import { createPostCards } from "./utility-scripts/createPostCards.js";
import { baseURL, acfFormat, pagination } from "./utility-scripts/constants.js";

const bloglistContainer = document.querySelector(".bloglist-container");
const viewMoreBtn = document.querySelector(".view-more-btn");

let page = 1; // Initial page

// Function to fetch and display posts
async function fetchAndDisplayPosts() {
  try {
    const posts = await fetchPosts(page);
    createPostCards(posts, bloglistContainer);

    // Check if there are more posts
    if (posts.length < 9) {
      viewMoreBtn.textContent = "End of Content";
      viewMoreBtn.disabled = true;
    }
  } catch (error) {
    console.error("Error fetching and displaying posts: ", error);
  }
}

// Function to handle "View More" button click
function handleViewMoreClick() {
  page++;
  fetchAndDisplayPosts();
}

// Event listener for "View More" button click
viewMoreBtn.addEventListener("click", handleViewMoreClick);

// Initial fetch and display of posts
fetchAndDisplayPosts();
