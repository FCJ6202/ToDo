import React, { useState } from "react";
import "./style.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="todo-container" style={{ marginTop: "80px" }}>
      <div className="todo-heading">
        <h1 style={{ fontWeight: "700" }}>TODO</h1>
      </div>
      <div className="todo-heading1">
        <h7 style={{ fontWeight: "bold" }}>Task List</h7>
        <div className="task-stats" style={{ color: "#9999A3" }}>
          {tasks.filter((task) => task.completed).length}/{tasks.length} done
        </div>
      </div>
      <div className="todo-content">
        <div className="add-task">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Add a new task"
          />
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={task.completed ? "completed" : "not-completed"}
            >
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleCompletion(index)}
                />
                {task.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* <button >Add</button> */}
      <button
        type="button"
        class="btn btn-primary btn-lg rounded-200"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoList;