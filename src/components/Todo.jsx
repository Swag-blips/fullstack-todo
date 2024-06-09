import React, { useState, useContext, useEffect } from "react";
import bgLight from "../assets/images/bg-desktop-light.jpg";
import bgDark from "../assets/images/bg-desktop-dark.jpg";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";
import { ThemeContext } from "../../context/ThemeProvider";
import { TaskContext } from "../../context/TaskProvider";
import Active from "./Active";
import Completed from "./Completed";
import All from "./All";

const Todo = () => {
  const [visibilityFilter, setVisibilityFilter] = useState(() => {
    try {
      const savedItem = window.localStorage.getItem("visibilityFilter");
      return savedItem ? JSON.parse(savedItem) : "all";
    } catch (err) {
      console.log(err.message);
      return "all";
    }
  });
  const { handleThemeSwitch, theme } = useContext(ThemeContext);
  const { addTodos, todos, handleInputChange, text, clearCompleted } =
    useContext(TaskContext);
  const isDark = theme === "dark";
  const itemsRemain = todos.length;

  useEffect(() => {
    window.localStorage.setItem(
      "visibilityFilter",
      JSON.stringify(visibilityFilter)
    );
  }, [visibilityFilter]);

  const toggleToAll = () => setVisibilityFilter("all");
  const toggleToCompleted = () => setVisibilityFilter("completed");
  const toggleToActive = () => setVisibilityFilter("active");

  return (
    <section className="flex items-center dark:bg-[#171823] bg-[#fafafa] flex-col justify-center h-screen">
      <figure className="w-full md:h-[300px] absolute top-0 h-[200px]">
        {isDark ? (
          <div>
            <img
              src={bgDark}
              alt="background-img"
              className="w-full object-cover md:h-[300px] h-[200px] "
            />
          </div>
        ) : (
          <img
            src={bgLight}
            alt="background-img"
            className="w-full object-cover h-full "
          />
        )}
      </figure>
      <section className="absolute top-0 md:mt-[70px] flex flex-col mt-[48px] z-50">
        <div className="flex items-center justify-between md:w-[540px] w-[325px]">
          <h1 className="text-white font-bold uppercase text-[20px] md:text-[40px] tracking-[10px] md:tracking-[15px]">
            Todo
          </h1>
          {isDark ? (
            <img
              onClick={handleThemeSwitch}
              src={sun}
              alt="sun"
              className="w-[20px] h-[20px] md:w-[26px] md:h-[26px] cursor-pointer"
            />
          ) : (
            <img
              onClick={handleThemeSwitch}
              src={moon}
              alt="moon"
              className="w-[20px] h-[20px] md:w-[26px] md:h-[26px] cursor-pointer"
            />
          )}
        </div>
        <form
          onSubmit={addTodos}
          className="mt-[40px] text-[#9495A5] dark:text-[#767992] text-[12px] md:text-[18px] font-normal tracking-[-0.17px]"
        >
          <div className="relative">
            <input
              type="text"
              name="text"
              id="text"
              value={text || ""}
              onChange={handleInputChange}
              className="md:w-[540px] w-[327px] pl-[54px] md:pl-[67px] md:py-[23px] py-[18px] dark:bg-[#25273D] bg-white rounded-[8px] md:h-[64px] outline-none h-[48px]"
              placeholder="Create a new todo..."
            />
            <div className="w-[20px] h-[20px] absolute top-1/2 left-[1.4rem] transform -translate-y-1/2 md:w-[24px] md:h-[24px] border-[1px] border-[#E3E4F1] dark:border-[#393A4B] circle-border rounded-full" />
          </div>
        </form>
        <div className="md:w-[540px] md:h-[439px] w-[327px] flex flex-col overflow-hidden dark:bg-[#25273D] bg-white mt-[16px] rounded-[8px] shadow-lg">
          <div className="flex-grow overflow-y-auto">
            {visibilityFilter === "all" && <All />}
            {visibilityFilter === "active" && <Active />}
            {visibilityFilter === "completed" && <Completed />}
          </div>
          <div className="bottom-0 z-50 pt-[20px] pret-div pb-[20px] dark:bg-[#25273D] bg-white border-t border-t-[#E3E4F1] dark:border-t-[#393A4B] w-full">
            <div className="flex-row text-[12px] md:text-[14px] tracking-[-0.19px] flex mx-[24px] items-center justify-between">
              <p className="text-[#9495A5] dark:text-[#5B5E7E] text-left">
                {`${itemsRemain} items left`}
              </p>
              <div className="flex-row hidden md:flex cursor-pointer font-bold gap-[20px] items-center">
                <p
                  onClick={toggleToAll}
                  className={`${
                    visibilityFilter === "all"
                      ? "text-[#3A7CFD]  dark:text-[##3A7CFD]"
                      : "text-[#9495A5] dark:text-[#5B5E7E] "
                  } hover:text-[#494c6b] dark:hover:text-[#E3E4F1]`}
                >
                  All
                </p>
                <p
                  onClick={toggleToActive}
                  className={`${
                    visibilityFilter === "active"
                      ? "text-[#3A7CFD] dark:text-[##3A7CFD]"
                      : "text-[#9495A5] dark:text-[#5B5E7E]"
                  }    dark:hover:text-[#E3E4F1] hover:text-[#494c6b]`}
                >
                  Active
                </p>
                <p
                  onClick={toggleToCompleted}
                  className={`${
                    visibilityFilter === "completed"
                      ? "text-[#3A7CFD]  dark:text-[##3A7CFD]"
                      : "text-[#9495A5] dark:text-[#5B5E7E] "
                  } hover:text-[#494c6b] dark:hover:text-[#E3E4F1]`}
                >
                  Completed
                </p>
              </div>
              <button
                onClick={() => clearCompleted()}
                className="text-[#494C6B] dark:text-[#5B5E7E]  dark:hover:text-[#E3E4F1]"
              >
                Clear completed
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#25273D] shadow-lg md:hidden py-[15px] mt-[16px] w-[327px] h-[48px]">
          <div className="flex text-[14px] gap-[20px] tracking-[-0.19px] items-center justify-center">
            <p
              onClick={toggleToAll}
              className={`${
                visibilityFilter === "all"
                  ? "text-[#3A7CFD]  dark:text-[##3A7CFD]"
                  : "text-[#9495A5] dark:text-[#5B5E7E] "
              } hover:text-[#494c6b] dark:hover:text-[#E3E4F1]`}
            >
              All
            </p>
            <p
              onClick={toggleToActive}
              className={`${
                visibilityFilter === "active"
                  ? "text-[#3A7CFD] dark:text-[##3A7CFD]"
                  : "text-[#9495A5] dark:text-[#5B5E7E]"
              }    dark:hover:text-[#E3E4F1] hover:text-[#494c6b]`}
            >
              Active
            </p>
            <p
              onClick={toggleToCompleted}
              className={`${
                visibilityFilter === "completed"
                  ? "text-[#3A7CFD]  dark:text-[##3A7CFD]"
                  : "text-[#9495A5] dark:text-[#5B5E7E] "
              } hover:text-[#494c6b] dark:hover:text-[#E3E4F1]`}
            >
              Completed
            </p>
          </div>
        </div>
        <p className="text-[#9495A5] text-[14px] dark:text-[#5B5E7E] tracking-[-0.19px] mt-[40px] flex items-center justify-center">
          Drag and drop to reorder list
        </p>
      </section>
    </section>
  );
};

export default Todo;
