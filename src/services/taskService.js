const API_URL = "http://localhost:3001/tasks";
export async function getTasks() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Error al cargar las tareas");
    }
    return response.json();
}