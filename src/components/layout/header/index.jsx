import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import styles from "./header.module.css";

const Header = () => {
  const { logout } = useContext(AuthContext);
  return (
    <header className={styles.headerStyle}>
      <img src="/logo.svg" alt="logo" />
      <button className={styles.buttonStyle} onClick={logout}>
        Log out &rarr;
      </button>
    </header>
  );
};

export default Header;
