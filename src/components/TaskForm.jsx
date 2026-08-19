import { useState } from "react";

export async function createTask(task) {
    const response = await fetch("http://localhost:3001/tasks", {
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

    function TaskForm({ onCreateTask }) {
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [priority, setPriority] = useState("medium");
        const [status, setStatus] = useState("pending");
        const [dueDate, setDueDate] = useState("");

        function handleSubmit(event) {
            event.preventDefault();

            // Aquí iran las validaciones

            // Validación del título obligatorio

            // Validación de longitud del título

            // Validación de la descripción

            // Validación de la fecha límite

            const newTask = {
                title,
                description,
                priority,
                status,
                dueDate: dueDate || null,
                createdAt: new Date().toISOString(),
            };
            onCreateTask(newTask);

        }
        return(<form onSubmit={handleSubmit}></form>);
    }
    export default TaskForm;
}