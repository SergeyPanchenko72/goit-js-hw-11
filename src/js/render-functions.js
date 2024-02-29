import { gallery, loader } from '../main';

export function galleryElements(element) {
  console.log(element);
  return element
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
        return `<li>
        <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" /></a>
        <ul>
          <li>
            <p>Likes</p>
            <p>${likes}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${views}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${comments}</p>
          </li>
          <li>
            <p>downloads</p>
            <p>${downloads}</p>
          </li>
        </ul>
      </li>`;
      }
    )
    .join('');

  //   gallery.innerHTML = collection;
  //   loader.classList.remove(loader);
}
