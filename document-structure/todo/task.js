const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

const addTask = (title) => {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  taskDiv.innerHTML = `
    <div class="task__title">
      ${title}
    </div>
    <a href="#" class="task__remove">&times;</a>`;

  const removeButton = taskDiv.querySelector('.task__remove');
  removeButton.addEventListener('click', () => {
    tasksList.removeChild(taskDiv);
  });

  tasksList.appendChild(taskDiv);
};

addButton.addEventListener('click', () => {
  if (taskInput.value.trim() !== '') {
    addTask(taskInput.value);
    taskInput.value = '';
  }
});

taskInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && taskInput.value.trim() !== '') {
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
  }
});