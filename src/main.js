'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImagesPixaby } from './js/pixabay-api.js';
import {
  renderSearcCard,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import refs from './js/refs.js';
import ButtonService from './js/loadMoreBtn';

const loadMoreBtn = new ButtonService(refs.loadMoreBtn, 'is-hidden');

loadMoreBtn.hide();

const params = {
  q: '',
  page: 1,
  per_page: 15,
  maxPage: 0,
};

refs.searchForm.addEventListener('submit', hendleSearch);

async function hendleSearch(event) {
  event.preventDefault();
  refs.cardBox.innerHTML = "";
  const form = event.currentTarget;
  params.q = form.elements.search.value.toLowerCase().trim(); // Додано trim()

  if (!params.q) {
    // Додана перевірка на пустий інпут
    iziToast.error({
      message: `Please enter the data in the input field`,
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
    loadMoreBtn.hide();
    hideLoader();
    return; // Вихід з функції, якщо інпут пустий
  }

  loadMoreBtn.show();
  loadMoreBtn.disable();
  params.page = 1;

  try {
    showLoader();
    const { total, hits } = await searchImagesPixaby(params);
    params.maxPage = Math.ceil(total / params.per_page);

    if (params.maxPage > 1) {
      loadMoreBtn.enable();
      refs.loadMoreBtn.addEventListener("click", handleLoadMore);
    } else {
      loadMoreBtn.hide();
    }
    if (!hits.length) {
      loadMoreBtn.disable();
      iziToast.error({
        message: `Sorry, there are no images matching<br>your search query. Please try again!`,
        position: "topRight",
        messageColor: "#ffffff",
        backgroundColor: "#EF4040",
      });
      return;
    }

    if (!params.q) {
      loadMoreBtn.hide();
      iziToast.error({
        message: `Please enter the data in the input field`,
        position: "topRight",
        messageColor: "#ffffff",
        backgroundColor: "#EF4040",
      });
      return;
    }

    renderSearcCard(hits);
  } catch (err) {
    iziToast.error({
      message: `${err.message}`,
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
  } finally {
    hideLoader();
    if (params.page === params.maxPage) {
      loadMoreBtn.hide();
      refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
    } else {
      loadMoreBtn.enable();
    }
    form.reset();
  }
}

async function handleLoadMore() {
  loadMoreBtn.disable();
  params.page += 1;

  try {
    showLoader();
    const { hits } = await searchImagesPixaby(params);
    renderSearcCard(hits);

    // Логіка для прокрутки
  } catch (err) {
    iziToast.error({
      message: `${err.message}`,
      position: "topRight",
      messageColor: "#ffffff",
      backgroundColor: "#EF4040",
    });
    loadMoreBtn.hide(); // Додано: ховаємо кнопку при помилці
  } finally {
    hideLoader();
    if (params.page === params.maxPage) {
      iziToast.success({
        message: "We're sorry, but you've reached the end of search results",
        position: "topRight",
      });
      loadMoreBtn.hide(); // Додано: ховаємо кнопку, коли досягнута остання сторінка
    } else {
      loadMoreBtn.enable();
    }
  }
}
