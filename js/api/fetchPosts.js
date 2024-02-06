//IMPORTS
import {
  baseURL,
  postsEndpoint,
  acfFormat,
  pagination,
} from "../utility-scripts/constants.js";
import { loader } from "../utility-scripts/constants.js";

// CONSTANTS

const carouselArrows = document.querySelector(".carousel-arrow");

//FUNCTION TO FETCH POSTS
export async function fetchPosts(page = 1) {
  try {
    const response = await fetch(
      `${baseURL}${postsEndpoint}${acfFormat}${pagination}&page=${page}`
    );
    const postsJSON = await response.json();
    // console.log(postsJSON);

    loader.innerHTML = "";
    return postsJSON;
  } catch (error) {
    loader.innerHTML = "";
    console.error("Error fetching posts: ", error);
    throw error;
  }
}
