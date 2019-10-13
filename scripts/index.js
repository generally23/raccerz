(function () {
    // elements
    const galleryImages = document.querySelectorAll('.gallery__cover');
    let counter = 1;
    (function toggleImage () {
        // hide all images
        galleryImages.forEach(image => {
            image.style.display = 'none';
        });
        galleryImages[counter - 1].style.display = '';
        counter = counter < galleryImages.length ? ++counter : 1;
        setTimeout(toggleImage, 3000);
    })();
})();



