import classes from "./sidebar.module.css";
import Profile from "../../asset/images/profile.png";
import Arrow from "../../asset/images/double-arrow.png";

const Sidebar = () => {
  return (
    <nav className={classes.main}>
      <button>
        <img src={Profile} alt="" />
      </button>
      <button className={classes.arrow}>
        <img src={Arrow} alt="" />
      </button>
    </nav>
  );
};

export default Sidebar;
