import "./App.css";
import { useState, useEffect } from "react";
import { Task } from "./Task";
import axios from "axios";

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [nextId, setNextId] = useState(1);
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    genCatFact();
  }, []);

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

  const genCatFact = async () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setCatFact(res.data.fact));
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

      <button onClick={genCatFact}> Generate new cat fact </button>
      <h1> {catFact} </h1>
    </div>
  );
}

export default App;
