import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const gallery = document.querySelector('.gallery');

const showLoader = () => {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  conteiner.append(loader);
};

const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
};

form.addEventListener('submit', event => {
  showLoader();
  gallery.innerHTML = '';
  event.preventDefault();
  const searchTerm = input.e;
  searchImages(searchTerm);
});

function searchImages(searchTerm) {
  const apiKey = '42290205-24e5613e72929844af62d686c';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    searchTerm
  )}&image_type=photo&orientation=horizontal&safesearch=true&per_page=18`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return response.json();
      }
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
          transitionIn: 'fadeInLeft',
        });
        hideLoader();
      } else {
        const markup = data.hits
          .map(image => {
            return `
          <li class = "gallery-item">
          <a href = "${image.largeImageURL}">
          <img class = "gallery-image" 
          src = "${image.webformatURL}"
          alt = "${image.tags}">
          </a>
          <p><b>Likes: </b>${image.likes}</p>
          <p><b>Views: </b>${image.views}</p>
          <p><b>Comments: </b>${image.comments}</p>
          <p><b>Downloads: </b>${image.downloads}</p>
          </li>`;
          })
          .join('');

        gallery.insertAdjacentHTML('beforeend', markup);
        const lightbox = new SimpleLightbox('.gallery a', {
          captions: true,
          captionType: 'attr',
          captionsData: 'alt',
          captionPosition: 'bottom',
          fadeSpeed: 150,
          captionSelector: 'img',
          captionDelay: 250,
        });

        lightbox.on('show.simplelightbox').refresh();
        hideLoader();
      }
    })
    .catch(error => console.log(error));
}
