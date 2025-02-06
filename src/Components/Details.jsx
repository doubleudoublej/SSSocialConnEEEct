import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";
import { Forms } from ".";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import { useState } from "react";

const Details = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {" "}
          🌟{" "}
          <span className="underline decoration-rose-500 text-black">
            Event Details
          </span>{" "}
          🌟
          {/* <br className="sm:block hidden font-poppins" /> 20 - Feb - 2025 */}
        </h2>

        <div className="flex flex-row items-start justify-between items-center w-full">
          <div className="flex-1 font-poppins font-semibold ss:text-[20px] text-[20px] text-rose-600 ss:leading-[100.8px] leading-[30px]">
            <div className="mt-8 text-lg text-gray-800 leading-relaxed">
              {/* Afternoon Activities */}
              <p className="text-rose-600 font-bold text-2xl">
                🎨 Afternoon Booth Activities
              </p>
              <p className="mt-2">
                🕒 <strong>2:00 PM - 6:00 PM</strong>
              </p>
              <p>
                📍 <strong>Location:</strong>{" "}
                <span className="underline text-rose-500 cursor-pointer">
                  SHHK Foyer
                </span>
              </p>
              <p className="mt-2">
                💡 Enjoy:{" "}
                <span className="text-rose-700 font-semibold">
                  Photobooth, Clay Modelling, Build-your-own-bouquet, Churros
                  Station
                </span>{" "}
                & more!
              </p>

              <hr className="my-6 border-rose-400 w-1/2 mx-auto" />

              {/* Evening Mixer */}
              <p className="text-rose-600 font-bold text-2xl">
                🕵️ Evening Social Mixer
              </p>
              <p className="mt-2">
                🕒 <strong>6:00 PM - 8:45 PM</strong> (Registration starts:{" "}
                <strong>5:30 PM</strong>)
              </p>
              <p>
                📍 <strong>Location:</strong>{" "}
                <span className="underline text-rose-500 cursor-pointer">
                  LKC Function Hall (Exam Hall K)
                </span>
              </p>
              <p className="mt-2 text-rose-500 text-sm">
                *Enter via left spiral staircase of LKC Foyer*
              </p>

              {/* Registration Deadline */}
              <p className="mt-6 text-xl font-bold text-red-600">
                🚨 Registration & Personality Quiz closes on
                <span className="underline text-black">
                  {" "}
                  19th February 2025, 12:00 PM!{" "}
                </span>
              </p>

              <p className="mt-4 text-xl font-semibold text-black">
                Are you ready to connect? 🎉 Join us now!
              </p>
            </div>
          </div>
        </div>
        <div className="button-container flex items-center justify-center w-full mt-10">
          <div className="mt-10">
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105"
              onClick={() => setOpen(true)}
            >
              🎟️ Register Now!!
            </button>
          </div>

          {/* Registration Form Popup */}
          <Drawer
            title="Survey"
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
            size="large"
          >
            <iframe
              title="Survey"
              src="https://forms.gle/p8tDiXpkf5LmgR8X8"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full h-[90vh]"
            >
              Loading…
            </iframe>
          </Drawer>
        </div>
      </div>
    </section>
  );
};

export default Details;
