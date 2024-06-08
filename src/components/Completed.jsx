import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskProvider";
import cross from "../assets/images/icon-cross.svg";

const Completed = () => {
  const { todos } = useContext(TaskContext);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <>
      {completedTodos.map((todo) => (
        <div key={todo.id} className="mx-[23px] mt-[20px] items-center">
          <div className="flex flex-row items-center justify-between ">
            <div className="flex items-center gap-[12px] md:gap-[24px]">
              <p className="md:text-[18px] text-[#494C6B] dark:text-[#C8CBE7] text-[12px] truncate w-[200px] md:w-[400px]">
                {todo.taskName}
              </p>
            </div>
            <img src={cross} alt="cross-img" className="cursor-pointer" />
          </div>
          <hr className="md:mt-[20px] mt-[16px] border-[#E3E4F1] dark:border-[#393A4B] mx-[-23px]" />
        </div>
      ))}
    </>
  );
};

export default Completed;
