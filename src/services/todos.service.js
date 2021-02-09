const API_URL = "http://localhost:3000";

export default {
    listTodos,
    createTodo
}

function apiFetch(path, options) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json")
    return fetch(API_URL+path,  {
        headers,
        ...options})
        .then(response => response.json());;
}

function listTodos() {
    return apiFetch("/todosAsync")
}

function createTodo(todoTitle) {
    return apiFetch("/todosAsync", {
        method: 'POST',
        body: JSON.stringify({
            todoTitle
        })
    });
}