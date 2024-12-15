export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очистити попередні зображення

  images.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    const card = document.createElement('div');
    card.classList.add('photo-card');
    
    card.innerHTML = `
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b>${likes}</p>
        <p class="info-item"><b>Views</b>${views}</p>
        <p class="info-item"><b>Comments</b>${comments}</p>
        <p class="info-item"><b>Downloads</b>${downloads}</p>
      </div>
    `;
    gallery.appendChild(card);
  });
}
