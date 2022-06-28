// Задание 1.3

function endGame(text) {
    alert(text);
    kills.textContent = 0;
    miss.textContent = 0;
}

const holes = document.getElementsByClassName('hole');
const kills = document.getElementById('dead');
const miss = document.getElementById('lost');

for (let hole of holes) {
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            kills.textContent++;
        } else {
            miss.textContent++;
        }
        if (kills.textContent == 10) {
            endGame('Вы победили!');
        }
        if (miss.textContent == 5) {
            endGame('Вы проиграли, может еще раз?')
        }
    }
}