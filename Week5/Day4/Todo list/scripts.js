const tasks = [];

function addTask(taskText) {
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };


    tasks.push(task);

    renderTask(task);
}

function renderTask(task) {
    const listTasks = document.getElementById('listTasks');

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.dataset.taskId = task.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `task-${task.id}`;
    checkbox.checked = task.completed;

    const label = document.createElement('label');
    label.setAttribute('for', `task-${task.id}`);
    label.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.addEventListener('click', () => deleteTask(task.id));

    taskElement.appendChild(checkbox);
    taskElement.appendChild(label);
    taskElement.appendChild(deleteButton);

    listTasks.appendChild(taskElement);
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks.splice(taskIndex, 1);
    const taskElement = document.querySelector(`.task[data-task-id="${taskId}"]`);
    taskElement.remove();
}

const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; 
    }
});