import React, { useContext } from "react";
import cross from "../assets/images/icon-cross.svg";
import { TaskContext } from "../../context/TaskProvider";

const All = () => {
  const { todos, toggleToCompleted, deleteTodo } = useContext(TaskContext);
  todos;
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="mx-[23px] mt-[20px] items-center">
          <div className="flex flex-row items-center justify-between ">
            <div className="flex items-center gap-[12px] md:gap-[24px]">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleToCompleted(todo.id)}
                className="custom-checked md:w-[24px] dark:border-[#393A4B] md:h-[24px] w-[20px] h-[20px]"
              />
              <p
                className={`md:text-[18px] ${
                  todo.isCompleted ? "line-through" : ""
                } text-[#494C6B] dark:text-[#C8CBE7] text-[12px] truncate w-[200px] md:w-[400px]`}
              >
                {todo.taskName}
              </p>
            </div>
            <img
              onClick={() => deleteTodo(todo.id)}
              src={cross}
              alt="cross-img"
              className="cursor-pointer"
            />
          </div>
          <hr className="md:mt-[20px] mt-[16px] border-[#E3E4F1] dark:border-[#393A4B] mx-[-23px]" />
        </div>
      ))}
    </>
  );
};

export default All;
