import './App.css'

import {useState} from 'react';

import AddTaskForm from "./AddTaskForm.jsx";
import Task from "./Task.jsx";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = text => {
      let taskId = 1;

      if (tasks.length) {
        const lastTask = tasks[tasks.length - 1];
        taskId = lastTask.id + 1;
      }

      const newTask = {
        id: taskId,
        text: text,
        completed: false
      };

      setTasks([...tasks, newTask]);
  };

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTask = taskId => {
    const index = tasks.findIndex(task => task.id === taskId);

    if (index !== -1) {
      const newTask = {...tasks[index], completed: !tasks[index].completed};
      const newTasks = [...tasks];

      newTasks[index] = newTask;
      setTasks(newTasks);
    }
  };

  return (
    <div>
      <h1>Lista de tareas</h1>

      <AddTaskForm addTask={addTask}/>

      <ul>
        {tasks.map(task => <Task key={task.id} id={task.id} text={task.text} completed={task.completed} deleteTask={deleteTask} toggleTask={toggleTask}/>)}
      </ul>
    </div>
  );
};

export default App;
