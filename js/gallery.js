document.addEventListener('DOMContentLoaded', function () {
    const imageGallery = document.getElementById('gallery');
    const thumbnailsButton = document.getElementById('thumbnails-button');
    const pfpsButton = document.getElementById('pfps-button');
    const iconsButton = document.getElementById('icons-button');
    const gamepassesButton = document.getElementById('gamepasses-button');
    const logosButton = document.getElementById('logos-button')
    const bannersButton = document.getElementById('banners-button')
    const miscButton = document.getElementById('misc-button')
    const photoshopsButton = document.getElementById('photoshops-button')
    const assetsButton = document.getElementById('assets-button')
    const uiMenusButton = document.getElementById('ui-menus-button')
    const allButton = document.getElementById('all-button')

    function showImages(tag) {
        const images = imageGallery.querySelectorAll('img');

        images.forEach(function (image) {
            const imageTag = image.getAttribute('data-tag');
            if (tag === 'all' || imageTag === tag) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }

            image.addEventListener('click', function () {
                window.open(image.getAttribute('src'), '_blank');
            });
        });
    }

    thumbnailsButton.addEventListener('click', function () {
        showImages('thumbnail')
    })

    pfpsButton.addEventListener('click', function () {
        showImages('pfp')
    })

    iconsButton.addEventListener('click', function () {
        showImages('icon')
    })

    gamepassesButton.addEventListener('click', function () {
        showImages('gamepass')
    })

    logosButton.addEventListener('click', function () {
        showImages('logo')
    })

    bannersButton.addEventListener('click', function () {
        showImages('banner')
    })

    miscButton.addEventListener('click', function () {
        showImages('misc')
    })

    assetsButton.addEventListener('click', function () {
        showImages('asset')
    })

    uiMenusButton.addEventListener('click', function () {
        showImages('menu')
    })

    photoshopsButton.addEventListener('click', function () {
        showImages('photoshop')
    })

    allButton.addEventListener('click', function () {
        showImages('all');
    });

    showImages('all');
})
