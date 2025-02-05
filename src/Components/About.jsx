import React from "react";
import { Navbar, Hero, Footer } from "./index.js"; // Ensure this import is correct
import styles from "../styles.js";

const About = () => {
  return (
    <div className="bg-rose-200 h-screen w-full">
      <div className="bg-rose-200 text-black text-center p-3">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* About content */}
        <div className={`bg-rose-200 ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <h1 className="text-2xl font-bold mt-10 ">
              What is SSSocialConnEEEct?
              <br />
            </h1>
            <p className="flex-1 font-poppins font-semibold ss:text-[20px] text-[20px] text-rose-500 ss:leading-[100.8px] ">
              <br />
              SSSocial ConnEEEct is a collaborative event organised by the
              School of EEE and SSS! <br />
              <br />
              <br />
              <p className="flex-1 font-poppins font-semibold ss:text-[20px] text-[20px] text-black ss:leading-[50px]">
                {" "}
                Designed as a{" "}
                <span className="text-rose-500 underline">social mixer</span> to
                make memories with friends and spark new connections.
                <br />
                This event provides an opportunity for members of both faculty
                to mingle and have fun together!
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </p>
          </div>
        </div>
        <div>
          <Footer />
        </div>

        {/* hero component
        <div className={`bg-rose-200 ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            This is only made possible with a team of talented individuals.{" "}
            <br />
            // insert images and description / title / role of each team member{" "}
            <br />
            can create a grid and put images in else can just all centralise bla
            bla
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
