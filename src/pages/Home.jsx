import { useEffect, useState } from "react";
import { getTasks } from "./services/taskService";
import TaskList from "../components/TaskList";

function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(data => setTasks(data));
    }, []);

    return (
        <div>
            <h1>Mis tareas</h1>
            <TaskList tasks={tasks} />
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>

    );
}

export default Home;