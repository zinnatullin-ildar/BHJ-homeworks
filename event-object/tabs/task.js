// Задание 3.3

const tab = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab__content");

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function () {
        const tab_active = document.querySelector(".tab_active");
        const cont_active = document.querySelector(".tab__content_active");

        if (tab_active) {
            tab_active.classList.toggle("tab_active");
            cont_active.classList.toggle("tab__content_active");
        }

        tab[i].classList.toggle("tab_active");
        content[i].classList.toggle("tab__content_active");
    })
} 