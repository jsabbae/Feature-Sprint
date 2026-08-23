import { useEffect, useState } from "react";
import { getTasks, createTask } from "../services/taskService";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then((data) => {
            setTasks(data);
        })
            .catch((error) => {
                console.error("Error al cargar tareas: ", error);

            });
    }, []);


    async function handleCreateTask(newTask) {
        try {
            const createdTask = await createTask(newTask);
            setTasks((previousTasks) => [...previousTasks, createdTask]);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <main>
            <h1>Gestión de tareas</h1>
            <TaskForm onCreateTask={handleCreateTask} />
            <TaskList tasks={tasks} />
        </main>
    );
}
export default Home;