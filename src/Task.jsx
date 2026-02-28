function Task({id, text, completed, deleteTask, toggleTask}) {
    return (
        <li>
            <span onClick={() => toggleTask(id)} style={completed ? {textDecoration: 'line-through'} : {textDecoration: 'auto'}}>{text}</span>
            <button onClick={() => deleteTask(id)}>Eliminar</button>
        </li>
    );
}

export default Task;