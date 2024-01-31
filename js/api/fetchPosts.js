//IMPORTS
import {
  baseURL,
  postsEndpoint,
  acfFormat,
  pagination,
} from "../utility-scripts/constants.js";

//FUNCTION TO FETCH POSTS
export async function fetchPosts(page = 1) {
  try {
    const response = await fetch(
      `${baseURL}${postsEndpoint}${acfFormat}${pagination}&page=${page}`
    );
    const postsJSON = await response.json();
    console.log(postsJSON);
    return postsJSON;
  } catch (error) {
    console.error("Error fetching posts: ", error);
    throw error;
  }
}
