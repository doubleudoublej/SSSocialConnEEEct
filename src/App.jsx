import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./styles.js";
import {
  Navbar,
  Hero,
  Stats,
  Data,
  Forms,
  Details,
  Testimonials,
  Login,
  Footer,
  GetStarted,
  About,
} from "./Components/index.js"; // Ensure this import is correct
import { Drawer } from "antd";
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Routes>
      <Route
        path="/SSSocialConnEEEct"
        element={
          <>
            <div className="bg-rose-200 text-black text-center p-3">
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
              {/* hero component */}
              <div className={`bg-rose-200 ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero />
                </div>
              </div>

              {/* remaining components */}
              <div
                className={`bg-rose-200 ${styles.paddingX} ${styles.flexStart}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <GetStarted />
                  {/* <Stats />  // for future event statistics*/}
                  <Details />
                  {/* <Testimonials /> // for future event testimonials*/}
                  <Footer />
                </div>
              </div>
            </div>
          </>
        }
      />
      <Route path="/about.jsx" element={<About />} />
      <Route path="/data.jsx" element={<Data />} />
      <Route path="/login.jsx" element={<Login />} />
    </Routes>
  );
};

export default App;
