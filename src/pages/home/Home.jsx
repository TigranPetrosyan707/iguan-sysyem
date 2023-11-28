import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Home = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <h2>
      Welcome back dear <span onClick={logout}>{currentUser.name}</span>
    </h2>
  );
};

export default Home;
