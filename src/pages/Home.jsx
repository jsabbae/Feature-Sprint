import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/taskService";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import ConfirmModal from "../components/ConfirmModal";


function Home() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [taskToDelete, setTaskToDelete] = useState(null);

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

    async function handleUpdateTask(updatedTask) {
        try {
            const savedTask = await updateTask(updatedTask.id, updatedTask);
            setTasks((previousTasks) => previousTasks.map((task) => task.id === savedTask.id ? savedTask : task));

            setEditingTask(null);
        } catch (error) {
            console.error("Error al editar la tarea:", error);
        }
    }

    async function handleDeleteTask() {
        if (!taskToDelete) {
            return;
        }
        try {
            await deleteTask(taskToDelete.id);
            setTasks((previousTasks) => previousTasks.filter((task) => task.id !== taskToDelete.id));
            setTaskToDelete(null);
        } catch (error) {
            console.error("Error al eliminar la tarea: ", error);
        }
    }

    async function handleStatusChange(task, newStatus) {
        const updatedTask = {
            ...task,
            status: newStatus,
        };
        try {
            const savedTask = await updateTask(task.id, updatedTask);
            setTasks((previousTasks) => previousTasks.map((currentTask) => currentTask.id === savedTask.id
                ? savedTask
                : currentTask))

        } catch (error) {
            console.error("Error al cambiar el estado: ", error);
        }
    }

    return (
        <main>
            <h1>Gestión de tareas</h1>
            <TaskForm onCreateTask={handleCreateTask}
                onUpdateTask={handleUpdateTask}
                editingTask={editingTask} />
            <TaskList tasks={tasks}
                onEditTask={setEditingTask}
                onDeleteTask={setTaskToDelete}
                onStatusChange={handleStatusChange} />
            <ConfirmModal task={taskToDelete} onConfirm={handleDeleteTask}
                onCancel={() => setTaskToDelete(null)} />
        </main>
    );

}
export default Home;