import React from "react";

function Navbar({menuu,setMenuu}) {
  const menuHandler = ()=>{
    setMenuu(!menuu);
  }
  return (
    <div className="w-full flex justify-between px-[1vw] h-14">
      <div className="logo flex h-full justify-start items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50" // Set the width
          height="50" // Set the height
          viewBox="0 0 40 40"
        >
          <path
            className="st1"
            fill="white"
            d="M33.96,29.44c-0.65,0.4-1.37,0.6-2.09,0.6h-8.98c-1.33,0-2.62-0.67-3.38-1.88l-1.39-2.25  c-2.73-0.41-4.08,0.51-5.18,2.29l0,0c-0.7,1.1-1.94,1.84-3.34,1.84c-2.19,0-3.97-1.78-3.97-3.97S7.4,22.1,9.59,22.1  c0.14,0,0.28,0.01,0.42,0.02c3.55,0.19,6.99,2.78,7.98,3.57l-5.1-8.23c-1.16-1.86-0.58-4.31,1.28-5.46  c0.63-0.39,1.33-0.58,2.02-0.59h8.94c1.36-0.04,2.71,0.63,3.48,1.87l6.63,10.69C36.39,25.84,35.82,28.29,33.96,29.44"
          />
        </svg>
      </div>
      <div className="menu flex justify-end items-center">
        <h1 onClick={ menuHandler} className="text-white text-[0.68vw] cursor-pointer">MENU</h1>
      </div>
    </div>
  );
}

export default Navbar;
