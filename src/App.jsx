import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={3000} position="Servente de Pedreiro" company="Mosbius Designs"/>
      <Job salary={5000} position="Chef de Cozinha" company="Presidente"/>
      <Job salary={7000} position="Astronauta" company="NASA"/>
    </div>
  );
}

const Job = (props) => {
  const { salary, position, company } = props;
  return (
    <div>
      <h1>Position: {position}</h1>
      <h1>Salary: {salary}</h1>
      <h1>Company: {company}</h1>
    </div>
  );
};

export default App;
