// Задание 4.3

const book = document.querySelector(".book");
const fontSize = document.querySelectorAll(".font-size");

for (let button of fontSize) {
    button.addEventListener("click", changeFontSize)
}

function changeFontSize(event) {
    event.preventDefault();

    if (event.target.dataset.size === "small") {
        book.classList.add("book_fs-small");
        book.classList.remove("book_fs-big");
    }

    if (event.target.dataset.size === "big") {
        book.classList.add("book_fs-big");
        book.classList.remove("book_fs-small");
    }

    if (event.target.dataset.size == null) {
        book.classList.remove("book_fs-small");
        book.classList.remove("book_fs-big");
    }

    for (let button of fontSize) {
        button.classList.remove("font-size_active");
    }
    event.target.classList.add("font-size_active");
}