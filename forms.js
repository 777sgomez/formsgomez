let todo = [];
const ul = document.createElement("ul");
const body = document.querySelector("body");

document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();
    todo.push(document.getElementById("todoInput").value);
})