// // src/js/pixabay-api.js
// "use strict";
// import axios from "axios";
// import iziToast from "izitoast"; // Додано імпорт iziToast

// axios.defaults.baseURL = "https://pixabay.com/api";

// const API_KEY = "45109890-d15cee52eedc615dd4ac8bedf"; // Переконайтеся, що API-ключ правильний

// async function searchImagesPixaby({ q, page, per_page }) {
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: q,
//     image_type: "photo",
//     orientation: "horizontal",
//     safesearch: true,
//     page: page,
//     per_page: per_page,
//   });

//   try {
//     const response = await axios.get("?", { params });
//     if (response.status !== 200) {
//       throw new Error(`Server responded with status ${response.status}`);
//     }
//     console.log("API Response Data:", response.data); // Логування даних API
//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       // Сервер відповів з кодом статусу, який не в діапазоні 2xx
//       console.error("Server Response Error:", error.response.data);
//       iziToast.error({
//         message: `Server error: ${error.response.status}`,
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#EF4040",
//       });
//     } else if (error.request) {
//       // Запит був зроблений, але не було відповіді
//       console.error("No response received:", error.request);
//       iziToast.error({
//         message: "No response from server",
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#EF4040",
//       });
//     } else {
//       // Щось інше трапилось при налаштуванні запиту
//       console.error("Error", error.message);
//       iziToast.error({
//         message: `Error: ${error.message}`,
//         position: "topRight",
//         messageColor: "#ffffff",
//         backgroundColor: "#EF4040",
//       });
//     }
//     throw error; // Пропустимо помилку далі
//   }
// }

// export { searchImagesPixaby };
  
  // ------------------------------Спроба-2--------------------------------------------------------------------------------------------------

    // src/js/pixabay-api.js
"use strict";
import axios from "axios";
import iziToast from "izitoast"; // Додано імпорт iziToast

axios.defaults.baseURL = "https://pixabay.com/api";

const API_KEY = "45109890-d15cee52eedc615dd4ac8bedf"; // Переконайтеся, що API-ключ правильний

async function searchImagesPixaby({ q, page, per_page }) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: q,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page,
    per_page: per_page,
  });

  try {
    const response = await axios.get("?", { params });
    if (response.status !== 200) {
      throw new Error(`Server responded with status ${response.status}`);
    }
    console.log("API Response Data:", response.data); // Логування даних API
    return response.data;
  } catch (error) {
    if (error.response) {
      // Сервер відповів з кодом статусу, який не в діапазоні 2xx
      console.error("Server Response Error:", error.response.data);
      iziToast.error({
        message: `Помилка сервера: ${error.response.status}`,
        position: "topRight",
        messageColor: "#ffffff",
        backgroundColor: "#EF4040",
      });
    } else if (error.request) {
      // Запит був зроблений, але не було відповіді
      console.error("No response received:", error.request);
      iziToast.error({
        message: "Не отримано відповіді від сервера.",
        position: "topRight",
        messageColor: "#ffffff",
        backgroundColor: "#EF4040",
      });
    } else {
      // Щось інше трапилось при налаштуванні запиту
      console.error("Error", error.message);
      iziToast.error({
        message: `Помилка: ${error.message}`,
        position: "topRight",
        messageColor: "#ffffff",
        backgroundColor: "#EF4040",
      });
    }
    throw error; // Пропустимо помилку далі
  }
}

export { searchImagesPixaby };