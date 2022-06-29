// Задание 2.3

let index = 0;
const slides = document.querySelectorAll('.slider__item');
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');

function slider(number) {
    if (number > slides.length - 1) {
        index = 0;
    }

    if (number < 0) {
        index = slides.length - 1;
    }

    for (let slide of slides) {
        slide.classList.remove('slider__item_active')
    }

slides[index].classList.add('slider__item_active')
}

nextArrow.onclick = () => {
    slider(index += 1);
}

prevArrow.onclick = () => {
    slider(index -= 1);
}

slider(index)