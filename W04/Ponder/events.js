let tasks = [];

function renderTasks(tasks) {
  const listElement = document.getElementById('todoList'); // Changed to match HTML ID
  listElement.innerHTML = '';
  tasks.forEach(task => {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
      <p>${task.detail}</p>
      <span class="delete" data-action="delete">❌</span>
      <span class="complete" data-action="complete">✅</span>`;
    listElement.appendChild(taskElement);
  });
}

function newTask() {
  const taskInput = document.getElementById('todo');
  const taskDetail = taskInput.value;
  if (taskDetail) {
    tasks.push({ detail: taskDetail, completed: false });
    renderTasks(tasks);
    taskInput.value = '';
  }
}

document.getElementById('todo').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    newTask();
  }
});

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail !== taskElement.querySelector('p').innerText
  );
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[0].innerText
  );
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  const taskElement = event.target.closest('li');
  if (event.target.dataset.action === 'delete') {
    removeTask(taskElement);
  } else if (event.target.dataset.action === 'complete') {
    completeTask(taskElement);
  }
}

document.getElementById('submitTask').addEventListener('click', newTask); // Updated to match HTML
document.getElementById('todoList').addEventListener('click', manageTasks); // Updated to match HTML
