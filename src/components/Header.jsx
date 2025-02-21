import React, { useState, useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";

function Header() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
      const scrolled = (scrollTop / docHeight) * 80 + 20;
    
      setScrollWidth(scrolled>100?100:scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <div className="flex justify-between">
          <div className="bg-black flex items-center p-2 rounded-r-full gap-1 xl:pr-4 pr-5 sm:pr-7">
            <h1 className="text-white font-[RobotoCondensed-Regular] md:text-auto xl:text-3xl sm:text-1xl">AQUA</h1>
            <GiWaterDrop className="text-cyan-400 h-auto w-auto" />
          </div>

          <div className="flex flex-col gap-1 font-[RobotoCondensed-Bold]  ">
            <div className="flex justify-center gap-7">
              <a href="#inicio" className="shadow-md p-1 rounded-lg px-3">INICIO</a>
              <a href="#jugar" className="shadow-md p-1 rounded-lg px-2">COMO JUGAR</a>
              <a href="#apoyanos" className="shadow-md p-1 rounded-lg px-3">APÓYANOS</a>
              <a href="#sobre" className="shadow-md p-1 rounded-lg px-2">SOBRE NOSOTROS</a>
            </div>

            <div className="h-1 bg-gray-300">
              <div
                className="h-full bg-black transition-all duration-150"
                style={{ width: `${scrollWidth}%` }}
              ></div>
            </div>
          </div>

          <div className="mt-2 flex gap-3 text-2xl">
            <IoMoon className="text-gray-400 cursor-pointer" />
            <MdLightMode className="cursor-pointer" />
          </div>
        </div>
    </>
  );
}

export default Header;
