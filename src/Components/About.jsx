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
                This event provides an opportunity for members of both faculties
                to mingle and have fun together!
                <br />
                <br />
                Come by in the afternoon along SHHK Foyer from 2:00 - 6:00 pm to
                have fun with the various arts and crafts booths available! With
                a blend of creativity, connection, and fun, come join us to
                deepen your relationships and make lasting memories!
                <br />
                <br />
                <br />
                Afterwards, join us in the evening at LKC Function Room from
                5:30 - 8:45 pm for an exhilarating night of mystery and
                connection! Step into an immersive high school-themed murder
                mystery, where you will work in pairs or small groups to uncover
                clues, crack puzzles, and solve the case.
                <br />
                <br />
                <br />
                With a mix of intrigue, teamwork, and surprises, come be part of
                an unforgettable adventure and forge new connections along the
                way!
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
