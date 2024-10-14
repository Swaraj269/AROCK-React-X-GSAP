import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Loader({ loadingAnimation }) {
  var tl = gsap.timeline();
  const loaderlineref = useRef();
  const loaderref = useRef();
  useGSAP(() => {
    tl.to(loaderlineref.current, {
      transform: "translateX(0%)",
      duration: 2.5,
      delay: 0.8,
      ease: "expo.out",
    })
      .to(
        loaderref.current,
        {
          height: "0%",
          duration: 1.2,
          ease: "expo.inOut",
        },
        "a"
      )
      .to(
        loaderlineref.current,
        {
          transform: "translateX(100%)",
          duration: 1.2,
          ease: "expo.inOut",
          onStart: function () {
            loadingAnimation();
          },
        },
        "a"
      );
  });
  return (
    <div ref={loaderref} className="h-screen w-full fixed z-[9] bg-[#141414]">
      <div className="loderline h-0.5 overflow-hidden w-full bg-transparent">
        <div
          ref={loaderlineref}
          className="line h-full translate-x-[-100%] w-full bg-white"
        ></div>
      </div>
    </div>
  );
}

export default Loader;
