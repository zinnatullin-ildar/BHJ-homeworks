
const revealAll = document.querySelectorAll('.reveal');

window.onscroll = function () {
    for (reveal of revealAll) {
        const { top, bottom } = reveal.getBoundingClientRect();
        if (top > window.innerHeight || bottom < 0) {
            reveal.classList.remove('reveal_active');
        }
        else {
            reveal.classList.add('reveal_active');
        }
    }
}