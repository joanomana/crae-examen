import React from "react";
import { IoMoon } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";






function Header() {
  return (
    <>
        <div>
            <h1>Header</h1>
            <IoMoon />
            <MdLightMode />
            <GiWaterDrop />

       
        </div>
    </>
  );
}

export default Header;