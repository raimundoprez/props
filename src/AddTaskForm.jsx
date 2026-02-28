import {useRef} from "react";

function AddTaskForm({addTask}) {
    const input = useRef(null);

    const formSubmit = e => {
        e.preventDefault();

        if (input.current) {
            addTask(input.current.value);
            input.current.value = "";
        }
    };

    return (
        <form onSubmit={formSubmit}>
            <input ref={input} type="text" placeholder="Agregar nueva tarea" required/>
            <input type="submit" value="Agregar"/>
        </form>
    );
}

export default AddTaskForm;