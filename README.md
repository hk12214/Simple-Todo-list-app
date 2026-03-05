#  Todo List App

This is a **Simple Todo List Application** built using **HTML, CSS, and JavaScript**.  
It allows users to **add , edit and delate tasks** dynamically in the browser.  
This project demonstrates the use of basic DOM manipulation and event handling in JavaScript.

---

##  Features

✅ Add new tasks  
✅ Edit a task directly from the list
✅ Delete a task easily
✅ Input validation to prevent adding empty tasks

---

##  How to Run

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Start adding, editing, and deleting tasks!

##  How It Works

1. The user types a task into the input field.
2. Clicking the **Add Task** button creates a new list item (`<li>`) and displays it
3. When the "Add Task" button is clicked, the app:
   @ Creates a new list item (<li>)
   @ Displays the task text
   @ Adds Edit and Delete buttons beside it
4. Edit button opens a prompt to change the task text.
5. Delete button removes the task from the list.

---

##  Code Explanation

**Key JavaScript Features Used:**

- `document.querySelector()` – selects elements from the HTML.
- `addEventListener()` – listens for user actions like clicks.
- `createElement()` – creates new HTML elements dynamically.
- `appendChild()` – adds elements to the DOM.
- `remove()` – deletes a task when the Remove button is clicked.

**Core Functions:**

```javascript
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

  // Edit button
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

  // Delete button
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
```

###  Screenshots

| Screenshot                         | Description                        |
| ---------------------------------- | ---------------------------------- |
| ![Todo App](./screenshot1.png)     | Main interface showing added tasks |
| ![Todo App](./screenshot2.png)     | showing added tasks                |
| ![Editing Task](./screenshot3.png) | Editing an existing task           |

