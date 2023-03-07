import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [nextId, setNextId] = useState(1);

  const handleNewTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const taskToAdd = { id: nextId, name: newTask, completed: false };
    setToDo([...toDo, taskToAdd]);
    setNewTask("");
    setNextId(nextId + 1);
  };

  const removeTask = (taskId) => {
    setToDo(toDo.filter((t) => t.id != taskId));
  };

  const completeTask = (taskId) => {
    setToDo(
      toDo.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" value={newTask} onChange={handleNewTaskInput} />
        <button onClick={addTask}>Add task</button>
      </div>

      <div className="taskList">
        {toDo.map((task, key) => {
          return (
            <Task
              key={key}
              name={task.name}
              id={task.id}
              completed={task.completed}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
