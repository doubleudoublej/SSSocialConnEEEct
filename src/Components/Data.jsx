import React from "react";
import { Navbar, Hero } from "./index.js"; // Ensure this import is correct
import styles from "../styles.js";

const Data = () => {
  return (
    <div className="bg-rose-200 h-screen">
      <div className="bg-rose-200 text-black text-center p-3">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* hero component */}
        <div className={`bg-rose-200 ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}></div>
        </div>

        {/* About content */}
        <div className={`bg-rose-200 ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <h1 className="text-4xl font-bold mt-10">Data Page</h1>
            <p className="text-lg mt-4">
              This page will be updated once the registration is closed <br />{" "}
              Registration closes on 19th Feb 2025 12:00pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
