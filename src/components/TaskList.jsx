import TaskCard from "./TaskCard";

function TaskList({ tasks, onEditTask, onDeleteTask, onStatusChange }) {
    return (
        <div>
            {tasks.map((task) =>
            (<TaskCard
                key={task.id}
                task={task}
                onEditTask={onEditTask}
                onDeleteTask={onDeleteTask}
                onStatusChange={onStatusChange} />)
            )}
        </div>
    );
}
export default TaskList;