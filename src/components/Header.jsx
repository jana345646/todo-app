function Header({ input, setInputValue, setFilteredMenue, FMenue }) {
  return (
    <div className="w-full  pt-[2.5rem] flex flex-col gap-[1.125rem] items-center">
      <p className="font-[Kanit] font-medium text-[1.6rem] leading-none text-center">
        TODO LIST
      </p>

      <div className=" w-full flex flex-row gap-[1rem] justify-center">
        <div className="relative w-full max-w-md">
          <input
            value={input}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search note..."
            className="w-full h-full rounded-[0.3rem] border-[0.06rem] border-[#6C63FF] py-[0.5rem] px-[1rem]
          font-[Inter] font-medium text-[1rem] leading-none text-[#C3C1E5] focus:outline-none"
          />
          <img
            src="search.png"
            className="w-[1rem] h-[1rem] absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <select
          value={FMenue}
          onChange={(e) => setFilteredMenue(e.target.value)}
          className="w-[15%]  rounded-[0.3rem] bg-[#6C63FF] font-[Kanit] font-medium text-sm
        leading-none uppercase text-[#F7F7F7] px-1 focus:outline-none"
        >
          <option value={"All"}>ALL</option>
          <option value={"Complete"}>Complete</option>
          <option value={"InComplete"}>Incomplete</option>
        </select>

        <button className="w-[3rem] h-[3rem]  rounded-[0.3rem] bg-[#6C63FF] flex justify-center items-center">
          <img src="moon.png" className="w-[1.3rem] h-[1.3rem]" />
        </button>
      </div>
    </div>
  );
}

export default Header;
//leading-none: it menas that the space between the lines will be the same value of the font size (small space)
//max-w-md:avoid the width form over enlarging
