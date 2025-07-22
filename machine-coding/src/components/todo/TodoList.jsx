const TodoList = ({ todos, setTodos }) => {
  const handleDeleteTodos = (todo) => {
    const filteredTodos = todos.filter((todoItem) => {
      return todoItem.id !== todo.id;
    });
    setTodos(filteredTodos);
  };

  const handleToggleStatus = (todoId) => {
    const updatedTodos = todos.map((todoItem) => {
      return todoItem.id === todoId
        ? { ...todoItem, isCompleted: !todoItem.isCompleted }
        : todoItem;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      {todos?.length > 0 &&
        todos.map((todoItem) => {
          return (
            <div style={{ marginTop: "10px" }}>
              <span>{todoItem.title}</span>
              <span>
                &nbsp; <b>Is Completed :-&nbsp; </b>
                {todoItem.isCompleted ? "Completed" : "Not Completed"}
              </span>

              {/* <button style={{ marginLeft: "10px" }}>Edit</button> */}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleDeleteTodos(todoItem)}
              >
                Delete
              </button>
              <label htmlFor="">
                <b>&nbsp;Status</b>
              </label>
              <input
                type="checkbox"
                checked={todoItem.isCompleted}
                onChange={() => handleToggleStatus(todoItem.id)}
                style={{ marginLeft: "10px" }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
