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

// --------------------------------Спроба-2--------------------------------

// "use strict";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// import { searchImagesPixaby } from "./js/pixabay-api.js";
// import {
//   renderImageCards,
//   showLoader,
//   hideLoader,
// } from "./js/render-functions.js";
// import refs from "./js/refs.js";
// import ButtonService from "./js/loadMoreBtn.js"; // Додано розширення .js

// const loadMoreBtn = new ButtonService(refs.loadMoreBtn, "is-hidden");

// loadMoreBtn.hide();

// const params = {
//   q: "",
//   page: 1,
//   per_page: 15,
//   maxPage: 0,
// };

// // Перевірка статусу інтернет-з'єднання
// function updateOnlineStatus() {
//   if (!navigator.onLine) {
//     iziToast.error({
//       message: "No internet connection.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//   }
// }

// // Слухачі подій для зміни статусу інтернет-з'єднання
// window.addEventListener('online', updateOnlineStatus);
// window.addEventListener('offline', updateOnlineStatus);

// // Ініціалізація статусу
// updateOnlineStatus();

// refs.searchForm.addEventListener("submit", handleSearch);

// async function handleSearch(event) {
//   event.preventDefault();
//   refs.cardBox.innerHTML = "";
//   const form = event.currentTarget;
//   params.q = form.elements.search.value.toLowerCase().trim();

//   // Логування для діагностики
//   console.log("Form submitted");
//   console.log("Search term:", params.q);

//   if (!params.q) {
//     iziToast.error({
//       message: "Please enter the data in the input field",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     hideLoader();
//     return;
//   }

//   if (!navigator.onLine) {
//     iziToast.error({
//       message: "No internet connection.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     hideLoader();
//     return;
//   }

//   loadMoreBtn.hide();
//   loadMoreBtn.disable();
//   params.page = 1;

//   try {
//     showLoader();
//     const { total, hits } = await searchImagesPixaby(params);
//     console.log("API Response:", { total, hits });
//     params.maxPage = Math.ceil(total / params.per_page);

//     if (!hits.length) {
//       iziToast.error({
//         message: "Sorry, there are no images matching your search query. Please try again!",
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#EF4040",
//       });
//       loadMoreBtn.hide();
//       hideLoader();
//       return;
//     }

//     renderImageCards(hits);

//     if (params.page < params.maxPage) {
//       loadMoreBtn.show();
//       loadMoreBtn.enable();
//     refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
//     refs.loadMoreBtn.addEventListener("click", handleLoadMore);
//     } else {
//       loadMoreBtn.hide();
//     }
//   } catch (err) {
//     loadMoreBtn.hide();
//     iziToast.error({
//       message: `An error occurred: ${err.message}`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//   } finally {
//     hideLoader();
//     form.reset();
//   }
// }

// async function handleLoadMore() {
//   if (!navigator.onLine) {
//     iziToast.error({
//       message: "No internet connection.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     return;
//   }

//   loadMoreBtn.disable();

//   try {
//     showLoader();
//     params.page += 1; // Збільшуємо номер сторінки
//     const { hits } = await searchImagesPixaby(params);
//     console.log("Load More API Response:", hits);

//     if (!hits.length) {
//       iziToast.info({
//         message: "We're sorry, but you've reached the end of search results.",
//         position: "topRight",
//       });
//       loadMoreBtn.hide();
//       refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
//       return;
//     }

//     renderImageCards(hits);
//   } catch (err) {
//     loadMoreBtn.hide();
//     iziToast.error({
//       message: `An error occurred: ${err.message}`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//   } finally {
//     hideLoader();

//     if (params.page >= params.maxPage) {
//       iziToast.success({
//         message: "We're sorry, but you've reached the end of search results.",
//         position: "topRight",
//       });
//       loadMoreBtn.hide();
//     } else {
//       loadMoreBtn.enable();
//     }
//   }
// }

// --------------------------------Спроба-3--------------------------------

// // src/main.js
// "use strict";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// import { searchImagesPixaby } from "./js/pixabay-api.js";
// import {
//   renderImageCards,
//   showLoader,
//   hideLoader,
// } from "./js/render-functions.js";
// import refs from "./js/refs.js";
// import ButtonService from "./js/loadMoreBtn.js";
// import SimpleLightbox from "simplelightbox"; // Імпорт SimpleLightbox
// import "simplelightbox/dist/simple-lightbox.min.css"; // Імпорт стилів SimpleLightbox

// let gallery = null; // Глобальна змінна для SimpleLightbox

// const loadMoreBtn = new ButtonService(refs.loadMoreBtn, "is-hidden");

// loadMoreBtn.hide();

// const params = {
//   q: "",
//   page: 1,
//   per_page: 15,
//   maxPage: 0,
// };

// // Функція для оновлення статусу інтернет-з'єднання
// function updateOnlineStatus() {
//   if (navigator.onLine) {
//     iziToast.success({
//       message: "Інтернет-з'єднання відновлено.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#4CAF50",
//     });

//     // Ініціалізуємо SimpleLightbox
//     if (gallery) {
//       gallery.destroy(); // Знищуємо попередню інстанцію
//     }
//     gallery = new SimpleLightbox(".card-container a", {
//       captionsData: "alt",
//       captionDelay: 250,
//       overlayOpacity: 0.9,
//     });

//     // Видаляємо обробники кліків, які були додані при відсутності з'єднання
//     const images = refs.cardBox.querySelectorAll(".card-img");
//     images.forEach((img) => {
//       img.parentElement.removeEventListener("click", handleImageClickWhenOffline);
//     });

//     // Показуємо кнопку "Load More", якщо це потрібно
//     if (params.page < params.maxPage) {
//       loadMoreBtn.show();
//     }
//   } else {
//     iziToast.error({
//       message: "Відсутнє інтернет-з'єднання.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });

//     // Знищуємо SimpleLightbox, щоб він не міг відкривати модальні вікна
//     if (gallery) {
//       gallery.destroy();
//       gallery = null;
//     }

//     // Додаємо обробники кліків до зображень для показу помилки
//     const images = refs.cardBox.querySelectorAll(".card-img");
//     images.forEach((img) => {
//       img.parentElement.addEventListener("click", handleImageClickWhenOffline);
//     });

//     // Ховаємо кнопку "Load More"
//     loadMoreBtn.hide();
//   }
// }

// // Слухачі подій для зміни статусу інтернет-з'єднання
// window.addEventListener('online', updateOnlineStatus);
// window.addEventListener('offline', updateOnlineStatus);

// // Ініціалізуємо статус з'єднання при завантаженні сторінки
// updateOnlineStatus();

// refs.searchForm.addEventListener("submit", handleSearch);

// async function handleSearch(event) {
//   event.preventDefault();
//   refs.cardBox.innerHTML = "";
//   const form = event.currentTarget;
//   params.q = form.elements.search.value.toLowerCase().trim();

//   console.log("Form submitted");
//   console.log("Search term:", params.q);

//   if (!params.q) {
//     iziToast.error({
//       message: "Будь ласка, введіть дані в поле.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     hideLoader();
//     return;
//   }

//   if (!navigator.onLine) {
//     iziToast.error({
//       message: "Відсутнє інтернет-з'єднання.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     hideLoader();
//     return;
//   }

//   loadMoreBtn.hide();
//   loadMoreBtn.disable();
//   params.page = 1;

//   try {
//     showLoader();
//     const { total, hits } = await searchImagesPixaby(params);
//     console.log("API Response:", { total, hits });
//     params.maxPage = Math.ceil(total / params.per_page);

//     if (!hits.length) {
//       iziToast.error({
//         message: "На жаль, не знайдено зображень за вашим запитом. Спробуйте інше!",
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#EF4040",
//       });
//       loadMoreBtn.hide();
//       hideLoader();
//       return;
//     }

//     renderImageCards(hits);

//     if (params.page < params.maxPage) {
//       loadMoreBtn.show();
//       loadMoreBtn.enable();
//       refs.loadMoreBtn.addEventListener("click", handleLoadMore);
//     } else {
//       loadMoreBtn.hide();
//     }
//   } catch (err) {
//     loadMoreBtn.hide();
//     iziToast.error({
//       message: `Сталася помилка: ${err.message}`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//   } finally {
//     hideLoader();
//     form.reset();
//   }
// }

// async function handleLoadMore() {
//   if (!navigator.onLine) {
//     iziToast.error({
//       message: "Відсутнє інтернет-з'єднання.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     return;
//   }

//   loadMoreBtn.disable();

//   try {
//     showLoader();
//     params.page += 1; // Збільшуємо номер сторінки
//     const { hits } = await searchImagesPixaby(params);
//     console.log("Load More API Response:", hits);

//     if (!hits.length) {
//       iziToast.info({
//         message: "Ви досягли кінця результатів пошуку.",
//         position: "topRight",
//       });
//       loadMoreBtn.hide();
//       refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
//       return;
//     }

//     renderImageCards(hits);
//   } catch (err) {
//     loadMoreBtn.hide();
//     iziToast.error({
//       message: `Сталася помилка: ${err.message}`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//   } finally {
//     hideLoader();

//     if (params.page >= params.maxPage) {
//       iziToast.success({
//         message: "Ви досягли кінця результатів пошуку.",
//         position: "topRight",
//       });
//       loadMoreBtn.hide();
//     } else {
//       loadMoreBtn.enable();
//     }
//   }
// }

// function handleImageClickWhenOffline(event) {
//   event.preventDefault(); // Запобігаємо стандартній поведінці

//   iziToast.error({
//     message: "Не вдалося відкрити зображення. Відсутнє інтернет-з'єднання.",
//     position: "topRight",
//     messageColor: "#ffffff",
//     backgroundColor: "#EF4040",
//   });
// }

// ---------------------------------Спроба-4---------------------------------------------

// // src/main.js
// "use strict";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// import { searchImagesPixaby } from "./js/pixabay-api.js";
// import {
//   renderImageCards,
//   showLoader,
//   hideLoader,
// } from "./js/render-functions.js";
// import refs from "./js/refs.js";
// import ButtonService from "./js/loadMoreBtn.js";
// import SimpleLightbox from "simplelightbox"; // Імпорт SimpleLightbox
// import "simplelightbox/dist/simple-lightbox.min.css"; // Імпорт стилів SimpleLightbox

// let gallery = null; // Глобальна змінна для SimpleLightbox
// const loadMoreBtn = new ButtonService(refs.loadMoreBtn, "is-hidden");
// loadMoreBtn.hide();

// const params = {
//   q: "",
//   page: 1,
//   per_page: 15,
//   maxPage: 0,
// };

// let isFirstLoad = true; // Флаг для відстеження першого завантаження

// // Функція для оновлення статусу інтернет-з'єднання
// function updateOnlineStatus() {
//   if (navigator.onLine) {
//     if (!isFirstLoad) { // Показувати сповіщення лише після першого завантаження
//       iziToast.success({
//         message: "Інтернет-з'єднання відновлено.",
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#4CAF50",
//       });
//     }

//     // Ініціалізуємо SimpleLightbox
//     if (gallery) {
//       gallery.destroy(); // Знищуємо попередню інстанцію
//     }
//     gallery = new SimpleLightbox(".card-container a", {
//       captionsData: "alt",
//       captionDelay: 250,
//       overlayOpacity: 0.9,
//     });

//     // Видаляємо обробники кліків, які були додані при відсутності з'єднання
//     const images = refs.cardBox.querySelectorAll(".card-img");
//     images.forEach((img) => {
//       img.parentElement.removeEventListener("click", handleImageClickWhenOffline);
//     });

//     // Показуємо кнопку "Load More", якщо це потрібно
//     if (params.page < params.maxPage) {
//       loadMoreBtn.show();
//     }
//   } else {
//     iziToast.error({
//       message: "Відсутнє інтернет-з'єднання.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });

//     // Знищуємо SimpleLightbox, щоб він не міг відкривати модальні вікна
//     if (gallery) {
//       gallery.destroy();
//       gallery = null;
//     }

//     // Додаємо обробники кліків до зображень для показу помилки
//     const images = refs.cardBox.querySelectorAll(".card-img");
//     images.forEach((img) => {
//       img.parentElement.addEventListener("click", handleImageClickWhenOffline);
//     });

//     // Ховаємо кнопку "Load More"
//     loadMoreBtn.hide();
//   }

//   if (isFirstLoad) {
//     isFirstLoad = false; // Встановлюємо флаг після першого запуску
//   }
// }

// // Слухачі подій для зміни статусу інтернет-з'єднання
// window.addEventListener("online", updateOnlineStatus);
// window.addEventListener("offline", updateOnlineStatus);

// // Ініціалізуємо статус з'єднання при завантаженні сторінки
// updateOnlineStatus();

// refs.searchForm.addEventListener("submit", handleSearch);

// async function handleSearch(event) {
//   event.preventDefault();
//   refs.cardBox.innerHTML = "";
//   const form = event.currentTarget;
//   params.q = form.elements.search.value.toLowerCase().trim();

//   console.log("Form submitted");
//   console.log("Search term:", params.q);

//   if (!params.q) {
//     iziToast.error({
//       message: "Будь ласка, введіть дані в поле.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     hideLoader();
//     return;
//   }

//   if (!navigator.onLine) {
//     iziToast.error({
//       message: "Відсутнє інтернет-з'єднання.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     hideLoader();
//     return;
//   }

//   loadMoreBtn.hide();
//   loadMoreBtn.disable();
//   params.page = 1;

//   try {
//     showLoader();
//     const { total, hits } = await searchImagesPixaby(params);
//     console.log("API Response:", { total, hits });
//     params.maxPage = Math.ceil(total / params.per_page);

//     if (!hits.length) {
//       iziToast.error({
//         message: "На жаль, не знайдено зображень за вашим запитом. Спробуйте інше!",
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#EF4040",
//       });
//       loadMoreBtn.hide();
//       hideLoader();
//       return;
//     }

//     renderImageCards(hits);

//     if (params.page < params.maxPage) {
//       loadMoreBtn.show();
//       loadMoreBtn.enable();
//       refs.loadMoreBtn.addEventListener("click", handleLoadMore);
//     } else {
//       loadMoreBtn.hide();
//     }
//   } catch (err) {
//     loadMoreBtn.hide();
//     iziToast.error({
//       message: `Сталася помилка: ${err.message}`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//   } finally {
//     hideLoader();
//     form.reset();
//   }
// }

// async function handleLoadMore() {
//   if (!navigator.onLine) {
//     iziToast.error({
//       message: "Відсутнє інтернет-з'єднання.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     return;
//   }

//   loadMoreBtn.disable();

//   try {
//     showLoader();
//     params.page += 1; // Збільшуємо номер сторінки
//     const { hits } = await searchImagesPixaby(params);
//     console.log("Load More API Response:", hits);

//     if (!hits.length) {
//       iziToast.info({
//         message: "Ви досягли кінця результатів пошуку.",
//         position: "topRight",
//       });
//       loadMoreBtn.hide();
//       refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
//       return;
//     }

//     renderImageCards(hits);
//   } catch (err) {
//     loadMoreBtn.hide();
//     iziToast.error({
//       message: `Сталася помилка: ${err.message}`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//   } finally {
//     hideLoader();

//     if (params.page >= params.maxPage) {
//       iziToast.success({
//         message: "Ви досягли кінця результатів пошуку.",
//         position: "topRight",
//       });
//       loadMoreBtn.hide();
//     } else {
//       loadMoreBtn.enable();
//     }
//   }
// }

// function handleImageClickWhenOffline(event) {
//   event.preventDefault(); // Запобігаємо стандартній поведінці

//   iziToast.error({
//     message: "Не вдалося відкрити зображення. Відсутнє інтернет-з'єднання.",
//     position: "topRight",
//     messageColor: "#ffffff",
//     backgroundColor: "#EF4040",
//   });
// }

// ------------------------------Спроба-5-близько-до-ідеалу----------------------------------------------------------------------------------------------

// // src/main.js
// "use strict";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// import { searchImagesPixaby } from "./js/pixabay-api.js";
// import {
//   renderImageCards,
//   showLoader,
//   hideLoader,
// } from "./js/render-functions.js";
// import refs from "./js/refs.js";
// import ButtonService from "./js/loadMoreBtn.js";
// import SimpleLightbox from "simplelightbox"; // Імпорт SimpleLightbox
// import "simplelightbox/dist/simple-lightbox.min.css"; // Імпорт стилів SimpleLightbox

// let gallery = null; // Глобальна змінна для SimpleLightbox
// const loadMoreBtn = new ButtonService(refs.loadMoreBtn, "is-hidden");
// loadMoreBtn.hide();

// const params = {
//   q: "",
//   page: 1,
//   per_page: 15,
//   maxPage: 0,
// };

// let isFirstLoad = true; // Флаг для відстеження першого завантаження

// // Функція для оновлення статусу інтернет-з'єднання
// function updateOnlineStatus() {
//   if (navigator.onLine) {
//     if (!isFirstLoad) { // Показувати сповіщення лише після першого завантаження
//       iziToast.success({
//         message: "Інтернет-з'єднання відновлено.",
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#4CAF50",
//       });
//     }

//     // Ініціалізуємо SimpleLightbox після рендеру зображень
//     if (gallery) {
//       gallery.refresh(); // Оновлюємо SimpleLightbox
//     } else {
//       gallery = new SimpleLightbox(".card-container a", {
//         captionsData: "alt",
//         captionDelay: 250,
//         overlayOpacity: 0.9,
//       });
//     }

//     // Видаляємо обробники кліків, які були додані при відсутності з'єднання
//     const images = refs.cardBox.querySelectorAll(".card-img");
//     images.forEach((img) => {
//       img.parentElement.removeEventListener("click", handleImageClickWhenOffline);
//     });

//     // Показуємо кнопку "Load More", якщо це потрібно
//     if (params.page < params.maxPage) {
//       loadMoreBtn.show();
//     }
//   } else {
//     iziToast.error({
//       message: "Відсутнє інтернет-з'єднання.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });

//     // Знищуємо SimpleLightbox, щоб він не міг відкривати модальні вікна
//     if (gallery) {
//       gallery.destroy();
//       gallery = null;
//     }

//     // Додаємо обробники кліків до зображень для показу помилки
//     const images = refs.cardBox.querySelectorAll(".card-img");
//     images.forEach((img) => {
//       img.parentElement.addEventListener("click", handleImageClickWhenOffline);
//     });

//     // Ховаємо кнопку "Load More"
//     loadMoreBtn.hide();
//   }

//   if (isFirstLoad) {
//     isFirstLoad = false; // Встановлюємо флаг після першого запуску
//   }
// }

// // Слухачі подій для зміни статусу інтернет-з'єднання
// window.addEventListener("online", updateOnlineStatus);
// window.addEventListener("offline", updateOnlineStatus);

// // Ініціалізуємо статус з'єднання при завантаженні сторінки
// updateOnlineStatus();

// refs.searchForm.addEventListener("submit", handleSearch);

// async function handleSearch(event) {
//   event.preventDefault();
//   refs.cardBox.innerHTML = "";
//   const form = event.currentTarget;
//   params.q = form.elements.search.value.toLowerCase().trim();

//   console.log("Form submitted");
//   console.log("Search term:", params.q);

//   if (!params.q) {
//     iziToast.error({
//       message: "Будь ласка, введіть дані в поле.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     hideLoader();
//     return;
//   }

//   if (!navigator.onLine) {
//     iziToast.error({
//       message: "Відсутнє інтернет-з'єднання.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     hideLoader();
//     return;
//   }

//   loadMoreBtn.hide();
//   loadMoreBtn.disable();
//   params.page = 1;

//   try {
//     showLoader();
//     const { total, hits } = await searchImagesPixaby(params);
//     console.log("API Response:", { total, hits });
//     params.maxPage = Math.ceil(total / params.per_page);

//     if (!hits.length) {
//       iziToast.error({
//         message: "На жаль, не знайдено зображень за вашим запитом. Спробуйте інше!",
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#EF4040",
//       });
//       loadMoreBtn.hide();
//       hideLoader();
//       return;
//     }

//     renderImageCards(hits);

//     if (navigator.onLine) { // Якщо онлайн, ініціалізувати або оновити SimpleLightbox
//       if (gallery) {
//         gallery.refresh();
//       } else {
//         gallery = new SimpleLightbox(".card-container a", {
//           captionsData: "alt",
//           captionDelay: 250,
//           overlayOpacity: 0.9,
//         });
//       }
//     }

//     if (params.page < params.maxPage) {
//       loadMoreBtn.show();
//       loadMoreBtn.enable();
//       refs.loadMoreBtn.addEventListener("click", handleLoadMore);
//     } else {
//       loadMoreBtn.hide();
//     }
//   } catch (err) {
//     loadMoreBtn.hide();
//     iziToast.error({
//       message: `Сталася помилка: ${err.message}`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//   } finally {
//     hideLoader();
//     form.reset();
//   }
// }

// async function handleLoadMore() {
//   if (!navigator.onLine) {
//     iziToast.error({
//       message: "Відсутнє інтернет-з'єднання.",
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//     loadMoreBtn.hide();
//     return;
//   }

//   loadMoreBtn.disable();

//   try {
//     showLoader();
//     params.page += 1; // Збільшуємо номер сторінки
//     const { hits } = await searchImagesPixaby(params);
//     console.log("Load More API Response:", hits);

//     if (!hits.length) {
//       iziToast.info({
//         message: "Ви досягли кінця результатів пошуку.",
//         position: "topRight",
//       });
//       loadMoreBtn.hide();
//       refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
//       return;
//     }

//     renderImageCards(hits);

//     if (navigator.onLine) { // Якщо онлайн, ініціалізувати або оновити SimpleLightbox
//       if (gallery) {
//         gallery.refresh();
//       } else {
//         gallery = new SimpleLightbox(".card-container a", {
//           captionsData: "alt",
//           captionDelay: 250,
//           overlayOpacity: 0.9,
//         });
//       }
//     }

//   } catch (err) {
//     loadMoreBtn.hide();
//     iziToast.error({
//       message: `Сталася помилка: ${err.message}`,
//       position: "topRight",
//       messageColor: "#ffffff",
//       backgroundColor: "#EF4040",
//     });
//   } finally {
//     hideLoader();

//     if (params.page >= params.maxPage) {
//       iziToast.success({
//         message: "Ви досягли кінця результатів пошуку.",
//         position: "topRight",
//       });
//       loadMoreBtn.hide();
//     } else {
//       loadMoreBtn.enable();
//     }
//   }
// }

// function handleImageClickWhenOffline(event) {
//   event.preventDefault(); // Запобігаємо стандартній поведінці

//   iziToast.error({
//     message: "Не вдалося відкрити зображення. Відсутнє інтернет-з'єднання.",
//     position: "topRight",
//     messageColor: "#ffffff",
//     backgroundColor: "#EF4040",
//   });
// }

// -----------------------Спроба-6-----------------------------------------
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
import ButtonService from "./js/loadMoreBtn.js";
import SimpleLightbox from "simplelightbox"; // Імпорт SimpleLightbox
import "simplelightbox/dist/simple-lightbox.min.css"; // Імпорт стилів SimpleLightbox

let gallery = null; // Глобальна змінна для SimpleLightbox
const loadMoreBtn = new ButtonService(refs.loadMoreBtn, "is-hidden");
loadMoreBtn.hide();

const params = {
  q: "",
  page: 1,
  per_page: 15,
  maxPage: 0,
};

let isFirstLoad = true; // Флаг для відстеження першого завантаження

// Функція для оновлення статусу інтернет-з'єднання
function updateOnlineStatus() {
  if (navigator.onLine) {
    if (!isFirstLoad) { // Показувати сповіщення лише після першого завантаження
      iziToast.success({
        message: "Інтернет-з'єднання відновлено.",
        position: "topRight",
        messageColor: "#ffffff",
        backgroundColor: "#4CAF50",
      });
    }

    // Ініціалізуємо SimpleLightbox після рендеру зображень
    if (gallery) {
      gallery.refresh(); // Оновлюємо SimpleLightbox
    } else {
      gallery = new SimpleLightbox(".card-container a", {
        captionsData: "alt",
        captionDelay: 250,
        overlayOpacity: 0.9,
      });
    }

    // Видаляємо обробники кліків, які були додані при відсутності з'єднання
    const images = refs.cardBox.querySelectorAll(".card-img");
    images.forEach((img) => {
      img.parentElement.removeEventListener("click", handleImageClickWhenOffline);
    });

    // Показуємо кнопку "Load More", якщо це потрібно і params.maxPage більше 0
    if (params.maxPage > 0 && params.page < params.maxPage) {
      loadMoreBtn.show();
    }
  } else {
    iziToast.error({
      message: "Відсутнє інтернет-з'єднання.",
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });

    // Знищуємо SimpleLightbox, щоб він не міг відкривати модальні вікна
    if (gallery) {
      gallery.destroy();
      gallery = null;
    }

    // Додаємо обробники кліків до зображень для показу помилки
    const images = refs.cardBox.querySelectorAll(".card-img");
    images.forEach((img) => {
      img.parentElement.addEventListener("click", handleImageClickWhenOffline);
    });

    // Ховаємо кнопку "Load More"
    loadMoreBtn.hide();
  }

  if (isFirstLoad) {
    isFirstLoad = false; // Встановлюємо флаг після першого запуску
  }
}

// Слухачі подій для зміни статусу інтернет-з'єднання
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

// Ініціалізуємо статус з'єднання при завантаженні сторінки
updateOnlineStatus();

refs.searchForm.addEventListener("submit", handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  refs.cardBox.innerHTML = "";
  const form = event.currentTarget;
  params.q = form.elements.search.value.toLowerCase().trim();

  console.log("Form submitted");
  console.log("Search term:", params.q);

  if (!params.q) {
    iziToast.error({
      message: "Будь ласка, введіть дані в поле.",
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
    loadMoreBtn.hide();
    hideLoader();
    
    // Скидаємо параметри пошуку
    params.page = 1;
    params.maxPage = 0;
    return;
  }

  if (!navigator.onLine) {
    iziToast.error({
      message: "Відсутнє інтернет-з'єднання.",
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
        message: "На жаль, не знайдено зображень за вашим запитом. Спробуйте інше!",
        position: "topRight",
        messageColor: "#ffffff",
        backgroundColor: "#EF4040",
      });
      loadMoreBtn.hide();
      hideLoader();
      return;
    }

    renderImageCards(hits);

    if (navigator.onLine) { // Якщо онлайн, ініціалізувати або оновити SimpleLightbox
      if (gallery) {
        gallery.refresh();
      } else {
        gallery = new SimpleLightbox(".card-container a", {
          captionsData: "alt",
          captionDelay: 250,
          overlayOpacity: 0.9,
        });
      }
    }

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
      message: `Сталася помилка: ${err.message}`,
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
      message: "Відсутнє інтернет-з'єднання.",
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
        message: "Ви досягли кінця результатів пошуку.",
        position: "topRight",
      });
      loadMoreBtn.hide();
      refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
      return;
    }

    renderImageCards(hits);

    if (navigator.onLine) { // Якщо онлайн, ініціалізувати або оновити SimpleLightbox
      if (gallery) {
        gallery.refresh();
      } else {
        gallery = new SimpleLightbox(".card-container a", {
          captionsData: "alt",
          captionDelay: 250,
          overlayOpacity: 0.9,
        });
      }
    }

    if (params.page < params.maxPage) {
      loadMoreBtn.show();
      loadMoreBtn.enable();
    } else {
      loadMoreBtn.hide();
    }
  } catch (err) {
    loadMoreBtn.hide();
    iziToast.error({
      message: `Сталася помилка: ${err.message}`,
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
  } finally {
    hideLoader();
  }
}

function handleImageClickWhenOffline(event) {
  event.preventDefault(); // Запобігаємо стандартній поведінці

  iziToast.error({
    message: "Не вдалося відкрити зображення. Відсутнє інтернет-з'єднання.",
    position: "topRight",
    messageColor: "#ffffff",
    backgroundColor: "#EF4040",
  });
}