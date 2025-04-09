const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

let tasks = [];

// Thêm nhiệm vụ
addTaskButton.addEventListener('click', function() {
    const task = taskInput.value;

    if (task !== '') {
        tasks.push(task);
        taskInput.value = ''; 
        renderTasks(); 
    } else {
        alert('Vui lòng nhập nhiệm vụ!');
    }
});


function renderTasks() {
    taskList.innerHTML = ''

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('task-item');

        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">X</button>
        `;

        taskList.appendChild(li);
    });
}


function deleteTask(index) {
    if (confirm('Bạn có chắc chắn muốn xóa nhiệm vụ này không?')) {
        tasks.splice(index, 1); 
        renderTasks(); 
    }
}