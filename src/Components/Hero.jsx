import React from "react";
import styles from "../styles";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-rose-100 rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-Black">First Ever EEE x SSS Event!</span>
          </p>
        </div>
        {/* above is removable added feature to see if anyone wants to add anything */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-fuchsia-800 ss:leading-[100.8px] leading-[75px]">
            EEE x SSS
            <br className="sm:block hidden" />{" "}
            <span className="text-fuchsia-800">Social Connect</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        {/* <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[20px] text-[20px] text-rose-500 ss:leading-[100.8px] leading-[75px]">
            Filler words to be added here. Filler words to be added here. Maybe
            add some dates and information?
          </h1>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
