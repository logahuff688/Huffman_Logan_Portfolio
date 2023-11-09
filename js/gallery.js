document.addEventListener('DOMContentLoaded', function () {
    const imageGallery = document.getElementById('gallery');
    const allButton = document.getElementById('all-button');
    const pfpsButton = document.getElementById('pfps-button');
    const iconsButton = document.getElementById('icons-button');
    const gamepassesButton = document.getElementById('gamepasses-button');
    const logosButton = document.getElementById('logos-button');
    const bannersButton = document.getElementById('banners-button');
    const miscButton = document.getElementById('misc-button');
    const photoshopsButton = document.getElementById('photoshops-button');
    const assetsButton = document.getElementById('assets-button');
    const uiMenusButton = document.getElementById('ui-menus-button');

    function showImages(tag) {
        const images = imageGallery.querySelectorAll('img');

        images.forEach(function (image) {
            const imageTag = image.getAttribute('data-tag');
            if (tag === 'all' || imageTag === tag) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    allButton.addEventListener('click', function () {
        showImages('all');
    });

    pfpsButton.addEventListener('click', function () {
        showImages('pfp');
    });

    iconsButton.addEventListener('click', function () {
        showImages('icon');
    });

    gamepassesButton.addEventListener('click', function () {
        showImages('gamepass');
    });

    logosButton.addEventListener('click', function () {
        showImages('logo');
    });

    bannersButton.addEventListener('click', function () {
        showImages('banner');
    });

    miscButton.addEventListener('click', function () {
        showImages('misc');
    });

    photoshopsButton.addEventListener('click', function() {
        showImages('photoshop');
    });

    assetsButton.addEventListener('click', function () {
        showImages('asset');
    });

    uiMenusButton.addEventListener('click', function () {
        showImages('menu');
    });

    showImages('all');
});
