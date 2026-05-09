import { IoClose } from "react-icons/io5";

function PopUp({ task, setTask, isOpen, setIsOpen, addTasks }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div
            className="w-[31.2rem] h-[18rem] mt-[-15em] rounded-2xl bg-white flex flex-col items-center dark:bg-[#252525]
          dark:border-1 dark:border-white"
          >
            <div className="w-full relative flex flex-row justify-center pt-[1.2rem] ">
              <p className=" font-[Kanit] font-medium text-[1.5rem]  uppercase dark:text-white">
                New Note
              </p>
              <IoClose
                className="text-2xl absolute right-[1rem] dark:text-white"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-[88%] h-[12%] mt-[1rem] rounded-[0.3rem] border-[0.06rem] border-[#6C63FF] focus:outline-none
          py-[0.5rem] px-[1rem] gap-[27.2rem] font-[Inter] font-medium text-base leading-none text-[#C3C1E5] dark:border-white dark:border-[#666666]"
              placeholder="Input your note..."
            />
            <div className=" w-full h-full pb-5 flex justify-between items-end px-8">
              <button
                onClick={() => setIsOpen(false)}
                className=" w-[5rem] h-[2.3rem] px-[0.3rem] py-[0.5rem]  border-[0.06rem] border-[#6C63FF] font-[kanit] font-medium text-[1rem] 
          text-[#6C63FF] uppercase leading-none rounded-[0.3rem]"
              >
                Cancel
              </button>

              <button
                onClick={() => addTasks(task)}
                className="w-[5rem] h-[2.3rem]  border-[0.06rem] border-[#6C63FF] bg-[#6C63FF] rounded-[0.3rem] 
          font-medium text-[1rem] text-white uppercase leading-none"
                disabled={task.trim() === ""}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default PopUp;
//fixed:it make the popup fixed and don't move with the scroll
//inset: this = top , bottom , right , left 0
