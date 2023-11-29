import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import styles from "./layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layoutStyle}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
