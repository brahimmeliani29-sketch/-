function addTask(){
const taskInput=document.getElementById('task-input');
const taskList=document.getElementById('task-list');

if(taskInput.value.trim() === ''){
    return;
}

const li=document.createElement('li');
li.innerHTML = `
    ${taskInput.value}
<button onclick="deleteTask(this)">حذف</button>
`;
taskList.appendChild(li);
taskInput.value = '';
}
function deleteTask(button){
const li=button.parentElement;
li.remove();
}
