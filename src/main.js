import { fetchPhotos } from "./js/pixabay-api.js";
import { showLoader, hideLoader, clearGallery, renderPhotos } from "./js/render-functions.js";

function handleSearch(event) {
  event.preventDefault();
  
  const inputValue = document.querySelector("input[name='search-text']").value.trim();
  if (!inputValue) return;

  clearGallery();
  showLoader();

  fetchPhotos(inputValue)
    .then(photos => {
      hideLoader();
      renderPhotos(photos);
    })
    .catch(() => hideLoader());
}

document.querySelector("form").addEventListener("submit", handleSearch);

