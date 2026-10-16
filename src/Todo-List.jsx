import TodoItem from "./Todo-Item";
import { useState } from "react";

export default function TodoList() {

    const [tasks, setTasks] = useState([
        "buy groceries",
        "clean the house",
        "finish homework",
    ]);

    const [newTask, setNewTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedTask = newTask.trim();

        if (trimmedTask === "" || tasks.includes(trimmedTask)) {
            return;
        }

        setTasks([...tasks, trimmedTask]);
        setNewTask("");
    };

    return (
        <>
            <h2>Todo List</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                    placeholder="enter a new task"
                />
                <button type="submit">submit</button>
            </form>

            <ul>
                {tasks.map((task) => (<TodoItem key={task} title={task} />))}
            </ul>
        </>
    )
}