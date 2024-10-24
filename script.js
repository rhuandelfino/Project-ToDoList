function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const taskList = document.getElementById("task-list");

    // Criar um novo item de tarefa
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">Remover</button>
    `;
    taskItem.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
    });

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
