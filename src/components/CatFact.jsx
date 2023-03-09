import "./CatFact.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const CatFact = () => {
  const { data, isLoading, refetch } = useQuery(["catFact"], async () => {
    return (await axios.get("https://catfact.ninja/fact")).data;
  });

  return (
    <div className="catfact-container">
      <div className="fact">
        {!isLoading ? <p> {data?.fact} </p> : <p className="loading"> Loading... </p>}
      </div>
      <div className="button">
        <button onClick={refetch}>Generate new cat fact</button>
      </div>
    </div>
  );
};
