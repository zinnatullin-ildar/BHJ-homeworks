// Задание 2.2

const links = document.querySelectorAll('.menu__link');

links.forEach((link) => {
    link.onclick = function () {
        const parentElement = link.closest('.menu__item');
        if (parentElement.querySelector('.menu_sub')) {
            parentElement.querySelector('.menu_sub').classList.toggle('menu_active');
            return false;
        }
    }
})