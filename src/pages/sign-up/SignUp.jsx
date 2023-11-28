import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import "./SignUp.css";
import userIcon from "../../assets/key.png";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/padlock.png";

const SignUp = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <img src={userIcon} alt="user" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input">
            <img src={emailIcon} alt="email" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={passwordIcon} alt="password" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="link">
          <Link to="/login">
            <button>Have an account? Log in</button>
          </Link>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
