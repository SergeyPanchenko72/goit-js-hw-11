import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getsGalleryImg } from './js/pixabay-api';
import { galleryElements } from './js/render-functions';
import cross from './img/error.svg';

const formSearch = document.querySelector('.form');
const inputSearch = document.querySelector('input');
export const loaderForm = document.querySelector('.form-load');
export const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formSearch.addEventListener('submit', onformSearchSubmit);

function onformSearchSubmit(event) {
  event.preventDefault();
  const inputValue = inputSearch.value.trim();
  if (inputValue === '') {
    return;
  }
  loaderForm.innerHTML = null;
  loaderForm.classList.add('loader');

  getsGalleryImg(inputValue)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          iconUrl: cross,
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
    })
    .catch(error => {
      console.log(error);
    });
  inputSearch.value = '';
}
