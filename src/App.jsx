import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import supabase from "./supabase-client.js";

const App = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
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
      <Route
        path="/data.jsx"
        element={user ? <Data user={user} /> : <Navigate to="/login.jsx" />}
      />
      <Route path="/login.jsx" element={<Login setUser={setUser} />} />
    </Routes>
  );
};

export default App;
