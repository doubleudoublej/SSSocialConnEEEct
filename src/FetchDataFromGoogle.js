import { useState, useEffect } from "react";
import axios from "axios";

const API_URL =
  "https://script.google.com/macros/s/AKfycbyDOaqe2l3bfaKY6ipSr1m3bipLm6IHME87yeQysJedhzUNFBo0AQNJ9jogqPCdEwEf/exec";

function App() {
  const [user, setUser] = useState(null);
  const userId = "3f262e7a-846d-4aa7-a9be-44a35ac65f2b"; // Example ID

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.post(API_URL, {
          function: "getUser",
          payload: { id: userId },
        });

        if (response.data.error) {
          console.error("Error:", response.data.error);
        } else {
          setUser(response.data);
        }
      } catch (error) {
        console.error("API request failed:", error);
      }
    }

    fetchUser();
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.user}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default App;
