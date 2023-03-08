import "./Task.css";

export const Task = (props) => {
  const { id, name, completed, removeTask, completeTask } = props;

  return (
    <div className="task-container">
      <p style={{ color: completed ? "green" : "white" }}>
        {id} - {name}
      </p>
      <div className="buttons">
        <button onClick={() => completeTask(id)}> ✅ </button>
        <button onClick={() => removeTask(id)}> ❌ </button>
      </div>
    </div>
  );
};
