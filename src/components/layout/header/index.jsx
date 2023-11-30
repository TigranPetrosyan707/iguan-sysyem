import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import styles from "./header.module.css";

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const selectedColor = currentUser.Header;
  return (
    <header
      className={styles.headerStyle}
      style={{
        background: selectedColor ? selectedColor : "",
      }}
    >
      <img src="/logo.svg" alt="logo" />
      <button className={styles.buttonStyle} onClick={logout}>
        Log out &rarr;
      </button>
    </header>
  );
};

export default Header;
