// IMPORTS
import { fetchPosts } from "../api/fetchPosts.js";
import { createPostCards } from "../utility-scripts/createPostCards.js";

//FETCH AND DISPLAY LATEST POSTS IN CAROUSEL
async function fetchAndDisplayLatestPosts() {
  const latestPostsContainer = document.querySelector(".latest-posts-carousel");

  try {
    const allPosts = await fetchPosts();
    const latestPosts = allPosts.slice(0, 9);

    createPostCards(latestPosts, latestPostsContainer);
  } catch (error) {
    console.error("Error fetching and displaying latest posts: ", error);
  }
}

export { fetchAndDisplayLatestPosts };
