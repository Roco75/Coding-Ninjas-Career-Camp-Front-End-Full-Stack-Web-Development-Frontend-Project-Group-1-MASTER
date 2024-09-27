document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const taskCount = document.getElementById('task-count');
  
    let tasks = [];
  
    // Function to update task count
    function updateTaskCount() {
      taskCount.textContent = tasks.length;
    }
  
    // Function to render tasks
    function renderTasks() {
      todoList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTaskCompletion(index));
  
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.className = task.completed ? 'completed' : '';
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => deleteTask(index));
  
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
      });
      updateTaskCount();
    }
  
    // Function to add a new task
    function addTask() {
      const taskText = todoInput.value.trim();
      if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        todoInput.value = '';
        renderTasks();
      }
    }
  
    // Function to delete a task
    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }
  
    // Function to toggle task completion
    function toggleTaskCompletion(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }
  
    // Add task on button click
    addBtn.addEventListener('click', addTask);
  
    // Add task on pressing "Enter"
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  
    // Initial render
    renderTasks();
  });
  