//BASE URL
export const baseURL = "https://roasted-reverie.mjohank.no/wp-json/wp/v2/";

//ACF QUERY PARAMETER
export const acfFormat = "?acf_format=standard&per_page=25";

//ALL PAGES ENDPOINT
export const allPagesEndpoint = "pages/";

//HOMEPAGE ENDPOINT
const homepageEndpoint = "232";
export const homePageURL = baseURL + allPagesEndpoint + homepageEndpoint;

//QUOTES PAGE ENDPOINT
const quotesPageEndpoint = "170";
export const quotesPageURL = baseURL + allPagesEndpoint + quotesPageEndpoint;

// POSTS ENDPOINT
const postsEndpoint = "posts/";
export const postsURL = baseURL + postsEndpoint + acfFormat;

// POST COMMENTS ENDPOINT
const commentsEndpoint = "comments/";
export const commentsURL = baseURL + commentsEndpoint;
