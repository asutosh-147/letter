import { useEffect,  useState } from "react";
import { useNavigate } from "react-router";

const Letter = () => {
  const [isComplete, setIsComplete] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem("username")!=="mitsuha" || localStorage.getItem("password") !== "mitsuha21012023"){
      navigate("/")
    }
    const timeout = setTimeout(() => {
      setIsComplete(true)
    }, 10000);
  
    return () => {
      clearTimeout(timeout)
    }
  }, [navigate])

  const handleClick = ( ) => {
    navigate("/gift")
  }
  
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
      <div className="peer absolute group-hover:-translate-y-64 duration-300 delay-600 top-[50%] left-[20%] z-[2] w-[15rem] h-[10rem] bg-blue-50 rounded-xl font-medium p-2 hover:scale-200 hover:delay-100 hover:-translate-y-[10em] hover:z-30 text-[8px] text-left flex flex-col items-center">
        <div className="self-start">Hey Pochii...</div>
        <div className="mt-3">Do you remember the day when you asked me to make something for you? we were just friends at that time. Look at us now, getting further away day by day. I've dissapointed you a lot since then and I'm the worst person in your life but here's a little something for you.</div>
        <div className="mt-1">Have it as a small gift from a dear friend🫂 not from a lover. A friend who'll keep your every request🤗. A friend who'll always help you and always be there for listening to your every problem. Because you're his only best friend💙✨.</div>
        <button onClick={handleClick} className="mt-2 p-2 text-white bg-blue-400 border-blue-200 hover:bg-blue-500 rounded-md" disabled={!isComplete}>Get your 🎁 here</button>
      </div>
      <div className="heart absolute peer-hover:animate-ping top-[6em] left-[12em] group-hover:-translate-y-[14em] group-hover:translate-x-[13em] group-hover:rotate-45 duration-300 group-hover:delay-800"/>
      <div className="heart absolute peer-hover:animate-ping top-[1em] left-[5em] group-hover:-translate-y-[14em] group-hover:-translate-x-[12em] group-hover:-rotate-45 duration-300 group-hover:delay-800"/>
    </div>
  );
};

export default Letter;
