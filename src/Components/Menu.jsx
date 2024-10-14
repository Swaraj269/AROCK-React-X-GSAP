import { Tilt } from "@jdion/tilt-react";
import React from "react";

function Menu({ menuclose, setMenuclose }) {
  const handlecloseanimation = () => {
    setMenuclose(!menuclose);
  };
  return (
    <div className="h-screen flex w-full fixed z-[1] bg-[#1a1a1a]">
      <div className="leftmenu h-full w-[70%]">
        <div className="allimage relative h-full w-full px-[2vw] py-[1vw]">
          <Tilt
            options={{
              max: 10,
              scale: 1,
              speed: 100,
              perspective: 1000,
            }}
            className="images h-full w-full relative"
          >
            <img
              className="absolute h-full w-full object-cover object"
              src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
              alt=""
            />
            <img
              className="absolute scale-[0.94] translate-x-[-2.5%] opacity-[0.3]  h-full w-full object-cover object"
              src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
              alt=""
            />
            <img
              className="absolute scale-[0.84] translate-x-[-3%]  opacity-[0.2] h-full w-full object-cover object"
              src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
              alt=""
            />
            <img
              className="absolute scale-[0.74] translate-x-[-3.5%]   opacity-[0.1] h-full w-full object-cover object"
              src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
              alt=""
            />
          </Tilt>
        </div>
      </div>
      <div className="rightmenu flex flex-col items-end h-full w-[30%]">
        <div className="closediv h-14 w-full flex items-center justify-end px-[1vw]">
          <h1
            onClick={handlecloseanimation}
            className="text-white uppercase font-[a4] text-[0.68vw] cursor-pointer"
          >
            Close
          </h1>
        </div>
        <div className="allotherparts w-[82%]">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58" // Set the width
              height="58" // Set the height
              viewBox="0 0 40 40"
            >
              <path
                className="st1"
                fill="white"
                d="M33.96,29.44c-0.65,0.4-1.37,0.6-2.09,0.6h-8.98c-1.33,0-2.62-0.67-3.38-1.88l-1.39-2.25  c-2.73-0.41-4.08,0.51-5.18,2.29l0,0c-0.7,1.1-1.94,1.84-3.34,1.84c-2.19,0-3.97-1.78-3.97-3.97S7.4,22.1,9.59,22.1  c0.14,0,0.28,0.01,0.42,0.02c3.55,0.19,6.99,2.78,7.98,3.57l-5.1-8.23c-1.16-1.86-0.58-4.31,1.28-5.46  c0.63-0.39,1.33-0.58,2.02-0.59h8.94c1.36-0.04,2.71,0.63,3.48,1.87l6.63,10.69C36.39,25.84,35.82,28.29,33.96,29.44"
              />
            </svg>
          </div>
          <div className="menulinks py-[7vw]">
            <h1 className="uppercase leading-[1] cursor-pointer font-[U7] text-4xl text-white">
              About
            </h1>
            <h1 className="uppercase leading-[1] cursor-pointer font-[U7] text-4xl text-white">
              Story
            </h1>
            <h1 className="uppercase leading-[1] cursor-pointer font-[U7] text-4xl text-white">
              Projects
            </h1>
            <h1 className="uppercase leading-[1] cursor-pointer font-[U7] text-4xl text-white">
              Releases
            </h1>
          </div>
          <div className="infopart h-[50%] w-full">
            <div className="info1 h-[25%] flex w-full">
              <div className="leftpartinfo h-full w-[50%]">
                <h1 className="text-[0.65vw] font-[500] leading-[1] uppercase text-white font-[A4]">
                  Follow
                </h1>
                <h1 className="text-[0.65vw] font-[400] leading-[1] uppercase text-white font-[A4]">
                  (Arock@)
                </h1>
              </div>
              <div className="rightpartinfo h-full w-[50%]">
                <h1 className="text-[0.65vw] cursor-pointer font-[500] leading-[1] uppercase text-white font-[A4]">
                  Instagram
                </h1>
                <h1 className="text-[0.65vw] cursor-pointer font-[400] leading-[1] uppercase text-white font-[A4]">
                  youtube
                </h1>
              </div>
            </div>
            <div className="info2 h-[25%] flex w-full">
              <div className="leftpartinfo h-full w-[50%]">
                <h1 className="text-[0.65vw] font-[500] leading-[1] uppercase text-white font-[A4]">
                  Listen
                </h1>
                <h1 className="text-[0.65vw] font-[400] leading-[1] uppercase text-white font-[A4]">
                  (Arock@)
                </h1>
              </div>
              <div className="rightpartinfo h-full w-[50%]">
                <h1 className="text-[0.65vw] cursor-pointer font-[500] leading-[1] uppercase text-white font-[A4]">
                  spotify
                </h1>
                <h1 className="text-[0.65vw] cursor-pointer font-[400] leading-[1] uppercase text-white font-[A4]">
                  mixcloud
                </h1>
              </div>
            </div>
            <div className="info3 flex items-center h-[25%] w-full">
              <div className="leftpartinfo h-full w-[50%]">
                <h1 className="text-[0.65vw] font-[500] leading-[1] uppercase text-white font-[A4]">
                  Get in touch
                </h1>
              </div>
              <div className="rightpartinfo h-full w-[50%]">
                <h1 className="text-[0.65vw] p-1 w-fit bg-white cursor-pointer font-[600] leading-[1] uppercase text-[#1a1a1a] font-[A4]">
                  Email <i className="ri-arrow-right-s-line"></i>
                </h1>
              </div>
            </div>
            <div className="info4 flex mt-[-0.4vw] h-[25%] w-full">
            <div className="leftpartinfo h-full w-[50%]">
                <h1 className="text-[0.65vw] font-[500] leading-[1.2] uppercase text-white font-[A4]">
                  San diego
                </h1>
                <h1 className="text-[0.65vw] font-[400] leading-[1.2] uppercase text-white font-[A4]">
                  bpm music
                </h1>
                <h1 className="text-[0.65vw] font-[500] leading-[1.2] uppercase text-white font-[A4]">
                  1600 National ave
                </h1>
                <h1 className="text-[0.65vw] font-[400] leading-[1.2] uppercase text-white font-[A4]">
                  san diego , ca 92123
                </h1>
              </div>
              <div className="rightpartinfo h-full w-[50%]">
              <h1 className="text-[0.65vw] font-[500] leading-[1.2] uppercase text-white font-[A4]">
                  los angeles
                </h1>
                <h1 className="text-[0.65vw] font-[400] leading-[1.2] uppercase text-white font-[A4]">
                  6255 sunset blvd.
                </h1>
                <h1 className="text-[0.65vw] font-[500] leading-[1.2] uppercase text-white font-[A4]">
                  suite #700
                </h1>
                <h1 className="text-[0.65vw] font-[400] leading-[1.2] uppercase text-white font-[A4]">
                  los angeles , ca 90028
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
