import { useState } from "react";

function TaskForm({ onCreateTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("medium");
    const [status, setStatus] = useState("pending");
    const [dueDate, setDueDate] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        // Aquí iran las validaciones

        // Validación de la longitud del título obligatorio

        if (!title.trim()) {
            alert("El título es obligatorio");
            return;
        }

        // Validación de la descripción

        if (description.length > 300) {
            alert("La descripción no puede superar los 300 caracteres");
            return;
        }

        // Validación de la fecha límite

        if (dueDate) {
            const today = new Date().toISOString().split("T")[0];
            if (dueDate < today) {
                alert("La fecha límite no puede ser anterior a hoy");
                return;
            }
        }

        //  if (dueDate) {
        //     const today = new Date();

        //     const todayString = today.getFullYear() + "-"
        //         + String(today.getMonth() + 1).padStart(2, "0") + "-"
        //         + String(today.getDate()).padStart(2, "0");

        //     if (dueDate && dueDate < todayString) {
        //         alert("La fecha límite no puede ser anterior a hoy");
        //         return;
        //     }
        // }

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
    return (<form onSubmit={handleSubmit}>
       
        <div>
            <label htmlFor="title">Título</label>
            <input
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Título de la tarea"
            />
        </div>

        <div>
            <label htmlFor="description">Descripción</label>
            <input
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Descripción de la tarea"
            />
        </div>

        <div>
            <label htmlFor="status">Estado</label>
            <select
                id="status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}>
                <option value="Pendiente">Pendiente</option>
                <option value="En Progreso">En progreso</option>
                <option value="Completada">Completada</option>
            </select>
        </div>

        <div>
            <label htmlFor="priority">Prioridad</label>
            <select
                id="priority"
                value={priority}
                onChange={(event) => setPriority(event.target.value)}>
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
            </select>
        </div>

        <div>
            <label htmlFor="dueDate">Fecha límite</label>
            <input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
            />
        </div>

        {/* <div>
            <input
                id="dueDate"
                type="date"
                value={dueDate}
                min={
                    new Date().getFullYear() + "-"
                    + String(new Date().getMonth() + 1).padStart(2, "0") + "-"
                    + String(new Date().getDate() + 1).padStart(2, "0")
                }
                onChange={(event) => setDueDate(event.target.value)}
            />
        </div> */}

        <button type="submit">Crear tarea</button>

    </form>);

}
export default TaskForm;
