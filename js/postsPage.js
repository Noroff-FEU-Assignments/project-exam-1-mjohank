// //IMPORTS
// import { fetchPosts } from "./api/fetchPosts.js";
// import { createPostCards } from "./utility-scripts/createPostCards.js";
// import { baseURL, acfFormat, pagination } from "./utility-scripts/constants.js";

// //CONSTANTS
// const bloglistContainer = document.querySelector(".bloglist-container");
// const viewMoreBtn = document.querySelector(".view-more-btn");

// let page = 1; // Initial page

// // FUNCTION TO FETCH AND DISPLAY POSTS AS CARDS IN SETS OF 9
// async function fetchAndDisplayPosts() {
//   try {
//     const posts = await fetchPosts(page);
//     createPostCards(posts, bloglistContainer);

//     // Check if there are more posts, if not inform user
//     if (posts.length < 9) {
//       viewMoreBtn.textContent = "End of Content";
//       viewMoreBtn.disabled = true;
//       viewMoreBtn.style.border = "2px solid var(--clr-main-acc)";
//       viewMoreBtn.style.backgroundColor = "var(--clr-sec-background)";
//     }
//   } catch (error) {
//     console.error("Error fetching and displaying posts: ", error);
//   }
// }

// // Function to handle "View More" button click
// function handleViewMoreClick() {
//   page++;
//   fetchAndDisplayPosts();
// }

// // Event listener for "View More" button click
// viewMoreBtn.addEventListener("click", handleViewMoreClick);

// // Initial fetch and display of posts
// fetchAndDisplayPosts();

/////////////////////////////////////////////////////

//IMPORTS
import { fetchPosts } from "./api/fetchPosts.js";
import { createPostCards } from "./utility-scripts/createPostCards.js";
//CONSTANTS
const bloglistContainer = document.querySelector(".bloglist-container");
const viewMoreBtn = document.querySelector(".view-more-btn");

let page = 1; // Initial page

// FUNCTION TO FETCH AND DISPLAY POSTS AS CARDS IN SETS OF 8 OR 9 BASED ON VIEWPORT WIDTH
async function fetchAndDisplayPosts() {
  try {
    const posts = await fetchPosts(page);
    let displayPosts = [...posts]; // Clone the posts array to manipulate

    // Adjust the number of posts based on viewport width
    if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
      // Assuming you prefer 8 for medium screens to keep rows even
      if (posts.length === 9) {
        displayPosts.pop(); // Remove the last post to make it 8
      } else if (posts.length > 9) {
        // Optionally adjust to 8 or another suitable number for your layout
        displayPosts = posts.slice(0, 8); // Adjust as needed
      }
    }

    createPostCards(displayPosts, bloglistContainer);

    // Checking if there are more posts to be fetched, if not inform user
    if (posts.length < 9) {
      viewMoreBtn.textContent = "End of Content";
      viewMoreBtn.disabled = true;
      viewMoreBtn.style.border = "2px solid var(--clr-main-acc)";
      viewMoreBtn.style.backgroundColor = "var(--clr-sec-background)";
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
