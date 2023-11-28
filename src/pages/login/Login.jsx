import { Link } from "react-router-dom";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/padlock.png";

const Login = () => {
  return (
    <div className="container">
      <form>
        <div className="inputs">
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
          <Link to="/sign-up">
            <button>Don't have an account? Sign up</button>
          </Link>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
