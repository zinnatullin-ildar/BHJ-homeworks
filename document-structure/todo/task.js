// Задание 6.2

const tasksList = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById('tasks__add');

function createTask() {
    const task = `<div class="task">
                        <div class="task__title">${taskInput.value.trim()}
                        </div>
                        <a href="#" class="task__remove">&times;</a>
                  </div>`;
    tasksList.insertAdjacentHTML("beforeend", task);
    taskInput.value = "";
}

taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && taskInput.value !== "") {
        e.preventDefault();
        createTask();
    }
})

tasksAdd.addEventListener("click", (e) => {
    if (taskInput.value !== "") {
        e.preventDefault();
        createTask();
    }

})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
});