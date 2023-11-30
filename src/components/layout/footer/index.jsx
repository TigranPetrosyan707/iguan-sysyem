import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import styles from "./footer.module.css";

const Footer = () => {
  const { currentUser } = useContext(AuthContext);
  const selectedColor = currentUser.Footer;
  return (
    <footer
      className={styles.footerStyle}
      style={{
        background: selectedColor ? selectedColor : "",
      }}
    >
      <p>Writing code with pleasure &#9829;</p>
    </footer>
  );
};

export default Footer;
