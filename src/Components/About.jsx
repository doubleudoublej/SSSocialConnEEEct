import React from "react";
import { Navbar, Hero, Footer } from "./index.js"; // Ensure this import is correct
import styles from "../styles.js";
import { LKCFH, LKCmap } from "../Constants/Images";

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
            <h1 className="text-2xl font-bold mt-10 underline">
              What is SSSocial ConnEEEct?
              <br />
            </h1>

            <p className="flex-1 font-poppins font-semibold ss:text-[20px] text-[20px] text-rose-500 ss:leading-[100.8px] mt-4">
              SSSocial ConnEEEct is a <strong>vibrant and exciting</strong>{" "}
              collaboration between the School of EEE and SSS!
            </p>

            <p className="flex-1 font-poppins font-semibold ss:text-[20px] text-[20px] text-black ss:leading-[50px] mt-6">
              Designed as a{" "}
              <span className="text-rose-500 underline">social mixer</span>,
              this event is your chance to make{" "}
              <strong>unforgettable memories</strong>, build new friendships,
              and have an amazing time!
            </p>

            {/* Afternoon Section */}
            <h2 className="text-xl font-bold text-rose-500 mt-8">
              🎨 Afternoon Fun @ SHHK Foyer (2:00 - 6:00 PM)
            </h2>
            <p className="text-black font-poppins font-medium text-[18px] mt-2">
              Drop by for a relaxing and creative afternoon filled with{" "}
              <strong>arts and crafts booths</strong>! Unleash your creativity,
              mingle with friends, and enjoy the perfect blend of{" "}
              <strong>connection and fun</strong>. Whether you're getting crafty
              or simply soaking in the atmosphere, this is the perfect way to
              bond and create something memorable.
            </p>

            {/* Evening Section */}
            <h2 className="text-xl font-bold text-rose-500 mt-8">
              🕵️ Evening Mystery @ LKC Function Room (5:30 - 8:45 PM)
            </h2>
            <p className="text-black font-poppins font-medium text-[18px] mt-2">
              As the sun sets, step into an immersive{" "}
              <strong>high school-themed murder mystery</strong>! Work in pairs
              or small groups to{" "}
              <strong>unravel clues, solve puzzles, and crack the case</strong>.
              With unexpected twists, thrilling challenges, and a night full of
              surprises, this interactive adventure is your chance to{" "}
              <strong>connect, collaborate, and have a blast</strong>!
            </p>

            {/* Call to Action */}
            <p className="text-black font-poppins font-semibold text-[18px] mt-6">
              💡{" "}
              <strong>
                Friendship, fun, and mystery await—are you ready to be part of
                the excitement?
              </strong>
            </p>

            {/* Directions Section */}
            <h2 className="underline text-xl font-bold text-rose-500 mt-10">
              📍 Directions to LKC Function Hall
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center h-full mt-4">
              <img
                src={LKCFH}
                alt="LKC Function Hall"
                className="w-full md:w-[400px] h-auto"
              />
              <img
                src={LKCmap}
                alt="LKC Omni Map"
                className="w-full md:w-[400px] h-auto mt-4 md:mt-0 md:ml-4"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default About;
