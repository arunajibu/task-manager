import React from "react";
import TaskManager from "./components/TaskManager";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskManager />
    </div>
  );
};

export default App;