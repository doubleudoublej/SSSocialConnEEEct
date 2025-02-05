import React, { useState } from "react";
import { Navbar } from "./index.js"; // Ensure this import is correct
import styles from "../styles";
import { Drawer } from "antd";

function Forms() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-rose-200 text-black text-center p-3 min-h-screen">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexCenter} flex-col p-6`}>
        <h1 className="text-4xl font-bold mb-6">Tell us more about yourself</h1>
        <div className="button-container">
          <button
            type="button"
            className="bg-rose-600 text-white py-5 px-5 rounded-full"
            onClick={() => setOpen(true)}
          >
            Click here to begin Quiz
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
    </div>
  );
}

export default Forms;
