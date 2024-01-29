export function createPostCards(posts, container) {
  posts.forEach((post) => {
    const postCardHTML = `
      <a href="post-specific.html?id=${post.id}" class="post-card slide bs br">

        <img src="${post.acf.post_thumbnail_image}" alt="${post.acf.slug}" class="post-card-img"/>

        <div class="post-card-meta-container">
          <h3 class="post-card-heading">${post.title.rendered}</h3>
          
          <div class="post-txt-date-container txt">
            <div class="category-date-container">
              <p class="post-tag"><span>Category: </span>Coffee type</p>
              
              <p class="posted-date">Posted: ${post.acf.date}</p>
            </div>
          </div>
        </div>
      </a>
    `;

    // Append the generated HTML to the specified container
    container.innerHTML += postCardHTML;
  });
}
