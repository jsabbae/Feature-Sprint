/* Mensaje de confirmación para la eliminar una tarea*/

function ConfirmModal({ task, onConfirm, onCancel }) {
    if (!task) {
        return null;
    }
    return (
        <div>
            <p>¿Seguro que quieres eliminar la tarea "{task.title}"?</p>
            <button onClick={onConfirm}>Sí, eliminar</button>
            <button onClick={onCancel}>Cancelar</button>
        </div>
    );
}
export default ConfirmModal;