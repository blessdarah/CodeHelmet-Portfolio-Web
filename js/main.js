const menu = document.querySelector('.menu');

const toggler = document.querySelector('.toggler');
const menuCloseBtn = document.querySelector('.menu__close');

toggler.addEventListener('click', e => {
    menu.classList.add('menu_active');
});
menuCloseBtn.addEventListener('click', e => {
    menu.classList.remove('menu_active');
});

// handle menu clicks
const menuItems = Array.from(document.querySelectorAll('.menu__item'));

menuItems.forEach(menu => {
    menu.addEventListener('click', e => {
        // find the active menu
        const activeMenu = document.querySelector('.menu__item_active');
        activeMenu.classList.remove('menu__item_active');
        menu.classList.add('menu__item_active');
    });
});

// Cascadia code and Fira code