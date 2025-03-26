const Letter = () => {
  return (
    <div className="relative w-[375px] group">
      {/* left */}
      <div
        className="absolute w-0 h-0 top-[50%] left-[20%] z-[3] 
          border-t-[10em] border-t-transparent
          border-l-[15em] border-l-blue-300
          shadow-md
          "
      ></div>
      {/* right */}
      <div
        className="absolute w-0 h-0 top-[50%] right-[8%] z-[3] 
        border-t-[10em] border-t-transparent
        border-r-[15em] border-r-blue-200
        shadow-2xl
        "
      ></div>
      <div className="
        absolute w-0 h-0 z-[3] top-[50%] left-[20%]
        border-l-[135px] border-l-transparent
        border-t-[91px] border-t-blue-400
        border-r-[136px] border-r-transparent
        group-hover:rotate-x-180 group-hover:z-[1] origin-top duration-400
      ">
      </div>
      <div
        className="absolute top-[50%] left-[20%] w-[15em] h-[8em] bg-blue-100"
      >
      </div>
      <div className="absolute group-hover:-translate-y-64 duration-300 delay-600 top-[50%] left-[20%] z-[2] w-[15em] h-[10em] bg-blue-50 rounded-xl text-center font-medium capitalize p-2 space-y-5">
        <p>Hi</p>
        <a href="loid_forger.webp" download={"surprise.webp"} className="p-2 border-blue-400 border-b-2 rounded-md">click here</a>
      </div>
    </div>
  );
};

export default Letter;
