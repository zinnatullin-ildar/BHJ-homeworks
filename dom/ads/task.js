// Задание 4.2

let speed = 0;
let index = 0;
let intervalId = null;
const rotat = document.querySelectorAll('.rotator__case');

function rotation() {
    clearInterval(intervalId);

    rotat[index].classList.toggle("rotator__case_active");
    index++;

    if (index === rotat.length) {
        index = 0;
    }

    rotat[index].classList.toggle("rotator__case_active");
    rotat[index].style.color = rotat[index].dataset.color;

    speed = rotat[index].dataset.speed;
    intervalId = setInterval(rotation, speed);

}

intervalId = setInterval(rotation, speed)