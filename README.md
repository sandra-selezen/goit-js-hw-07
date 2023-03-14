**Task 1 - Image gallery**
Create a gallery with the ability to click on its items and view full size images in a modal window.

1. Creating and rendering markup from the galleryItems data array and provided gallery item template.
2. Implementing delegation to div.gallery and getting the url of a large image.
3. Adding the script and styles of the modal window library basicLightbox.
   Use the jsdelivrCDN service and add links to minified (.min) library files to your project.
4. Opening a modal window by clicking on a gallery item.
   To do this, check out the documentation and examples.
5. Replacing the value of the src attribute of the <img> element in a modal window before opening.
   Use the ready-made modal window markup with the image from the examples of the basicLightbox library.

**Task 2 - SimpleLightbox library**

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
