import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useEffectOnce } from "react-use";

const Landing = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [errorCounter, setErrorCounter] = useState(0)
  const pastCount = useRef(0);
  const navigate = useNavigate();
  const boom = new Audio("/audio/boom.mp3")
  useEffectOnce(()=>{
    if(localStorage.getItem("username")=="mitsuha" && localStorage.getItem("password")=="mitsuha21012023"){
      navigate("/letter")
    }
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName === "mitsuha" && pass === "mitsuha21012023") {
      localStorage.setItem("username", userName);
      localStorage.setItem("password", pass);
      navigate("/letter")
    } else if (userName !== "mitsuha") {
      setError("username is wrong!");
      setUserName("")
      pastCount.current = (pastCount.current + 1)%6 ? (pastCount.current + 1)%6 : 1
      setErrorCounter(pastCount.current)
      boom.play()
    } else if (pass !== "mitsuha21012023") {
      setPass("")
      setError("password is wrong!");
      pastCount.current = (pastCount.current + 1)%6 ? (pastCount.current + 1)%6 : 1
      setErrorCounter(pastCount.current)
      boom.play()
    } else {
      setPass("")
      setUserName("")
      setError("both username and password is wrong!");
      pastCount.current = (pastCount.current + 1)%6 ? (pastCount.current + 1)%6 : 1
      setErrorCounter(pastCount.current)
      boom.play()
    }
    return;
  };
  useEffect(() => {
    if(errorCounter!==0) {
      setTimeout(()=>{
        setErrorCounter(0)
      },5000)
    }
  
  }, [errorCounter])
  
  return (
    <div className="bg-yellow-400 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
        <div className="bg-gray-800 shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
        </div>
        <form onSubmit={handleSubmit} className="p-12 md:p-24">
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>
            <input
              type="text"
              id="username"
              className="bg-gray-200 rounded-md pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Username"
              value={userName}
              onChange={(e) => {
                setError("");
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
              <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
            </svg>
            <input
              id="password"
              className="bg-gray-200 rounded-md pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                setError("");
                setPass(e.target.value);
              }}
            />
          </div>
          <button className="bg-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded-md">
            Login
          </button>

          {error.length != 0 ? (
            <div className=" mt-5 text-center font-bold text-red-500">{error}</div>
          ) : (
            <div className=" mt-5 text-left font-semibold">
              <span className="text-red-400">
                Hint: everything in lowercase
              </span>
              <div className="text-orange-500">
                Username: what i used to call you before we got into
                relationship.
              </div>
              <div className="text-orange-500">
                Password: username with the worst date of your life with me.
              </div>
            </div>
          )}
          {
            errorCounter == 1 && <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/meme/cat.gif" alt="" />
          }
          {
            errorCounter == 2 && <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/meme/cat2.gif" alt="" />
          }
          {
            errorCounter == 3 && <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/meme/rock.gif" alt="" />
          }
          {
            errorCounter == 4 && <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[400px]" src="/meme/cat3.gif" alt="" />
          }
          {
            errorCounter == 5 && <img className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/meme/rock2.gif" alt="" />
          }
        </form>
      </div>
    </div>
  );
};

export default Landing;
