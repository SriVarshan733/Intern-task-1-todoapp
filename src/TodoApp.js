import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./TodoApp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = task;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }
    setTask("");
  };

  const handleDelete = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  const handleEdit = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="todo-container">
      <h2>TODO LIST</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="add item . . ."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index} className="todo-item">
            <span>{item}</span>
            <div className="btn-group">
              <button className="delete" onClick={() => handleDelete(index)}>
                <FaTrash /> Delete
              </button>
              <button className="edit" onClick={() => handleEdit(index)}>
                <FaEdit /> Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
