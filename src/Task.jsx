export const Task = (props) => {
  const { name, id, completed, removeTask, completeTask} = props;

  return (
    <div>
      <p style={{color: completed ? "green" : "white"}}>
        {id} - {name}
      </p>
      <button onClick={() => removeTask(id)}>Remove task</button>
      <button onClick={() => completeTask(id)}>Complete task</button>
    </div>
  );
};
