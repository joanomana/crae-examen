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
      const offset =200;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <div className="flex justify-between items-center">
          <div className="bg-black flex p-2 rounded-r-full gap-1 pr-7">
            <h1 className="text-white font-[RobotoCondensed-Regular]">AQUA</h1>
            <GiWaterDrop className="text-cyan-400 text-[22px]" />
          </div>

          <div className="flex flex-col gap-1 font-[RobotoCondensed-Bold] w-1/2">
            <div className="flex justify-around">
              <a href="#inicio" className="shadow-md p-1 rounded-lg">INICIO</a>
              <a href="#jugar" className="shadow-md p-1 rounded-lg">COMO JUGAR</a>
              <a href="#apoyanos" className="shadow-md p-1 rounded-lg">APÓYANOS</a>
              <a href="#sobre-nosotros" className="shadow-md p-1 rounded-lg">SOBRE NOSOTROS</a>
            </div>

            <div className="h-1 bg-gray-300">
              <div
                className="h-full bg-black transition-all duration-150"
                style={{ width: `${scrollWidth}%` }}
              ></div>
            </div>
          </div>

          <div className="flex gap-3 mr-5">
            <IoMoon className="text-gray-400 cursor-pointer" />
            <MdLightMode className="cursor-pointer" />
          </div>
        </div>
    </>
  );
}

export default Header;
