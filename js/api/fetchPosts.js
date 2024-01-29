import { postsURL } from "../utility-scripts/constants.js";
import { acfFormat } from "../utility-scripts/constants.js";

//
export async function fetchPosts() {
  try {
    const response = await fetch(postsURL);
    const postsJSON = await response.json();
    // console.log(postsJSON);
    return postsJSON;
  } catch (error) {
    console.log("The following error occured: " + error);
    throw error;
  }
}
