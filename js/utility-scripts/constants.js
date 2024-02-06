//
//
//API RELATED CONSTANTS

//BASE URL
export const baseURL = "https://roasted-reverie.mjohank.no/wp-json/wp/v2/";

//ACF QUERY PARAMETER
export const acfFormat = "?acf_format=standard";

//PAGINATION
export const pagination = "&per_page=9";

//ALL PAGES
export const allPagesEndpoint = "pages/";

//HOMEPAGE
const homepageEndpoint = "232";
export const homePageURL = baseURL + allPagesEndpoint + homepageEndpoint;

//QUOTES PAGE
const quotesPageEndpoint = "170";
export const quotesPageURL = baseURL + allPagesEndpoint + quotesPageEndpoint;

// POSTS
export const postsEndpoint = "posts/";
export const postsURL = baseURL + postsEndpoint + acfFormat + pagination;

// POST COMMENTS
const commentsEndpoint = "comments/";
export const commentsURL = baseURL + commentsEndpoint;

////////////////

//OTHER CONSTANTS

// BLOG POST CARDS
export const allCards = document.querySelectorAll(".post-card");

//LOADER

export const loader = document.querySelector(".loader-container");
