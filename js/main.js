let icon_menu = document.querySelector('#icon_menu');
let menu_nav = document.querySelector('#menu_nav');

icon_menu.addEventListener('click', function (e) {
    e.preventDefault();

    // menu_nav.classList.toggle('close_menu');
    menu_nav.classList.toggle('open_menu');
});