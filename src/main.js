// 'use strict';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import { searchImagesPixaby } from './js/pixabay-api.js';
// import {
//   renderSearcCard,
//   showLoader,
//   hideLoader,
// } from './js/render-functions.js';
// import refs from './js/refs.js';
// import ButtonService from './js/loadMoreBtn';

// const loadMoreBtn = new ButtonService(refs.loadMoreBtn, 'is-hidden');

// loadMoreBtn.hide();

// const params = {
//   q: '',
//   page: 1,
//   per_page: 15,
//   maxPage: 0,
// };

// refs.searchForm.addEventListener('submit', hendleSearch);

// async function hendleSearch(event) {
//   event.preventDefault();
//   refs.cardBox.innerHTML = "";
//   const form = event.currentTarget;
//   params.q = form.elements.search.value.toLowerCase().trim(); // Додано trim()

//   if (!params.q) {
//     // Додана перевірка на пустий інпут
//     iziToast.error({
//       message: `Please enter the data in the input field`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     hideLoader();
//     return; // Вихід з функції, якщо інпут пустий
//   }

//   loadMoreBtn.show();
//   loadMoreBtn.disable();
//   params.page = 1;

//   try {
//     showLoader();
//     const { total, hits } = await searchImagesPixaby(params);
//     params.maxPage = Math.ceil(total / params.per_page);

//     if (params.maxPage > 1) {
//       loadMoreBtn.enable();
//       refs.loadMoreBtn.addEventListener("click", handleLoadMore);
//     } else {
//       loadMoreBtn.hide();
//     }
//     if (!hits.length) {
//       loadMoreBtn.disable();
//       iziToast.error({
//         message: `Sorry, there are no images matching<br>your search query. Please try again!`,
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#EF4040",
//       });
//       return;
//     }

//     if (!params.q) {
//       loadMoreBtn.hide();
//       iziToast.error({
//         message: `Please enter the data in the input field`,
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#EF4040",
//       });
//       return;
//     }

//     renderSearcCard(hits);
//   } catch (err) {
//     iziToast.error({
//       message: `${err.message}`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//   } finally {
//     hideLoader();
//     if (params.page === params.maxPage) {
//       loadMoreBtn.hide();
//       refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
//     } else {
//       loadMoreBtn.enable();
//     }
//     form.reset();
//   }
// }

// async function handleLoadMore() {
//   loadMoreBtn.disable();
//   params.page += 1;

//   try {
//     showLoader();
//     const { hits } = await searchImagesPixaby(params);
//     renderSearcCard(hits);

//     // Логіка для прокрутки
//   } catch (err) {
//     iziToast.error({
//       message: `${err.message}`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide(); // Додано: ховаємо кнопку при помилці
//   } finally {
//     hideLoader();
//     if (params.page === params.maxPage) {
//       iziToast.success({
//         message: "We're sorry, but you've reached the end of search results",
//         position: "topRight",
//       });
//       loadMoreBtn.hide(); // Додано: ховаємо кнопку, коли досягнута остання сторінка
//     } else {
//       loadMoreBtn.enable();
//     }
//   }
// }
// main.js
// main.js
// main.js
// main.js
// src/main.js
"use strict";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImagesPixaby } from "./js/pixabay-api.js";
import {
  renderImageCards,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";
import refs from "./js/refs.js";
import ButtonService from "./js/loadMoreBtn.js"; // Додано розширення .js

const loadMoreBtn = new ButtonService(refs.loadMoreBtn, "is-hidden");

loadMoreBtn.hide();

const params = {
  q: "",
  page: 1,
  per_page: 15,
  maxPage: 0,
};

// Перевірка статусу інтернет-з'єднання
function updateOnlineStatus() {
  if (!navigator.onLine) {
    iziToast.error({
      message: "No internet connection.",
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
    loadMoreBtn.hide();
  }
}

// Слухачі подій для зміни статусу інтернет-з'єднання
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Ініціалізація статусу
updateOnlineStatus();

refs.searchForm.addEventListener("submit", handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  refs.cardBox.innerHTML = "";
  const form = event.currentTarget;
  params.q = form.elements.search.value.toLowerCase().trim();

  // Логування для діагностики
  console.log("Form submitted");
  console.log("Search term:", params.q);

  if (!params.q) {
    iziToast.error({
      message: "Please enter the data in the input field",
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
    loadMoreBtn.hide();
    hideLoader();
    return;
  }

  if (!navigator.onLine) {
    iziToast.error({
      message: "No internet connection.",
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
    loadMoreBtn.hide();
    hideLoader();
    return;
  }

  loadMoreBtn.hide();
  loadMoreBtn.disable();
  params.page = 1;

  try {
    showLoader();
    const { total, hits } = await searchImagesPixaby(params);
    console.log("API Response:", { total, hits });
    params.maxPage = Math.ceil(total / params.per_page);

    if (!hits.length) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
        messageColor: "#ffffff",
        backgroundColor: "#EF4040",
      });
      loadMoreBtn.hide();
      hideLoader();
      return;
    }

    renderImageCards(hits);

    if (params.page < params.maxPage) {
      loadMoreBtn.show();
      loadMoreBtn.enable();
      refs.loadMoreBtn.addEventListener("click", handleLoadMore);
    } else {
      loadMoreBtn.hide();
    }
  } catch (err) {
    loadMoreBtn.hide();
    iziToast.error({
      message: `An error occurred: ${err.message}`,
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

async function handleLoadMore() {
  if (!navigator.onLine) {
    iziToast.error({
      message: "No internet connection.",
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
    loadMoreBtn.hide();
    return;
  }

  loadMoreBtn.disable();

  try {
    showLoader();
    params.page += 1; // Збільшуємо номер сторінки
    const { hits } = await searchImagesPixaby(params);
    console.log("Load More API Response:", hits);

    if (!hits.length) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
      loadMoreBtn.hide();
      refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
      return;
    }

    renderImageCards(hits);
  } catch (err) {
    loadMoreBtn.hide();
    iziToast.error({
      message: `An error occurred: ${err.message}`,
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
  } finally {
    hideLoader();

    if (params.page >= params.maxPage) {
      iziToast.success({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
      loadMoreBtn.hide();
    } else {
      loadMoreBtn.enable();
    }
  }
}