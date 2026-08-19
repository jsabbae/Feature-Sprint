const API_URL = "http://localhost:3001/tasks";
export async function getTasks() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Error al cargar las tareas");
    }
    return response.json();
}
export async function createTask(task) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    if (!response.ok) {
        throw new Error("Error al crear la tarea");
    }
    return response.json();
}