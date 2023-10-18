document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');
    const menuCloseButton = document.getElementById('close-btn');

    menuButton.addEventListener('click', function () {
        menu.style.top = "50%";
    });

    menuCloseButton.addEventListener('click', function() {
        menu.style.top = "-50%";
    });

});