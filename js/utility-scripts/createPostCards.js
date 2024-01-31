//IMPORTS
import { formatPostDate } from "./dateFormatter.js";

//CREATING BLOG POST CARDS
export function createPostCards(posts, container) {
  posts.forEach((post) => {
    const formattedDate = formatPostDate(post.date);

    const postCardHTML = `
      <a href="post-specific.html?id=${post.id}" class="post-card slide bs br">

        <img src="${post.acf.post_thumbnail_image}" alt="${post.acf.post_paragraph_6}" class="post-card-img"/>

        <div class="post-card-meta-container">
          <h3 class="post-card-heading">${post.title.rendered}</h3>
            
          <p class="posted-date txt">Posted: ${formattedDate}</p>
            
        </div>
      </a>
    `;

    container.innerHTML += postCardHTML;
  });
}
