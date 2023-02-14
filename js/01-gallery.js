import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemEl = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryItemEl);

let instance = null;

function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    ).join("");
};

const onImageClick = event => {
    event.preventDefault();
    const { target } = event;

    if (!target.dataset.source) {
        return;
    }

    instance = basicLightbox.create(`<img src="${target.dataset.source}">`);
    instance.show();

    window.addEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
    if (isEscKey) {
        instance.close();
        window.removeEventListener('keydown', onEscKeyPress);
    }
    }

galleryContainer.addEventListener('click', onImageClick);

/*

Create a gallery with the ability to click on its items and view full size images in a modal window.

Do this task in the 01-gallery.html and 01-gallery.js files. Break it down into several subtasks:

1. Creating and rendering markup from the galleryItems data array and provided gallery item template.
2. Implementing delegation to div.gallery and getting the url of a large image.
3. Adding the script and styles of the modal window library basicLightbox. 
Use the jsdelivrCDN service and add links to minified (.min) library files to your project.
4. Opening a modal window by clicking on a gallery item. 
To do this, check out the documentation and examples.
5. Replacing the value of the src attribute of the <img> element in a modal window before opening. 
Use the ready-made modal window markup with the image from the examples of the basicLightbox library.

The link to the original image must be stored in the source data attribute on the <img> element and specified in the link's href.

Please note that the image is wrapped in a link, which means that, when clicked, 
the user will be redirected to another page by default. Disable this behavior by default.

OPTIONAL

Add modal window closing upon pressing the Escape key. 
Make keyboard listening available only while the modal window is open. 
In the basicLightbox library, there is a method to close the modal window programmatically.

*/