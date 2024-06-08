import React, { useContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    setTodos((prevState) => [
      ...prevState,
      { id: Date.now, isCompleted: false },
    ]);
  };

  return (
    <TaskContext.Provider value={{ todos, addTodos }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
