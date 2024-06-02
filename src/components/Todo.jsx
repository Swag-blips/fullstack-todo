import React from "react";
import bgLight from "../assets/images/bg-desktop-light.jpg";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";
import cross from "../assets/images/icon-cross.svg";

const Todo = () => {
  return (
    <section className="flex items-center flex-col justify-center">
      <figure className="w-full md:h-[300px] h-[200px]">
        <img
          src={bgLight}
          alt="background-img"
          className="w-full object-cover h-full"
        />
      </figure>
      <section className="absolute top-0 md:mt-[70px] flex flex-col mt-[48px] z-50">
        <div className="flex items-center justify-between md:w-[540px] w-[325px]">
          <h1 className="text-white font-bold uppercase text-[20px] md:text-[40px] tracking-[10px] md:tracking-[15px]">
            Todo
          </h1>
          <img
            src={moon}
            alt="moon"
            className="w-[20px] h-[20px] md:w-[26px] md:h-[26px]"
          />
        </div>
        <form className="mt-[40px] text-[#9495A5] text-[12px] md:text-[18px] font-normal tracking-[-0.17px]">
          <div className="relative">
            <input
              type="text"
              name="text"
              id="text"
              className="md:w-[540px] w-[327px] pl-[54px] md:pl-[67px] md:py-[23px] py-[18px] bg-white rounded-[8px] md:h-[64px] outline-none h-[48px]"
              placeholder="Create a new todo..."
            />
            <div className="w-[20px] h-[20px] absolute top-1/2 left-[1.4rem] transform -translate-y-1/2 md:w-[24px] md:h-[24px] border-[1px] border-[#E3E4F1] circle-border rounded-full" />
          </div>
        </form>
        <div className="md:w-[540px] md:h-[439px] w-[327px] h-[368px] bg-white mt-[16px] rounded-[8px] shadow-lg">
          <div className="mx-[23px] my-[20px] items-center">
            <div className="flex flex-row items-center justify-between ">
              <div className="flex items-center gap-[12px] md:gap-[24px]">
                <input
                  type="checkbox"
                  className="custom-checked md:w-[24px] md:h-[24px] w-[20px] h-[20px]"
                />
                <p className="md:text-[18px] text-[#494C6B] text-[12px]">
                  Jog around the park 3x
                </p>
              </div>
              <img src={cross} alt="cross-img" />
            </div>
            <hr className="md:mt-[20px] mt-[16px] border-[#E3E4F1] mx-[-23px]" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Todo;
