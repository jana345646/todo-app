import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function Tasks({ task, setIsOpen, tasks }) {
  return (
    <>
      {tasks.length === 0 ? (
        <div className="w-full mt-[1rem] flex flex-col items-center">
          <div className="w-[69.3] flex flex-col items-center">
            <img src="detective.png" className="w-[13.8rem] h-[10.8rem]" />
            <p className="pt-[1.2rem] font-[Kanit] font-normal text-xl leading-none capitalize">
              Empty...
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-[80.9%]  pt-[1.5rem] flex flex-col items-center gap-[1rem]">
          <div className="flex justify-between w-[32.8rem]">
            <div className="flex items-center gap-4">
              <label className="relative w-[1.4rem] h-[1.4rem] flex items-center justify-center">
                <input
                  type="checkbox"
                  className=" w-full h-full rounded-xs border-[0.06rem] border-[#6C63FF] peer appearance-none
            checked:bg-[#6C63FF] checked:border-[#6C63FF]"
                />
                <span
                  className=" absolute flex items-center justify-center text-white opacity-0
      peer-checked:opacity-100"
                >
                  <FaCheck size={12} />
                </span>
              </label>

              {tasks.map((task, index) => (
                <div key={index}>{task}</div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button>
                <img
                  src="edit.svg"
                  className="w-[1rem] h-[1rem] text-[#CDCDCD] "
                />
              </button>
              <button>
                <img
                  src="delete.svg"
                  className="w-[1.1rem] h-[1.1rem] text-[#CDCDCD] "
                />
              </button>
            </div>
          </div>
          <div className="w-[32.5rem] border-[0.06rem] border-[#6C63FF] opacity-50"></div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-[40rem] left-[65rem] w-[3.1rem] h-[3.1rem]  rounded-full bg-[#6C63FF] px-[0.8rem]"
      >
        <img src="add.png" className="w-[1.5rem] h-[1.5rem]" />
      </button>
    </>
  );
}
export default Tasks;
//apperance-none: it removes the default style of the browser
//opacity-0: it make the right to not appear
//peer: when we click on the checkbox make an action
