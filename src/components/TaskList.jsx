
function TaskList({ tasks }) {

    return (<div>
        <h2> Lista de tareas </h2>
        {tasks.map(task => (
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
        ))}
    </div>
    )
}
export default TaskList;