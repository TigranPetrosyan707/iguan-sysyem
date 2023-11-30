import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../../components/form";
import { signUpData } from "./consts";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (userData) => {
    try {
      await axios.post("http://localhost:8800/api/auth/sign-up", userData);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return <Form data={signUpData} onSubmit={handleSubmit} error={error} />;
};

export default SignUp;
