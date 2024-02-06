import React, { Suspense, useEffect, useState } from "react";
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">

      {technologies.map((technology) => (
        <div
          className="w-28 h-28" key={technology.name}
        >
          {isMobile ? <div className='bg-tertiary rounded-[20px] px-6 py-6
           justify-center items-center '  > <img
              className='w-16 h-16 object-contain justify-center items-center'
              src={technology.icon}
              alt={technology.name}
            /></div> :
            <BallCanvas icon={technology.icon} />
          }


        </div>
      ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, '') 