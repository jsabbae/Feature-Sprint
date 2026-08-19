import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";
import TaskList from "../components/TaskList";
import { createTask } from "../components/TaskForm";

function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then((data) => {
            console.log("Tareas recibidas: ", data);
            setTasks(data);
        })
            .catch((error) => {
                console.error("Error al cargar tareas: ", error);

            });
    }, []);
    return (
        <main>
            <h1>Gestión de tareas</h1>
            <TaskList tasks={tasks} />
            <TaskForm onCreateTask={handleCreateTask} />
        </main>
    );
}

async function handleCreateTask(newTask) {
    try {
        const createdTask = await createTask(newTask);
        setTasks((previousTasks) => [...previousTasks, createdTask]);
    } catch (error) {
        console.error(error);
    }
}

export default Home;