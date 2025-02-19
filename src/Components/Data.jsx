import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase-client.js";
import { Navbar, Footer } from "./index.js";
import styles from "../styles.js";

const Data = ({ user }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login.jsx");
      return;
    }
    fetchUserInfo();
  }, [user]);

  const fetchUserInfo = async () => {
    setLoading(true);
    console.log("Fetching user data from Supabase");

    const { data, error } = await supabase
      .from("pairings")
      .select("*")
      .eq("email", user.email)
      .single();

    if (error) {
      console.log("Error fetching: ", error.message);
    } else {
      setInfo(data);
    }
    setLoading(false);
  };

  // Function to split and render the fun facts with dynamic numbering
  const renderFunFacts = (funFactStr) => {
    if (!funFactStr) return null;

    // Split the string by the delimiter (""), filter out any empty strings
    const funFacts = funFactStr
      .split('""')
      .filter((fact) => fact.trim() !== "");

    return funFacts.map((fact, index) => (
      <p key={index} className="text-gray-700 font-medium">
        <span className="font-bold text-rose-500">Person {index + 1}:</span>{" "}
        {fact}
      </p>
    ));
  };

  return (
    <div className="bg-rose-200 min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full bg-rose-200 text-black text-center p-3">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      {/* User Information Section */}
      <div className="flex flex-col items-center w-full px-6">
        <h1 className="text-4xl font-bold mt-10 text-rose-600">User Profile</h1>
        <p className="text-lg mt-2 text-gray-700">
          Your registered information
        </p>

        {loading ? (
          <p className="text-lg font-medium mt-6 text-gray-600">
            Loading your data...
          </p>
        ) : info ? (
          <div className="bg-white rounded-lg p-6 mt-6 max-w-md w-full shadow-lg">
            <div className="space-y-4">
              {info.name && (
                <p className="text-gray-700 font-medium">
                  <span className="font-bold text-rose-500">Name:</span>{" "}
                  {info.name}
                </p>
              )}
              {info.email && (
                <p className="text-gray-700 font-medium">
                  <span className="font-bold text-rose-500">Email:</span>{" "}
                  {info.email}
                </p>
              )}
              {info.safeword && (
                <p className="text-gray-700 font-medium">
                  <span className="font-bold text-rose-500">Safe Word:</span>{" "}
                  {info.safeword}
                </p>
              )}

              {info.team && (
                <p className="text-gray-700 font-medium">
                  <span className="font-bold text-rose-500">Team:</span>{" "}
                  {info.team}
                </p>
              )}
              {info.pairfunfact && (
                <p className="text-gray-700 font-medium">
                  <span className="font-bold text-rose-500">
                    Partner Funfact/2 truths 1 lie:
                  </span>{" "}
                  <br />
                  {info.pairfunfact}
                </p>
              )}

              {info.funfact && (
                <div>
                  <span className="font-bold text-rose-500">
                    Table's Fun Fact // 2 Truth 1 Lie:
                  </span>
                  <br />
                  {renderFunFacts(info.funfact)}
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-lg font-medium mt-6 text-gray-600">
            No data found
          </p>
        )}
      </div>

      {/* Important Information Section */}
      <div className="bg-white rounded-lg p-6 mt-12 max-w-lg w-full shadow-lg text-center">
        <h2 className="text-2xl font-bold text-rose-600 mb-4">
          Important Information
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>If you feel uncomfortable at any point,</strong> do look for
          any committee member wearing a colored tag on their wrist!
        </p>
        <p className="text-gray-700 mb-4">
          Since the safeword is <strong>unique to each gender</strong>,
          participants of the same gender should look out for each other. In the
          event that the safeword was used by another participant, do alert any
          committee member ASAP who will intervene if needed.
        </p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-rose-500">
            Essential Contact Numbers
          </h3>
          <ul className="text-gray-700 mt-2 space-y-1">
            <li>
              📞 NTU Campus Security: <strong>6790 5200</strong>
            </li>
            <li>
              📞 University Counselling Centre: <strong>6790 4462</strong>
            </li>
            <li>
              🚔 Police: <strong>999</strong>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-rose-500">
            Event Requirements
          </h3>
          <p className="text-gray-700 mt-2">
            🎓 <strong>Do remember to bring your matriculation card</strong> for
            verification of identity.
          </p>
          <p className="text-gray-700 mt-2">
            👕 <strong>Show up in smart casual outfits</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Data;
