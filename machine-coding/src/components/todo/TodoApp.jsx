import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>Todo</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
