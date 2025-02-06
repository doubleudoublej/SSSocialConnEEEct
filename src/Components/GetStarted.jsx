import React, { useState, useEffect } from "react";
import styles from "../styles";
import { arrowup } from "../Constants/Images";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";
import Forms from "./Forms";

const GetStarted = () => {
  const targetDate = "2025-02-20T18:00:00";

  return (
    <div className={`${styles.flexCenter} items-center flex-col`}>
      <div className="mb-4">
        <h2 className="text-3xl font-semibold text-red-600 underline decoration-rose-500">
          Event Starts In
        </h2>
        <CountdownTimer targetDate={targetDate} />
      </div>
      {/* <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px]`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-rose-100 w-[100%] h-[100%] rounded-full`}
        >
          <div className={`styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
              <Link to="/forms.jsx">
                <span className="text-gradient">
                  Signup
                  <img
                    src={arrowup}
                    alt="arrowup"
                    className="w-[23px] h-[23px] object-contain w-full cursor-pointer"
                  />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GetStarted;
