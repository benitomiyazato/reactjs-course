import "./App.css";

import { TaskList } from "./components/TaskList";
import { CatFact } from "./components/CatFact";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router className="router">
          <Navbar />
          <Routes className="routes">
            <Route path="/" element={<h1> Home Page </h1>}></Route>
            <Route path="/tasks" element={<TaskList />}></Route>
            <Route path="/fact" element={<CatFact />}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
