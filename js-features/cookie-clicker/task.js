// Задание 1.2

const picture = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

picture.onclick = function () {
    const currentCount = counter.textContent;
    counter.textContent++;
    
    if (currentCount % 2 === 0) {
        picture.width /= 1.5;
    } else {
        picture.width *= 1.5;
    }
}