import "./App.css";
import { useState } from "react";
import { Planet } from "./Planet";

const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Jupiter", isGasPlanet: true },
  { name: "Venus", isGasPlanet: false },
  { name: "Neptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true },
];

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [nextId, setNextId] = useState(1);

  const handleNewTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const taskToAdd = { id: nextId, name: newTask };
    console.log(taskToAdd);
    setToDo([...toDo, taskToAdd]);
    setNewTask("");
    setNextId(nextId + 1);
  };

  const removeTask = (taskId) => {
    setToDo(toDo.filter((t) => t.id != taskId));
  };

  return (
    <div className="App">
      
      <div className="addTask">
        <input type="text" value={newTask} onChange={handleNewTaskInput} />
        <button onClick={addTask}>Add task</button>
      </div>

      <div className="taskList">
        {toDo.map((task) => {
          return (
            <div>
              <p> {task.id} - {task.name} </p>
              <button onClick={() => removeTask(task.id)}>Remove task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
