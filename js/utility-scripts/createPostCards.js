export function createPostCards(posts, container) {
  posts.forEach((post) => {
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

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
