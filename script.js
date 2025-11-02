const button = document.querySelector("#button");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

// Add task
button.addEventListener("click", addTask);
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;
  // edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.addEventListener("click", function () {
    editTask(li);
  });
  function editTask(li) {
    const currentText = li.firstChild.textContent;
    const newTask = prompt("Edit your task:", currentText);

    if (newTask !== null && newTask.trim() !== "") {
      li.firstChild.textContent = newTask.trim();
    }
  }

  // delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");
  delBtn.addEventListener("click", del);
  function del() {
    li.remove();
  }
  const div = document.createElement("div");
  div.classList.add("buttons");
  div.appendChild(editBtn);
  div.appendChild(delBtn);
  li.appendChild(div);
  taskList.appendChild(li);

  taskInput.value = "";
}
