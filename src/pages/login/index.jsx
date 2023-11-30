import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Form from "../../components/form";
import { loginData } from "./consts";

const Login = () => {
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (userData) => {
    try {
      await login(userData);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return <Form data={loginData} onSubmit={handleSubmit} error={error} />;
};

export default Login;
