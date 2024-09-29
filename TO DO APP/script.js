
const textOfNewTask = document.getElementById('textTask')
const newTask = document.getElementById('task-container')
const toDoButton = document.getElementById('addTask')
const clearButton = document.getElementById('clearTask')


function addTask() {

    if (textOfNewTask.value === '') { // trzeba cos wpisac
        alert('Please enter a task');
        return
    }

    var task = document.createElement('p') // dodanie tekstu ('p') do divu
    task.innerHTML = `${textOfNewTask.value}`
    task.classList.add('task')
    newTask.appendChild(task)

    let deleteButton = document.createElement("button") // dodanie reset buttona do dodanego taska
    deleteButton.classList.add('deleteButton')
    deleteButton.innerHTML = 'DELETE'
    task.appendChild(deleteButton)

    deleteButton.addEventListener('click', function () { // funkcjonowanie reset buttona
        newTask.removeChild(task);
    });

    textOfNewTask.value = ''; // resetuje pole tekstowe po 
}

toDoButton.addEventListener('click', addTask) // klik uruchamia funkcje addTask

textOfNewTask.addEventListener('keypress', function(event) { // jak wcisnie enter dodaje task
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
})

clearButton.addEventListener('click', function() { // wyczyszczenie wszystkiego
    let text = ''
    newTask.innerText = text
})


