import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
import { Validation } from "../utils/Validation";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState({ text: "" });
  const [text, setText] = useState("");

  const addTodos = (e) => {
    e.preventDefault();

    if (!Validation({ text, setError })) {
      return;
    }
    setTodos((prevState) => [
      ...prevState,
      { id: Date.now(), taskName: text, isCompleted: false },
    ]);
    setText("");
    toast.success("task added");
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <TaskContext.Provider
      value={{ todos, error, text, handleInputChange, addTodos }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
