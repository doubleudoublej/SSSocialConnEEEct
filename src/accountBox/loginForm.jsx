import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./common";
import { Marginer } from "../Components/Marginer";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase-client.js";

export function LoginForm({ setUser }) {
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset previous error messages

    console.log("Form submitted with:", { email, password });

    // Query Supabase for user credentials
    const { data, error } = await supabase
      .from("pairings")
      .select("*")
      .eq("email", email)
      .eq("matric", password)
      .single(); // Ensure it returns only one record

    if (error || !data) {
      setError("Invalid email or matric number");
      return;
    }

    console.log("User found:", data);

    // Store user session
    setUser(data);

    // Redirect to the data page
    navigate("/data.jsx");
  };

  return (
    <BoxContainer>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Matric Number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        {error && <p className="text-red-500">{error}</p>}
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Login</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
      </form>
    </BoxContainer>
  );
}
