import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Validation } from "../utils/Validation";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [error, setError] = useState({ text: "" });
  const [text, setText] = useState("");

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodos = (e) => {
    e.preventDefault();

    if (!Validation({ text, setError })) {
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), taskName: text, isCompleted: false },
    ]);
    setText("");
    toast.success("task added");
  };

  const toggleToCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <TaskContext.Provider
      value={{
        todos,
        error,
        deleteTodo,
        text,
        handleInputChange,
        toggleToCompleted,
        addTodos,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
