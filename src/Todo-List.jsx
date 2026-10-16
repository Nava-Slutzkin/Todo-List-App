export default function TodoList() {

    let todoList = [
        "buy groceries",
        "clean the house",
        "finish homework",
    ]

    return (
        <>
            <h2>Todo List</h2>
            <ul>
                {todoList.map((task, index) => (<li key={index}>{task}</li>))}
            </ul>
        </>
    )
}
