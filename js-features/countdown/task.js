// Задание 1.1

const counter = document.getElementById('timer');
let time = counter.textContent;

let timerId = setInterval(() => {
    if (time > 0) {
        time--;
        counter.textContent = time;
    } else {
        clearTimeout(timerId);
        alert('You are the winner!');
    }
}, 1000);