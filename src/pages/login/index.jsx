import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Form from "../../components/form";
import { loginData } from "./consts";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = () => {
    login();
    navigate("/");
  };

  return <Form data={loginData} onSubmit={handleSubmit} />;
};

export default Login;
