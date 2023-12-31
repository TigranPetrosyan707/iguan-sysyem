import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import styles from "./home.module.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const selectedColor = currentUser.Main;
  const isAdmin = currentUser.isAdmin;

  return (
    <article className={styles.containerStyle}>
      <h2
        style={{
          color: selectedColor ? selectedColor : "",
        }}
      >
        Welcome back, {currentUser.name}!
      </h2>

      {isAdmin && (
        <p>
          You are an admin, so click <Link to="/admin-panel">here</Link> to
          visit the admin panel where you can see all users and change settings.
        </p>
      )}
    </article>
  );
};

export default Home;
