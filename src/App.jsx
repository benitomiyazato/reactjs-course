import "./App.css";
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
  return (
    <div className="App">
      {planets.map((planet) => {
        const { name, isGasPlanet } = planet;
        return !isGasPlanet && <Planet name={name} />;
      })}
    </div>
  );
}

export default App;
