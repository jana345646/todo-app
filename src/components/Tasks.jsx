function Tasks() {
  return (
    <>
      <div className="w-full mt-[1rem] flex flex-col items-center">
        <div className="w-[69.3] flex flex-col items-center">
          <img src="detective.png" className="w-[13.8rem] h-[10.8rem]" />
          <p className="pt-[1.2rem] font-[Kanit] font-normal text-xl leading-none capitalize">
            Empty...
          </p>
        </div>
        <button className="absolute top-[40rem] left-[65rem] w-[3.1rem] h-[3.1rem]  rounded-full bg-[#6C63FF] px-[0.8rem]">
          <img src="add.png" className="w-[1.5rem] h-[1.5rem]" />
        </button>
      </div>
    </>
  );
}
export default Tasks;
