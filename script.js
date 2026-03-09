const button = document.querySelector("#button");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

button.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
if(e.key === "Enter"){
addTask();
}
});

function addTask(){

const taskText = taskInput.value.trim();

if(taskText === ""){
alert("Please enter a task");
return;
}

const li = document.createElement("li");

const span = document.createElement("span");
span.textContent = taskText;

const checkbox = document.createElement("input");
checkbox.type = "checkbox";

checkbox.addEventListener("change",function(){
span.classList.toggle("completed");
});

const editBtn = document.createElement("button");
editBtn.textContent="Edit";
editBtn.classList.add("edit");

editBtn.onclick = function(){
const newTask = prompt("Edit task", span.textContent);

if(newTask){
span.textContent = newTask;
}
};

const delBtn = document.createElement("button");
delBtn.textContent="Delete";
delBtn.classList.add("delete");

delBtn.onclick = function(){
li.remove();
};

const div = document.createElement("div");
div.classList.add("buttons");

div.appendChild(editBtn);
div.appendChild(delBtn);

li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(div);

taskList.appendChild(li);

taskInput.value="";
}
