import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider  from "../context/ThemeProvider.jsx";
import TaskProvider from "../context/TaskProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
     <TaskProvider>
      <App />
      </TaskProvider> 
    </ThemeProvider>
  </React.StrictMode>
);
