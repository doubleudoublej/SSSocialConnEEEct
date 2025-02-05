import React from "react";
import styles from "../styles";
import { SClogo } from "../Constants/Images";
import { footerLinks } from "../Constants/Stuff";

const Footer = () => {
  return (
    <section className="flex justify-center items-center w-full py-8 bg-rose-200">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[800px] w-full mx-auto gap-x-16 px-4">
        {/* Left Side: SClogo & Description */}
        <div className="flex flex-col items-center text-center">
          <img src={SClogo} alt="SClogo" className="w-[200px] h-[100px] mb-2" />
          <p className="text-black font-medium max-w-[90%]">
            EEEClub x SSSClub
          </p>
        </div>

        {/* Right Side: Links in Row (Wrap on Small Screens) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full md:w-auto overflow-hidden">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="text-center min-w-[120px]">
              <h4 className="font-poppins font-semibold text-black text-[18px]">
                {footerlink.title}
              </h4>
              <ul className="flex flex-wrap justify-center gap-2 mt-2">
                {footerlink.links.map((link) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[16px] text-black hover:text-gray-600 cursor-pointer"
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
