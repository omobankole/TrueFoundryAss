import classes from "./layout.module.css";

import Header from "../components/Header/header";
import Sidebar from "../components/SideBar/sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div className={classes.children}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
