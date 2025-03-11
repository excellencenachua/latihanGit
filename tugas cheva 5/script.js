document.addEventListener("DOMContentLoaded", loadTasks);

        function addTask() {
            let name = document.getElementById("taskName").value;
            let desc = document.getElementById("taskDesc").value;
            let deadline = document.getElementById("taskDeadline").value;
            
            if (!name || !desc || !deadline) {
                alert("Harap isi semua bidang!");
                return;
            }
            
            let task = { name, desc, deadline };
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            
            document.getElementById("taskName").value = "";
            document.getElementById("taskDesc").value = "";
            document.getElementById("taskDeadline").value = "";
            
            loadTasks();
        }

        function loadTasks() {
            let taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            
            tasks.forEach((task, index) => {
                let taskItem = document.createElement("div");
                taskItem.classList.add("task-item");
                taskItem.innerHTML = `
                    <h3>${task.name}</h3>
                    <p>${task.desc}</p>
                    <small>Deadline: ${task.deadline}</small>
                    <br>
                    <button class="delete-btn" onclick="deleteTask(${index})">Hapus</button>
                `;
                taskList.appendChild(taskItem);
            });
        }

        function deleteTask(index) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        }