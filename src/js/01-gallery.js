
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// import * as common from './helpers.js';
// Change code below this line
// console.log(common);
console.log(galleryItems);

const gallaryList = document.querySelector('.gallery');
const typset = galleryItems.map(({ preview, original, description }) => {
    return `<li style="margin: 1px;" class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                loading="lazy"
                class="gallery__image"
                src="${preview}"               
                title = "${description}"
            />
        </a>
    </li>`;
}).join('');

  gallaryList.innerHTML = typset;
  const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionDelay: 250,
  fadeSpeed: 250,
  captionSelector: "img",
  captionData: "title",
  captionPosition: "bottom",}); 
