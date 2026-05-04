const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")


function addTask(){
    const text = taskInput.value.trim();

    if(text === ""){
        alert("Digite algo para fazer!")
        return;
    }

    const li = document.createElement('li')

    li.innerHTML = `<span onClick="toggleTask(this)"> ${text} </span>
                    <button class="delete=btn" onClick="deleteTask(this)">Excluir</button>
    `

    taskList.appendChild(li)

    taskInput.value = "";
    taskInput.focus();

}

function toggleTask(element){
    element.parentElement.classList.toggle('completed()')   
}
function deleteTask(element){
    const li = element.parentElement;
    li.remove()
}


