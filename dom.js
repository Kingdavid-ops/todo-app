const input = document.getElementById('text');
const enter = document.querySelector("#enter");
const ul = document.querySelector("ul");
const info = document.querySelector("#info");

// Save todos to localStorage
function saveTodos() {
    const todos = [];
    document.querySelectorAll('.list').forEach(listDiv => {
        const li = listDiv.querySelector('li');
        todos.push({
            text: li.textContent,
            done: li.classList.contains('done')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load todos from localStorage
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    ul.innerHTML = '';
    todos.forEach(todo => {
        addTodoToDOM(todo.text, todo.done);
    });
}

// Add a todo item to the DOM
function addTodoToDOM(text, done = false) {
    const remove = document.createElement("input");
    remove.setAttribute("type", "button");
    remove.setAttribute("class", "big");
    remove.setAttribute("value", "❌");
    const list = document.createElement("div");
    list.setAttribute("class", "list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    if (done) li.classList.add("done");
    list.appendChild(li);
    list.appendChild(remove);
    ul.appendChild(list);

    // Toggle done
    li.addEventListener("click", () => {
        li.classList.toggle("done");
        saveTodos();
    });

    // Remove todo
    remove.addEventListener("click", () => {
        list.remove();
        saveTodos();
    });
}
// this is a simple todo list application that allows users to add, remove, and mark todos as done. It uses localStorage to persist the todos across page reloads.
// Add new todo (button click)
enter.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        info.innerHTML = null;
        addTodoToDOM(input.value.trim());
        input.value = "";
        saveTodos();
    } else {
        alert("Input field cannot be empty");
    }
});

// Add new todo (Enter key)
input.addEventListener("keypress", (event) => {
    if (input.value.trim() !== "" && (event.key === "Enter" || event.keyCode === 13)) {
        info.innerHTML = null;
        addTodoToDOM(input.value.trim());
        input.value = "";
        saveTodos();
    }
});

// Load todos on page load
window.addEventListener("DOMContentLoaded", loadTodos);
