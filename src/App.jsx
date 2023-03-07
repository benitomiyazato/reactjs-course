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

  const handleInput = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="App">
      {planets.map((planet) => {
        const { name, isGasPlanet } = planet;
        return !isGasPlanet && <Planet name={name} />;
      })}

      <h1 style={{ color: color}}> Color changing dinamically </h1>

      <input onChange={handleInput} type="text" />
      {color}
    </div>
  );
}

export default App;
