let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === '') {
        alert("Please enter a valid Task!");
        return;
    }
    tasks.push(taskText);
    input.value = "";
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("tasklist");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <div class="task-actions">
                <button onClick="editTask(${index})">Edit</button>
                <button onClick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function editTask(index) {
    const newTask = prompt("Edit the task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm("Are you sure you want to delete the task?")) {
        tasks.splice(index, 1);
        renderTasks();
    }
}
