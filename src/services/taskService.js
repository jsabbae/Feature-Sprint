const API = "http://localhost:3000/tasks";

export async function getTasks() {
    const res = await fetch(API);
    return res.json();
}

export async function createTask(task) {
    return fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });
}