import { useState, useEffect } from "react";
import "./CatFact.css";
import axios from "axios";

export const CatFact = () => {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    genCatFact();
  }, []);

  const genCatFact = async () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setCatFact(res.data.fact));
  };
  return (
    <div className="catfact-container">
      <div className="fact">
        <p> {catFact} </p>
      </div>
      <div className="button">
        <button onClick={genCatFact}>Generate new cat fact</button>
      </div>
    </div>
  );
};
