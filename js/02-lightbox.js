import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemEl = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryItemEl);

function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => 
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    ).join("");
}

/*

Create the same gallery as in the first task, but using the SimpleLightbox library, 
which will handle image clicks, modal opening and closing and image scrolling with the keyboard.

1. Creating and rendering markup from the galleryItems data array and provided gallery element template. 
Use the ready-made code from the first task.
2. Adding the script and library styles using the cdnjs CDN service. 
You need to add links to two files: simple-lightbox.min.js and simple-lightbox.min.css.
3. Library initialization after gallery items are created and added to div.gallery. 
To do this, read the SimpleLightbox documentation - first of all, the Usage and Markup sections.
4. Look in the documentation for the Options section and add image caption display from the alt attribute. 
Let the caption be at the bottom and appear 250 milliseconds after image opening.

*/