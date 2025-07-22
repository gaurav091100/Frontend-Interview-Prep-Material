import { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("Please enter todo");
      return;
    }
    const newTodo = {
      id: Date.now().toString(),
      title: todo.trim(),
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit} style={{display:"flex", gap:"10px"}}>
      <input
        type="text"
        placeholder="Enter Todo"
        value={todo}
        onChange={handleChange}
      />
      <button type="submit" className="tab-button">Add Todo</button>
    </form>
  );
};

export default AddTodo;
