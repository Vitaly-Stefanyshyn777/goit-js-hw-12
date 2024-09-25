// 'use strict';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import refs from './refs';

// refs.cardBox.addEventListener('click', event => event.preventDefault());

// function showLoader() {
//   refs.loader.style.display = 'inline-block';
// }

// function hideLoader() {
//   refs.loader.style.display = 'none';
// }

// function renderSearcCard(data) {
//   const createCardCode = data
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => {
//         return `<li class="list-group-item scrol"><div class="search-card">
//    <div class="card-img-box">
//      <a clas="card-link" href="${largeImageURL}"><img class="card-img" src="${webformatURL}" alt="${tags}"></a>
//    </div>
//    <div class="card-box-text">
//      <p class="card-text">Likes<br><span>${likes}</span></p>
//      <p class="card-text">Views<br><span>${views}</span></p>
//      <p class="card-text">Comments<br><span>${comments}</span></p>
//      <p class="card-text">Downloads<br><span>${downloads}</span></p>
//    </div>
// </div></li>`;
//       }
//     )
//     .join('');

//   refs.cardBox.insertAdjacentHTML('beforeend', createCardCode);
//   const gallery = new SimpleLightbox('.card-container a', {
//     captionsData: 'alt',
//     captionDelay: 250,
//     overlayOpacity: 0.9,
//   });
//   gallery.refresh();
// }

// export { renderSearcCard, showLoader, hideLoader };

// render-functions.js
// js/render-functions.js
// js/render-functions.js
// js/render-functions.js
// src/js/render-functions.js
"use strict";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import refs from "./refs.js";
import iziToast from "izitoast"; // Додано імпорт iziToast

refs.cardBox.addEventListener("click", (event) => event.preventDefault());

function showLoader() {
  refs.loader.style.display = "inline-block";
}

function hideLoader() {
  refs.loader.style.display = "none";
}

// src/js/render-functions.js
let imageErrorCount = 0;
const MAX_IMAGE_ERRORS = 10; // Максимальна кількість сповіщень про помилки

function handleImageError(event) {
  if (imageErrorCount < MAX_IMAGE_ERRORS) {
    iziToast.error({
      message: "Image failed to load.",
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
    imageErrorCount++;
  }
  event.target.src = "/fallback.jpg"; // Абсолютний шлях до резервного зображення
}

function renderImageCards(data) {
  const createCardCode = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="list-group-item scrol">
          <div class="search-card">
            <div class="card-img-box">
              <a class="card-link" href="${largeImageURL}">
                <img class="card-img" src="${webformatURL}" alt="${tags}">
              </a>
            </div>
            <div class="card-box-text">
              <p class="card-text">Likes<br><span>${likes}</span></p>
              <p class="card-text">Views<br><span>${views}</span></p>
              <p class="card-text">Comments<br><span>${comments}</span></p>
              <p class="card-text">Downloads<br><span>${downloads}</span></p>
            </div>
          </div>
        </li>`;
      }
    )
    .join("");

  refs.cardBox.insertAdjacentHTML("beforeend", createCardCode);

  // Додамо обробник помилок для всіх нових зображень
  const images = refs.cardBox.querySelectorAll(".card-img");
  images.forEach((img) => {
    img.addEventListener("error", handleImageError);
  });

  const gallery = new SimpleLightbox(".card-container a", {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.9,
  });
  gallery.refresh();
}

export { renderImageCards, showLoader, hideLoader };