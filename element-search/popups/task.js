// Задание 2.1

const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const closeButtons = document.querySelectorAll('.modal__close');
for (let btn of closeButtons) {
    btn.onclick = () => {
        btn.closest('.modal').classList.remove('modal_active');
    }
}

const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');

showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}