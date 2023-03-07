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
  const [color, setColor] = useState("");
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputColor = (event) => {
    setColor(event.target.value);
  };

  const handleNewTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setToDo(...toDo, newTask);
    setNewTask("");
  };

  const removeTask = (task) => {
    setToDo(toDo.filter((t) => t != task));
  };

  return (
    <div className="App">
      {planets.map((planet) => {
        const { name, isGasPlanet } = planet;
        return !isGasPlanet && <Planet name={name} />;
      })}
      <h1 style={{ color: color }}> Color changing dinamically </h1>
      <input onChange={handleInputColor} type="text" />
      {color}

      <div className="addTask">
        <input type="text" value={newTask} onChange={handleNewTaskInput} />
        <button onClick={addTask}>Add task</button>
      </div>

      <div className="taskList">
        {toDo.map((task) => {
          return (
            <div>
              <p> {task} </p>
              <button onClick={() => removeTask(task)}>Remove task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
