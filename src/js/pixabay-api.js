import { inputSearch } from '../main';

export function photosGallery() {
  const KEY = '42458903-cbb27ce669d5c06b9309f1f84';
  const BASE_URL = 'https://pixabay.com/api/';
  const query = inputSearch.value;
  const URL = `${BASE_URL}?key=${KEY}&q=${query}&image-type=photo&orientation=horizontal&safesearch=true`;
  //   console.log(URL);
  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error! ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
