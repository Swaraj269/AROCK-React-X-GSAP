import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Menu from "./Menu";

function Home({ menuu, setMenuu, menuclose, setMenuclose }) {
  var tl2 = gsap.timeline();
  var tl3 = gsap.timeline();
  const imageref = useRef();
  const homeref = useRef();
  const headingref = useRef([]);
  const opacityref = useRef([]);
  useGSAP(()=>{
    if(menuclose === true){
      gsap.set(homeref.current,{
        pointerEvents: "auto",
      })
      gsap.to(homeref.current,{
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        onComplete: function(){
          setTimeout(function(){
            loadingAnimation();
          }, 500);
        }
      })
    }
  },[menuclose]);
  useGSAP(() => {
    if (menuu === true) {
      gsap.set(homeref.current, {
        pointerEvents: "none",
      });
      tl3.to(
        homeref.current,
        {
          opacity: 0.8,
          duration: 0.1,
          ease: "expo",
        },
        "a"
      );
      tl3.to(
        homeref.current,
        {
          clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
        },
        "a"
      );
      tl3.to(homeref.current,{
        delay: 1.7,
        opacity: 1,
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 0,
      })
    }
  }, [menuu]);
  const loadingAnimation = () => {
    useGSAP(
      tl2
        .from(
          imageref.current,
          {
            delay: 0.3,
            scale: 1.3,
            duration: 1,
            ease: "expo.Out",
          },
          "a"
        )
        .from(
          headingref.current,
          {
            y: 500,
            delay: 0.1,
            opacity: 0,
            stagger: 0.1, // Animates each letter with a small delay
            duration: 0.8,
            ease: "circ.out",
          },
          "a"
        )
        .from(opacityref.current, {
          y: 10,
          delay: -0.2,
          opacity: 0,
          duration: 2,
          ease: "expo.out",
        })
    );
  };
  return (
    <div className="overflow-hidden">
      <Loader loadingAnimation={loadingAnimation} />
      <Menu menuclose = {menuclose} setMenuclose = {setMenuclose} />
      <div ref={homeref} className="home z-[5] relative h-screen w-full">
        <div className="homeimg overflow-hidden absolute z-[-1] h-full w-full">
          <img
            ref={imageref}
            className="h-full w-full object-cover"
            src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop"
            alt=""
          />
        </div>
        <Navbar menuu={menuu} setMenuu={setMenuu} />
        <div className="centerpart flex flex-col absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="homeheadingtext overflow-hidden ">
            <h1 className="text-[#fff] inline-block w-[80vw] leading-[0.83] text-center text-[20.5vw] font-[1000] ">
              <span
                className="inline-block"
                ref={(el) => (headingref.current[0] = el)}
              >
                A
              </span>
              <span
                className="inline-block"
                ref={(el) => (headingref.current[1] = el)}
              >
                R
              </span>
              <span
                className="inline-block"
                ref={(el) => (headingref.current[2] = el)}
              >
                O
              </span>
              <span
                className="inline-block"
                ref={(el) => (headingref.current[3] = el)}
              >
                C
              </span>
              <span
                className="inline-block"
                ref={(el) => (headingref.current[4] = el)}
              >
                K
              </span>
              <span
                ref={(el) => (opacityref.current[0] = el)}
                className="reversed inline text-[5vw] translate-x-[-25%] absolute top-[9%] font-[400]"
              >
                &#174;
              </span>
            </h1>
          </div>
          <div className="homebottomtext flex items-center justify-between">
            <div
              ref={(el) => (opacityref.current[1] = el)}
              className="reel flex items-center gap-[0.4vw]"
            >
              <div className="playbutton h-[2.15vw] flex items-center justify-center w-[2.15vw] rounded-full ">
                <i className="ri-play-mini-fill text-sm text-white"></i>
              </div>
              <div className="homebottomtext">
                <h1 className="uppercase text-white text-[0.74vw] leading-[1]">
                  Play
                </h1>
                <h1 className="uppercase  text-white text-[0.74vw] leading-[1]">
                  the Film
                </h1>
              </div>
            </div>
            <div
              ref={(el) => (opacityref.current[2] = el)}
              className="otherthenreel flex items-center gap-[4.8vw]"
            >
              <div className="creator">
                <h1 className="uppercase text-white text-[0.74vw] leading-[1]">
                  creator
                </h1>
                <h1 className="uppercase text-white text-[0.74vw] leading-[1]">
                  curator
                </h1>
              </div>
              <div className="cities">
                <h1 className="uppercase text-white text-[0.74vw] leading-[1]">
                  new york
                </h1>
                <h1 className="uppercase text-white text-[0.74vw] leading-[1]">
                  los angeles
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
