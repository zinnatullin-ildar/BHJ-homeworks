// Задание 3.1

const select = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const listItems = document.querySelectorAll(".dropdown__item");

select.addEventListener("click", menuWindow);

for (let item of listItems) {
    item.addEventListener("click", menuItem);
}

function menuWindow(event) {
list.classList.toggle("dropdown__list_active");
}

function menuItem(event) {
    event.preventDefault();
    select.textContent = event.currentTarget.textContent;
    list.classList.remove("dropdown__list_active");
}