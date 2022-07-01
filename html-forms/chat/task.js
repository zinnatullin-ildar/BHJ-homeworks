// Задание 5.1

const chat = document.querySelector('.chat-widget');
chat.addEventListener("click", show_chat);

function show_chat() {
    chat.classList.add("chat-widget_active");
}

const message_robot = [
    'У нас все хорошо, а у вас?',
    'Извольте не грубить',
    'На этом прощаюсь',
    'Нам ничего не нужно',
    'Не пишите сюда больше'
]

let date = new Date();
const input = document.getElementById('chat-widget__input');
const message = document.querySelector('.chat-widget__messages');
const message_container = document.querySelector('.chat-widget__messages-container')

input.addEventListener('keydown', (event) => {
    if (event.code === "Enter" && input.value != '') {
        let i = Math.floor(Math.random() * message_robot.length);

        message.innerHTML += `
	   <div class="message message_client">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${input.value}</div>
       </div>
	   <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${message_robot[i]}</div>
        </div>
	 `;
        input.value = '';
        message_container.scrollTop = message_container.scrollHeight;
    }
})
