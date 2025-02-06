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
          <span className="underline text-black">Event details:</span>
          {/* <br className="sm:block hidden font-poppins" /> 20 - Feb - 2025 */}
        </h2>
        <div className="flex flex-row items-start justify-between items-center w-full">
          <div className="flex-1 font-poppins font-semibold ss:text-[20px] text-[20px] text-rose-600 ss:leading-[100.8px] leading-[30px]">
            Afternoon Booth Activites from 2:00pm - 6:00pm
            <br /> Comprising of photobooths, clay modelling, build your own
            bouquet, and more! <br />
            Event Location: <span className="underline">SHHK Foyer</span>
            <br />
            <br />
            Night Event Registration starts @ 5:30pm <br />
            Start: 6:00pm <br />
            Ends: 8:45pm <br />
            <br />
            Event Location: <span className="underline">
              LKC Function Hall
            </span>{" "}
            (Exam Hall K) <br />
            <span className="flex-1 font-poppins font-semibold ss:text-[20px] text-[15px] text-rose-500 ss:leading-[100.8px] leading-[20px]">
              *From LKC, take the left spiral staircase up to level 3 and turn
              left* <br />
              Registration closes on{" "}
              <span className="underline text-rose-800">
                19th Feb 2025 12:00pm
              </span>
              ! So grab your friends and signup now!
            </span>
          </div>
          <div></div>
        </div>
        <div className="button-container flex items-center justify-center w-full mt-10">
          <button
            type="button"
            button
            className="bg-cyan-400 hover:bg-cyan-600 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500 active:bg-cyan-700 text-black font-semibold py-5 px-5 rounded-full "
            onClick={() => setOpen(true)}
          >
            Register Now!!
          </button>
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
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              style={{ width: "100%", height: "calc(100% - 3px)" }}
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
