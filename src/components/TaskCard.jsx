function TaskCard({ task }) {

    let fechaEuropea = "Sin fecha";
    let fechaLimiteEuropea = "Sin fecha límite"

    if (task.createdAt) {
        const fecha = new Date(task.createdAt);
        fechaEuropea = fecha.toLocaleString('es-ES', {
            timeZone: 'Europe/Madrid',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    if (task.dueDate) {
        const fechaLimite = new Date(task.dueDate);
        fechaLimiteEuropea = fechaLimite.toLocaleString('es-ES', {
            timeZone: 'Europe/Madrid',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Estado: {task.status}</p>
            <p>Prioridad: {task.priority}</p>
            <p id="fecha">Creada: {fechaEuropea}</p>
            <p id="fechaLimite">Fecha límite {fechaLimiteEuropea}</p>
        </div>
    );
}
export default TaskCard;