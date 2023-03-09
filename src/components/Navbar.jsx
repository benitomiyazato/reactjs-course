import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="container">
      <Link className="link" to="/">Home Page</Link>
      <Link className="link" to="/fact">Cat Fact</Link>
      <Link className="link" to="/tasks">To Do List</Link>
      <Link className="link" to="/form">Form</Link>
    </div>
  );
};
