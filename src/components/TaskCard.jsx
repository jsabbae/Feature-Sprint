function TaskCard({ task }) {
    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Estado: {task.status}</p>
            <p>Prioridad: {task.priority}</p>
            <p>Creada: {task.createdAt}</p>
            <p>Fecha límite {task.dueDate || "Sin fecha límite"}</p>
        </div>
    );
}
export default TaskCard;