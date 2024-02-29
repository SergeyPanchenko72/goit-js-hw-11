import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { photosGallery } from './js/pixabay-api';
import { galleryElements } from './js/render-functions';
const formSearch = document.querySelector('.form');
export const inputSearch = document.querySelector('input');
export const loaderForm = document.querySelector('.form-load');
export const gallery = document.querySelector('.gallery');

formSearch.addEventListener('submit', onformSearchSubmit);

function onformSearchSubmit(event) {
  event.preventDefault();
  if (inputSearch.value.trim() === '') {
    return;
  }
  loaderForm.innerHTML = null;
  loaderForm.classList.add('loader');

  photosGallery().then(data => {
    if (data.total === 0) {
      iziToast.error({
        iconUrl: './img/error.svg',
        messageColor: '#ffffff',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        position: 'topRight',
        messageSize: 16,
        layout: 2,
        maxWidth: 380,
        theme: 'dark',
      });
    }
    gallery.innerHTML = galleryElements(data.hits);
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
  });
  inputSearch.value = '';
}
